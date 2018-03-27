# -*- coding: utf-8 -*-

import datetime, logging, pprint, urllib
from bul_cbp_app import settings_app
from django.core.urlresolvers import reverse


log = logging.getLogger(__name__)


def build_info_json_context( start, scheme, host, uri_path ):
    """ Builds context that'll be converted into json by the view.
        Called by views.info() """
    context = {
        'query': {
            'date_time': str( start ),
            'url': '{schm}://{hst}{uri}'.format( schm=scheme, hst=host, uri=uri_path ) },
        'response': {
            'documentation': settings_app.README_URL,
            'elapsed_time': str( datetime.datetime.now() - start ),
            'message': 'ok' }
    }
    log.debug( 'context, ```%s```' % pprint.pformat(context) )
    return context


def build_project_context( tracker, score_image_url, display_admin_url, slug ):
    """ Builds project-info context.
        Called by views.project_info() """
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
        'admin_url': display_admin_url,
        'login_url': '%s?next=%s' % ( reverse('login_url'), urllib.parse.quote(reverse('project_info_url', kwargs={'slug': slug})) )
        }
    log.debug( 'context, ```%s```' % context )
    return context
