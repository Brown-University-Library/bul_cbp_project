import logging, urllib

import requests
from bul_cbp_app import settings_app
from django.core.cache import cache
from django.core.urlresolvers import reverse


log = logging.getLogger(__name__)


def prep_authenticated_header( user_first_name, display_admin_url ) -> str:
    header_html = grab_pattern_header_html( authenticated=True )
    header_html = header_html.replace( 'DYNAMIC__SITE', reverse( 'info_url' ) )
    header_html = header_html.replace( 'DYNAMIC__NAME', user_first_name )
    header_html = header_html.replace( 'DYNAMIC__LOGOUT', '%s?next=%s?cache_timeout=0' % ( reverse('logout_url'), urllib.parse.quote(reverse('info_url')) ), )
    header_html = header_html.replace( 'DYNAMIC__INFO', reverse( 'info_url' ) )
    header_html = header_html.replace( 'DYNAMIC__ADMIN', '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(display_admin_url) ) )
    log.debug( 'returning authenticated pattern header' )
    return header_html


def prep_unauthenticated_header( display_admin_url ) -> str:
    header_html = grab_pattern_header_html( authenticated=False )
    header_html = header_html.replace( 'DYNAMIC__SITE', reverse( 'info_url' ) )
    header_html = header_html.replace( 'DYNAMIC__INFO', reverse( 'info_url' ) )
    header_html = header_html.replace( 'DYNAMIC__ADMIN', '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(display_admin_url) ) )
    log.debug( 'returning un-authenticated pattern header' )
    return header_html


def grab_pattern_header_html( authenticated: bool ) -> str:
    """ Prepares html for header. """
    if authenticated == True:
        cache_key = 'authenticated'
        header_html = cache.get( cache_key, None )
        if header_html:
            log.debug( 'authenticated header in cache' )
        else:
            log.debug( 'authenticated header not in cache' )
            r = requests.get( settings_app.PATTERN_HEADER_AUTH_YES_URL )
            header_html = r.content.decode( 'utf8' )
            cache.set( cache_key, header_html, settings_app.PATTERN_LIB_CACHE_TIMEOUT )
    else:
        cache_key = 'un_authenticated'
        header_html = cache.get( cache_key, None )
        if header_html:
            log.debug( 'un_authenticated header in cache' )
        else:
            log.debug( 'un_authenticated header not in cache' )
            r = requests.get( settings_app.PATTERN_HEADER_AUTH_NO_URL )
            header_html = r.content.decode( 'utf8' )
            cache.set( cache_key, header_html, settings_app.PATTERN_LIB_CACHE_TIMEOUT )
    return header_html

