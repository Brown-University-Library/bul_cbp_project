# -*- coding: utf-8 -*-

import datetime, json, logging, os, pprint, urllib
# from .lib import image_helper, info_view_helper
from .lib import image_helper, view_helper
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
    admin_url = reverse( 'admin:bul_cbp_app_tracker_changelist' )
    display_admin_url = '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(admin_url) )
    score_image_url = reverse( 'project_image_url', kwargs={'slug': tracker.slug} )  # https://library.brown.edu/bul_cbp/project_image/best-practices/
    log.debug( 'score_image_url, ```%s```' % score_image_url )
    context = view_helper.build_project_context( tracker, score_image_url, display_admin_url, slug )
    if request.GET.get('format', '') == 'json':
        resp = HttpResponse( json.dumps(context, sort_keys=True, indent=2), content_type='application/javascript; charset=utf-8' )
    else:
        resp = render( request, 'bul_cbp_app_templates/project_info.html', context )
    return resp


def info( request ):
    """ Returns simple response.
        Called by site-checker, or by loading root url. """
    log.debug( 'starting info()' )
    start = datetime.datetime.now()
    if request.GET.get('format', '') == 'json':
        # context = info_view_helper.build_json_context( start, request.scheme, request.META['HTTP_HOST'], request.META.get('REQUEST_URI', request.META['PATH_INFO'])  )
        context = view_helper.build_info_json_context( start, request.scheme, request.META['HTTP_HOST'], request.META.get('REQUEST_URI', request.META['PATH_INFO'])  )
        context_json = json.dumps(context, sort_keys=True, indent=2)
        resp = HttpResponse( context_json, content_type='application/javascript; charset=utf-8' )
    else:
        admin_url = '{schm}://{hst}{path}'.format( schm=request.scheme, hst=request.META['HTTP_HOST'], path=reverse('admin:bul_cbp_app_tracker_changelist') )
        display_login_url = '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(reverse('info_url')) )
        display_admin_url = '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(admin_url) )
        context = { 'login_url': display_login_url, 'admin_url': display_admin_url   }
        resp = render( request, 'bul_cbp_app_templates/info.html', context )
    return resp


def project_image( request, slug ):
    """ Loads data, calculates score, displays image.
        Called by load of github readme page. """
    tracker = get_object_or_404( Tracker, slug=slug )
    log.debug( 'real tracker.score, `%s`' % tracker.score )
    log.debug( 'request.user.is_authenticated, `%s`' % request.user.is_authenticated )
    score_display = str( tracker.score )
    if tracker.score < 75:
        if not request.user.is_authenticated:
            score_display = '&lt; 75'
    svg = image_helper.prep_svg( tracker.score, score_display )
    resp = HttpResponse( svg, content_type="image/svg+xml" )
    patch_response_headers( resp, cache_timeout=5 )
    return resp


@shib_login
def login( request ):
    """ Handles authNZ, & redirects to admin. """
    next_url = request.GET.get( 'next', None )
    if not next_url:
        redirect_url = reverse( 'admin:bul_cbp_app_tracker_changelist' )
    else:
        redirect_url = request.GET['next']  # will often be same page
    return HttpResponseRedirect( redirect_url )


def problem( request ):
    """ Returns template with problem-message.
        Not currently called. """
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
