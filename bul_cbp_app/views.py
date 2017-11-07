# -*- coding: utf-8 -*-

import datetime, json, logging, os, pprint
from .models import Tracker
from .lib import image_helper
from django.conf import settings as project_settings
from django.contrib.auth import logout
from django.core.urlresolvers import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.utils.cache import patch_response_headers

log = logging.getLogger(__name__)


def info( request ):
    """ Returns simplest response. """
    now = datetime.datetime.now()
    log.debug( 'now, ```%s```' % str(now) )
    return HttpResponse( '<p>hi</p> <p>( %s )</p>' % now )


def project_image( request, slug ):
    """ Loads data, calculates score, displays image. """
    tracker = get_object_or_404( Tracker, slug=slug )
    log.debug( 'tracker, ```%s```' % tracker )
    score = image_helper.calc_score( tracker )
    svg = image_helper.prep_svg( score )
    resp = HttpResponse( svg, content_type="image/svg+xml" )
    patch_response_headers( resp, cache_timeout=5 )
    return resp


def project_info( request, slug ):
    """ Shows public info. """
    return HttpResponse( 'coming' )


def demo_image( request ):
    svg = '''<svg xmlns="http://www.w3.org/2000/svg" width="154" height="20">
<linearGradient id="b" x2="0" y2="100%">
<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
<stop offset="1" stop-opacity=".1"/>
</linearGradient>
<mask id="a">
<rect width="154" height="20" rx="3" fill="#fff"/>
</mask>
<g mask="url(#a)">
<path fill="#551919" d="M0 0h103v20H0z"/>
<path fill="#A01A00" d="M103 0h51v20H103z"/>
<path fill="url(#b)" d="M0 0h154v20H0z"/>
</g>
<g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
<text x="51.5" y="15" fill="#010101" fill-opacity=".3">cii best practices</text>
<text x="51.5" y="14">BUL best practices</text>
<text x="127.5" y="15" fill="#010101" fill-opacity=".3">failing</text>
<text x="127.5" y="14">failing</text>
</g>
</svg>'''
    resp = HttpResponse( svg, content_type="image/svg+xml" )
    patch_response_headers( resp, cache_timeout=2 )
    return resp


def demo_info( request ):
    html = '<p>forced https: true or false or not-applicable</p> <p>logs auto-rotated: true or false or not-applicable</p>'
    return HttpResponse( html )

