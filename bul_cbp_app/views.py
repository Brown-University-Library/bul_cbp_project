# -*- coding: utf-8 -*-

import datetime, json, logging, os, pprint, urllib
from .lib import image_helper, info_view_helper
from .lib.shib_auth import shib_login  # decorator
from .models import Tracker
from bul_cbp_app import settings_app
from django.conf import settings as project_settings
from django.contrib.auth import logout
from django.core.urlresolvers import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.utils.cache import patch_response_headers


log = logging.getLogger(__name__)


def project_info( request, slug ):
    """ Shows public info.
        Called by click on `BUL code-check` badge of github readme page. """
    tracker = get_object_or_404( Tracker, slug=slug )
    admin_url = '{schm}://{hst}{path}'.format( schm=request.scheme, hst=request.META['HTTP_HOST'], path=reverse('admin:bul_cbp_app_tracker_changelist') )
    login_url = '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(admin_url) )
    score_image_url = reverse( 'project_image_url', kwargs={'slug': 'best-practices'} )  # https://library.brown.edu/bul_cbp/project_image/best-practices/
    log.debug( 'score_image_url, ```%s```' % score_image_url )
    context = {
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
        'admn': login_url }
    return render( request, 'bul_cbp_app_templates/project_info.html', context )


def info( request ):
    """ Returns simple response.
        Called by site-checker, or by loading root url. """
    log.debug( 'starting info()' )
    start = datetime.datetime.now()
    if request.GET.get('format', '') == 'json':
        context = info_view_helper.build_json_context( start, request.scheme, request.META['HTTP_HOST'], request.META.get('REQUEST_URI', request.META['PATH_INFO'])  )
        context_json = json.dumps(context, sort_keys=True, indent=2)
        resp = HttpResponse( context_json, content_type='application/javascript; charset=utf-8' )
    else:
        admin_url = '{schm}://{hst}{path}'.format( schm=request.scheme, hst=request.META['HTTP_HOST'], path=reverse('admin:bul_cbp_app_tracker_changelist') )
        login_url = '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(admin_url) )
        context = { 'login_url': login_url }
        resp = render( request, 'bul_cbp_app_templates/info.html', context )
    return resp


def project_image( request, slug ):
    """ Loads data, calculates score, displays image.
        Called by load of github readme page. """
    tracker = get_object_or_404( Tracker, slug=slug )
    score = image_helper.calc_score( tracker )
    svg = image_helper.prep_svg( score )
    resp = HttpResponse( svg, content_type="image/svg+xml" )
    patch_response_headers( resp, cache_timeout=5 )
    return resp


@shib_login
def login( request ):
    """ Handles authNZ, & redirects to admin. """
    admin_url = request.GET.get( 'next', None )
    if not admin_url:
        redirect_url = '%s?problem_message=%s' % ( reverse('problem_url'), 'could not redirect to the admin' )
    else:
        redirect_url = request.GET['next']
    return HttpResponseRedirect( redirect_url )


def problem( request ):
    """ Returns template with problem-message.
        Called on failed login attempt for now. """
    log.debug( 'starting problem()' )
    context = { 'problem_message': request.GET.get( 'problem_message', 'A problem occurred.' ) }
    resp = render( request, 'bul_cbp_app_templates/problem.html', context )
    return resp


def bul_search( request ):
    """ Triggered by user entering search term into banner-search-field.
        Redirects query to search.library.brown.edu """
    log.debug( 'request.__dict__, ```%s```' % pprint.pformat(request.__dict__) )
    redirect_url = 'https://search.library.brown.edu?%s' % request.META['QUERY_STRING']
    return HttpResponseRedirect( redirect_url )


## end of views ##


# def demo_image( request ):
#     svg = '''<svg xmlns="http://www.w3.org/2000/svg" width="154" height="20">
# <linearGradient id="b" x2="0" y2="100%">
# <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
# <stop offset="1" stop-opacity=".1"/>
# </linearGradient>
# <mask id="a">
# <rect width="154" height="20" rx="3" fill="#fff"/>
# </mask>
# <g mask="url(#a)">
# <path fill="#551919" d="M0 0h103v20H0z"/>
# <path fill="#A01A00" d="M103 0h51v20H103z"/>
# <path fill="url(#b)" d="M0 0h154v20H0z"/>
# </g>
# <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
# <text x="51.5" y="15" fill="#010101" fill-opacity=".3">cii best practices</text>
# <text x="51.5" y="14">BUL best practices</text>
# <text x="127.5" y="15" fill="#010101" fill-opacity=".3">failing</text>
# <text x="127.5" y="14">failing</text>
# </g>
# </svg>'''
#     resp = HttpResponse( svg, content_type="image/svg+xml" )
#     patch_response_headers( resp, cache_timeout=2 )
#     return resp


# def demo_info( request ):
#     html = '<p>forced https: true or false or not-applicable</p> <p>logs auto-rotated: true or false or not-applicable</p>'
#     return HttpResponse( html )


# @shib_login
# def login_test( request ):
#     """ Checks login() handling. """
#     if not request.user.is_authenticated:
#         redirect_url = '%s?next=%s' % ( reverse('login_url'), request.path )
#         log.debug( 'redirect_url, ```%s```' % redirect_url )
#         return HttpResponseRedirect( redirect_url )
#     return HttpResponse( 'login_test handling coming')
