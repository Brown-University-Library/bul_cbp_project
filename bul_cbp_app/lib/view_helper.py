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
    username = None
    if user.is_authenticated:
        username = user.first_name
    context = {
        'username': username,
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
    log.debug( 'context, ```%s```' % context )
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
