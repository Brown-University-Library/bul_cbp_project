# -*- coding: utf-8 -*-

import logging
from django.core.urlresolvers import reverse


log = logging.getLogger(__name__)



def prep_info( tracker ):
    """ Preps html.
        Called by views.project_info()
        TODO: replace with template. """
    admin_url = reverse('admin:bul_cbp_app_tracker_changelist' )
    html = '''
<h2><b>project: {name}</b></h2>
<p>has_public_code_url: {has_url}</p>
<p>contains_lightweight_data_reporting: {reports}</p>
<p>accessability_check_run: {accessability}</p>
<p>contact: {contact}</p>
<hr/>
<p>admins, <a href="{admn}">see additional info and update project</a></p>

'''.format(
        name=tracker.project_name,
        has_url=tracker.has_public_code_url,
        reports=tracker.contains_lightweight_data_reporting,
        accessability=tracker.accessability_check_run,
        contact=tracker.project_contact_email,
        admn=reverse('admin:bul_cbp_app_tracker_changelist' )
    )
    return html
