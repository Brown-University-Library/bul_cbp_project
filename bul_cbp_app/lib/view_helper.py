# -*- coding: utf-8 -*-

import datetime, logging, pprint, urllib
from bul_cbp_app import settings_app
from bul_cbp_app.models import Tracker
from django.core.urlresolvers import reverse


log = logging.getLogger(__name__)


## views.info() ##


def build_info_context( user, display_admin_url, get_dct ):
    """ Builds info context.
        Called by views.info() """
    username = None
    if user.is_authenticated:
        username = user.first_name
    context = {
        'username': username,
        'login_url': '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(reverse('info_url')) ),
        'admin_url': display_admin_url,
        'logout_url': '%s?next=%s?cache_timeout=0' % ( reverse('logout_url'), urllib.parse.quote(reverse('info_url')) ),
        'projects': make_info_projects_lst( get_dct ) }
    log.debug( 'context, ```%s```' % context )
    return context


def make_info_projects_lst( get_dct ):
    """ Grabs projects.
        Called by build_info_context() """
    projects = Tracker.objects.all().order_by( 'project_name' )
    projects_lst = []
    for project in projects:
        dct = {
            'name': project.project_name,
            'contact': project.project_contact_email,
            'project_info_link': reverse( 'project_info_url', kwargs={'slug': project.slug} ),
            'project_image_link': build_image_link( get_dct, project.slug ) }
        projects_lst.append( dct )
    log.debug( 'projects_lst, ```%s```' % pprint.pformat(projects_lst) )
    return projects_lst


def build_image_link( get_dct, project_slug ):
    cache_timeout = get_dct.get( 'cache_timeout', None )
    image_link = reverse( 'project_image_url', kwargs={'slug': project_slug} )
    if cache_timeout:
        image_link = image_link + '?cache_timeout=%s' % cache_timeout
    return image_link


## views.project_info() ##


def build_project_context( user, tracker, score_image_url, display_admin_url, slug ):
    """ Builds project-info context.
        Called by views.project_info() """
    context = build_project_info_unauthenticated_context( user, tracker, score_image_url, display_admin_url, slug )
    if user.is_authenticated:
        context = build_project_info_authenticated_context( context, user, tracker )
    log.debug( 'returning context' )
    return context

def build_project_info_unauthenticated_context( user, tracker, score_image_url, display_admin_url, slug ):
    """ Builds initial project-info basic context.
        Called by build_project_context() """
    context = {
        'authenticated': user.is_authenticated(),
        'username': None,
        'project_name': tracker.project_name,
        'score_image_url': score_image_url,
        'code_versioned': tracker.code_versioned,
        'has_url': tracker.has_public_code_url,
        'responsive': tracker.responsive,
        'reports': tracker.contains_lightweight_data_reporting,
        'accessability': tracker.accessability_check_run,
        'discoverable': tracker.data_discoverable,
        'has_sitechecker_entry': tracker.has_sitechecker_entry,
        'contact': tracker.project_contact_email,
        'admin_url': display_admin_url,
        'login_url': '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(reverse('project_info_url', kwargs={'slug': slug})) ),
        'logout_url': '%s?next=%s?cache_timeout=0' % ( reverse('logout_url'), urllib.parse.quote(reverse('project_info_url', kwargs={'slug': slug})) ),
        }
    log.debug( 'unauthenticated context, ```%s```' % pprint.pformat(context) )
    return context


def build_project_info_authenticated_context( context, user, tracker ):
    """ Updates and adds values to project-info basic context if user is authenticated.
        Called by build_project_context() """
    context['username'] = user.first_name
    for ( field_name, field_value ) in tracker.__dict__.items():
        log.debug( 'field_name, `%s`' % field_name )
        log.debug( 'field_value, `%s`' % field_value )
        log.debug( 'ending, `%s`' % field_name[-7:] )
        if field_name[-7:] == 'CHECKED':
            entrydct = { 'date': 'init', 'fresh': 'init' }
            entrydct['date'] = str(field_value) if field_value else 'no_date'
            entrydct['fresh'] = True if ( field_value is None or field_value + datetime.timedelta(6*365/12) < datetime.date.today() ) else False
            context[field_name] = entrydct
    log.debug( 'authenticated context, ```%s```' % pprint.pformat(context) )
    return context


# def build_project_info_authenticated_context( context, user, tracker ):
#     """ Updates and adds values to project-info basic context if user is authenticated.
#         Called by build_project_context() """
#     context['username'] = user.first_name
#     ## initialize dates
#     log.debug( 'type(tracker.__dict__), ```%s```' % type(tracker.__dict__) )
#     log.debug( 'tracker.__dict__, ```%s```' % pprint.pformat(tracker.__dict__) )
#     for entry in tracker.__dict__:
#         log.debug( 'type(entry), `%s`' % type(entry) )
#         log.debug( 'entry, `%s`' % entry )
#         # log.debug( 'ending, `%s`' % field_name[-7,] )
#         # if field_name[-7,] == 'CHECKED':
#         #     entrydct = { 'date': 'init', 'fresh': 'init' }
#         #     entrydct['date'] = str(date_value) if date_value else 'no_date'
#         #     entrydct['fresh'] = True if ( date_value is None or date_value + datetime.timedelta(6*365/12) < datetime.date.today() ) else False
#         #     context[field_name] = entrydct
#     log.debug( 'authenticated context, ```%s```' % pprint.pformat(context) )
#     return context


# def build_project_info_authenticated_context( context, user, tracker ):
#     """ Updates and adds values to project-info basic context if user is authenticated.
#         Called by build_project_context() """
#     context['username'] = user.first_name
#     context['code_versioned_CHECKED'] = { 'date': str(tracker.code_versioned_CHECKED) if tracker.code_versioned_CHECKED else 'no date', 'fresh': False }
#         if tracker.code_versioned_CHECKED and ( tracker.code_versioned_CHECKED + datetime.timedelta(6*365/12) ) > datetime.date.today():
#         context['code_versioned_CHECKED']['fresh'] = True
#     log.debug( 'authenticated context, ```%s```' % pprint.pformat(context) )
#     return context

def build_project_score_image_url( get_dct, tracker ):
    """ Sets the cache_timeout.
        Because on project_info() logout, the image should refresh immediately.
        Called by views.project_info() """
    cache_timeout = get_dct.get('cache_timeout', None)
    if cache_timeout:
        score_image_url = '%s?cache_timeout=%s' % ( reverse('project_image_url', kwargs={'slug': tracker.slug}), int(cache_timeout) )
    else:
        score_image_url = '%s' % reverse( 'project_image_url', kwargs={'slug': tracker.slug} )
    log.debug( 'score_image_url, ```%s```' % score_image_url )
    return score_image_url


# def build_generic_context( start, scheme, host, uri_path ):
#     """ Builds context that'll be converted into json by the view.
#         Called by views.x() """
#     context = {
#         'query': {
#             'date_time': str( start ),
#             'url': '{schm}://{hst}{uri}'.format( schm=scheme, hst=host, uri=uri_path ) },
#         'response': {
#             'documentation': settings_app.README_URL,
#             'elapsed_time': str( datetime.datetime.now() - start ),
#             'message': 'ok' }
#     }
#     log.debug( 'context, ```%s```' % pprint.pformat(context) )
#     return context
