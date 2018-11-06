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


# def make_info_projects_lst( get_dct ):
#     """ Grabs projects.
#         Called by build_info_context() """
#     projects = Tracker.objects.all().order_by( 'project_name' )
#     projects_lst = []
#     for project in projects:
#         dct = {
#             'name': project.project_name,
#             'contact': project.project_contact_email,
#             'project_info_link': reverse( 'project_info_url', kwargs={'slug': project.slug} ),
#             'project_image_link': build_image_link( get_dct, project.slug ),
#             'slug': project.slug }
#         projects_lst.append( dct )
#     log.debug( 'projects_lst, ```%s```' % pprint.pformat(projects_lst) )
#     return projects_lst


def make_info_projects_lst( get_dct ):
    """ Grabs projects.
        Called by build_info_context() """
    projects = Tracker.objects.all().order_by( 'project_name' )
    needs_update = check_recent_save()
    projects_lst = []
    for project in projects:
        if needs_update:
            project.save()
        dct = {
            'name': project.project_name,
            'contact': project.project_contact_email,
            'project_info_link': reverse( 'project_info_url', kwargs={'slug': project.slug} ),
            'project_image_link': build_image_link( get_dct, project.slug ),
            'slug': project.slug }
        projects_lst.append( dct )
    log.debug( 'projects_lst, ```%s```' % pprint.pformat(projects_lst) )
    return projects_lst



def check_recent_save():
    """ Returns boolean based on modification date.
        Called by make_info_projects_lst() """
    last_modified = Tracker.objects.latest( 'modified' ).modified
    log.debug( 'last_modified, `%s`; type(), `%s`' % (last_modified, type(last_modified)) )
    modified_plus_day = ( last_modified + datetime.timedelta(days=1) ).replace(tzinfo=None)
    log.debug( 'modified_plus_day, `%s`' % modified_plus_day )
    if modified_plus_day < datetime.datetime.now():
        needs_update = True
    else:
        needs_update = False
    log.debug( 'needs_update result, `%s`' % needs_update )
    return needs_update



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
        log.debug( 'field_name, `%s`; field_value, `%s' % (field_name, field_value) )
        log.debug( 'ending, `%s`' % field_name[-7:] )
        if field_name[-7:] == 'CHECKED':  # these are dates (can't use isinstance() on the field_value because it can be None )
            entrydct = { 'date': 'init', 'fresh': 'init' }
            entrydct['date'] = 'checked ' + str(field_value) if field_value else 'no_date'
            entrydct['fresh'] = False if ( field_value is None or field_value + datetime.timedelta(6*365/12) < datetime.date.today() ) else True
            context[field_name] = entrydct
    context['framework_supported'] = tracker.framework_supported
    context['https_enforced'] = tracker.https_enforced
    context['admin_links_shib_protected'] = tracker.admin_links_shib_protected
    context['logs_rotated'] = tracker.logs_rotated
    context['patron_data_expiration_process'] = tracker.patron_data_expiration_process
    context['django_session_data_expired'] = tracker.django_session_data_expired
    log.debug( 'authenticated context, ```%s```' % pprint.pformat(context) )
    return context

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
