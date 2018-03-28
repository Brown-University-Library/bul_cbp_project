# -*- coding: utf-8 -*-

import datetime, logging, pprint, urllib
from bul_cbp_app import settings_app
from django.core.urlresolvers import reverse


log = logging.getLogger(__name__)


## views.info() ##


def build_info_context( user, display_admin_url ):
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
        'projects': make_info_projects_lst()
        }
    log.debug( 'context, ```%s```' % context )
    return context


def make_info_projects_lst():
    rec1 = {
        'name': 'aa',
        'contact': 'aa_contact',
        'project_info_link': 'https://library.brown.edu/good_code/project_info/best-practices/',
        'project_image_link': 'https://library.brown.edu/good_code/project_image/best-practices/'
        }
    rec2 = {
        'name': 'bb',
        'contact': 'bb_contact',
        'project_info_link': 'https://library.brown.edu/good_code/project_info/easyaccess/',
        'project_image_link': 'https://library.brown.edu/good_code/project_image/easyaccess/'
        }
    projects_lst = [rec1, rec2]
    log.debug( 'projects_lst, ```%s```' % pprint.pformat(projects_lst) )
    return projects_lst


# def build_info_context( user, display_admin_url ):
#     """ Builds info context.
#         Called by views.info() """
#     username = None
#     if user.is_authenticated:
#         username = user.first_name
#     context = {
#         'username': username,
#         'login_url': '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(reverse('info_url')) ),
#         'admin_url': display_admin_url,
#         'logout_url': '%s?next=%s?cache_timeout=0' % ( reverse('logout_url'), urllib.parse.quote(reverse('info_url')) ),
#         }
#     log.debug( 'context, ```%s```' % context )
#     return context


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


# def build_info_json_context( start, scheme, host, uri_path ):
#     """ Builds context that'll be converted into json by the view.
#         Called by views.info() """
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
