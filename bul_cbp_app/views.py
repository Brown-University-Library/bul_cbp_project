# -*- coding: utf-8 -*-

import datetime, json, logging, os, pprint, urllib
from .lib import image_helper, version_helper, view_helper
from .lib.shib_auth import shib_login  # decorator
from .models import Tracker
from bul_cbp_app import settings_app
from django.conf import settings as project_settings
from django.contrib.auth import logout as django_logout
# from django.contrib.auth.views import logout
from django.core.urlresolvers import reverse
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.utils.cache import patch_response_headers


log = logging.getLogger(__name__)


def info( request ):
    """ Returns overview of all projects.
        Called by site-checker, or by loading root url. """
    log.debug( 'starting info()' )
    admin_url = '{schm}://{hst}{path}'.format( schm=request.scheme, hst=request.META['HTTP_HOST'], path=reverse('admin:bul_cbp_app_tracker_changelist') )
    display_admin_url = '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(admin_url) )
    context = view_helper.build_info_context( request.user, display_admin_url, request.GET )
    if request.GET.get('format', '') == 'json':
        resp = HttpResponse( json.dumps(context, sort_keys=True, indent=2), content_type='application/javascript; charset=utf-8' )
    else:
        resp = render( request, 'bul_cbp_app_templates/info.html', context )
    return resp


def project_info( request, slug ):
    """ Shows project info.
        Called by click on `BUL code-check` badge . """
    log.debug( 'starting project_info()' )
    tracker = get_object_or_404( Tracker, slug=slug )
    admin_url = reverse( 'admin:bul_cbp_app_tracker_changelist' )
    display_admin_url = '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(admin_url) )
    score_image_url = view_helper.build_project_score_image_url( request.GET, tracker )
    context = view_helper.build_project_context( request.user, tracker, score_image_url, display_admin_url, slug )
    if request.GET.get('format', '') == 'json':
        resp = HttpResponse( json.dumps(context, sort_keys=True, indent=2), content_type='application/javascript; charset=utf-8' )
    else:
        resp = render( request, 'bul_cbp_app_templates/project_info.html', context )
    return resp


def project_image( request, slug ):
    """ Loads data, calculates score, displays image.
        views.project_info() will pass in a cache_timeout=0 when logout is clicked.
        Called by load of github readme page (any page containing a badge-link), views.info(), and views.project_info(). """
    cache_timeout = int( request.GET.get('cache_timeout', '5') )
    tracker = get_object_or_404( Tracker, slug=slug )
    log.debug( 'real tracker.score, `%s`' % tracker.score )
    log.debug( 'request.user.is_authenticated, `%s`' % request.user.is_authenticated )
    score_display = str( tracker.score )
    if tracker.score < settings_app.PUBLIC_SCORE_CUTOFF:
        if not request.user.is_authenticated:
            score_display = '&lt; %s' % settings_app.PUBLIC_SCORE_CUTOFF
    svg = image_helper.prep_svg( tracker.score, score_display )
    resp = HttpResponse( svg, content_type="image/svg+xml" )
    patch_response_headers( resp, cache_timeout=cache_timeout )
    return resp


@shib_login
def login( request ):
    """ Handles authNZ, & redirects to admin.
        Called by click on login or admin link. """
    next_url = request.GET.get( 'next', None )
    if not next_url:
        redirect_url = reverse( 'admin:bul_cbp_app_tracker_changelist' )
    else:
        redirect_url = request.GET['next']  # will often be same page
    return HttpResponseRedirect( redirect_url )


def logout( request ):
    """ Logs _app_ out; shib logout not yet implemented.
        Called by click on Welcome/Logout link in tool-bar. """
    redirect_url = request.GET.get( 'next', None )
    if not redirect_url:
        redirect_url = reverse( 'info_url' )
    django_logout( request )
    log.debug( 'redirect_url, ```%s```' % redirect_url )
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


# ===========================
# for development convenience
# ===========================


def version( request ):
    """ Returns basic branch and commit data. """
    rq_now = datetime.datetime.now()
    commit = version_helper.get_commit()
    branch = version_helper.get_branch()
    info_txt = commit.replace( 'commit', branch )
    context = version_helper.make_context( request, rq_now, info_txt )
    output = json.dumps( context, sort_keys=True, indent=2 )
    return HttpResponse( output, content_type='application/json; charset=utf-8' )


def error_check( request ):
    """ For checking that admins receive error-emails. """
    if project_settings.DEBUG == True:
        1/0
    else:
        return HttpResponseNotFound( '<div>404 / Not Found</div>' )

