# -*- coding: utf-8 -*-

import datetime, json, logging, os, pprint
from .lib import image_helper
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
    # admin_url = reverse('admin:bul_cbp_app_tracker_changelist' )
    admin_url = '{schm}://{hst}{path}'.format( schm=request.scheme, hst=request.META['HTTP_HOST'], path=reverse('admin:bul_cbp_app_tracker_changelist') )
    login_url = '%s?next=%s' % ( reverse('login_url'), admin_url )
    context = {
        'project_name': tracker.project_name,
        'has_url': tracker.has_public_code_url,
        'reports': tracker.contains_lightweight_data_reporting,
        'accessability': tracker.accessability_check_run,
        'contact': tracker.project_contact_email,
        'admn': login_url
    }
    return render( request, 'bul_cbp_app_templates/project_info.html', context )


def info( request ):
    """ Returns simple response.
        Called by site-checker, or by loading root url. """
    start = datetime.datetime.now()
    log.debug( 'now-time, ```%s```' % start )
    rtrn_dct = {
        'query': {
            'date_time': str( start ),
            'url': '{schm}://{hst}{uri}'.format( schm=request.scheme, hst=request.META['HTTP_HOST'], uri=request.META.get('REQUEST_URI', request.META['PATH_INFO']) )  # REQUEST_URI not available via run-server
        },
        'response': {
            'documentation': settings_app.README_URL,
            'elapsed_time': str( datetime.datetime.now() - start ),
            'message': 'ok'
        }
    }
    context = {
        }
    return render( request, 'bul_cbp_app_templates/info.html', context )
    # jsn = json.dumps( rtrn_dct, sort_keys=True, indent=2 )
    # return HttpResponse( jsn, content_type='application/javascript; charset=utf-8' )


def project_image( request, slug ):
    """ Loads data, calculates score, displays image.
        Called by load of github readme page. """
    tracker = get_object_or_404( Tracker, slug=slug )
    score = image_helper.calc_score( tracker )
    svg = image_helper.prep_svg( score )
    resp = HttpResponse( svg, content_type="image/svg+xml" )
    patch_response_headers( resp, cache_timeout=5 )
    return resp


def login( request ):
    """ Handles authNZ, & redirects. """
    shibber.authenticate( remote_user=None, shib_meta={}, host=request.get_host() )
    return HttpResponse( 'login handling coming')


@shib_login
def login_test( request ):
    """ Checks login() handling. """
    if not request.user.is_authenticated:
        redirect_url = '%s?next=%s' % ( reverse('login_url'), request.path )
        # redirect_url = reverse('login_url')
        log.debug( 'redirect_url, ```%s```' % redirect_url )
        return HttpResponseRedirect( redirect_url )
    return HttpResponse( 'login_test handling coming')


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


def bul_search( request ):
    """ Triggered by user entering search term into banner-search-field.
        Redirects query to search.library.brown.edu """
    log.debug( 'request.__dict__, ```%s```' % pprint.pformat(request.__dict__) )
    redirect_url = 'https://search.library.brown.edu?%s' % request.META['QUERY_STRING']
    return HttpResponseRedirect( redirect_url )
