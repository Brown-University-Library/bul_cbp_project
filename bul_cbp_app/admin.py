# -*- coding: utf-8 -*-

from .models import Tracker
from django.contrib import admin


class TrackerAdmin(admin.ModelAdmin):
    # list_display = [ 'created', 'number', 'format', 'acquisition_method', 'volumes', 'titles', 'location', 'serial_added_volume' ]
    # search_fields = ('created', 'format', 'location', 'acquisition_method')
    list_display = [ 'project_name', 'slug', 'project_contact_email', 'modified' ]
    list_filter = [
        'project_contact_email',
        'has_public_code_url',
        'contains_lightweight_data_reporting',
        'accessability_check_run',
        'framework_supported',
        'https_enforced',
        'admin_links_shib_protected',
    ]
    ordering = [ 'project_name' ]

    readonly_fields = ( 'created', 'modified' )

    prepopulated_fields = { "slug": ("project_name",) }

    fieldsets = (
        ('Publicly Displayed', {
            'classes': ('wide',),
            'fields': (
                'project_name',
                'slug',
                'has_public_code_url',
                'public_code_url',
                'contains_lightweight_data_reporting',
                'accessability_check_run',
                'modified'
            )
        }),
        ('Non-Public Dates for above', {
            'classes': ('wide',),
            'fields': (
                'project_contact_email_CHECKED',
                'has_public_code_url_CHECKED',
                'public_code_url_CHECKED',
                'contains_lightweight_data_reporting_CHECKED',
                'accessability_check_run_CHECKED'
            ),
        }),
        ('Non-Public Security', {
            'classes': ('wide',),
            'fields': (
                'framework_supported',
                'framework_supported_CHECKED',
                'https_enforced',
                'https_enforced_CHECKED',
                'admin_links_shib_protected',
                'admin_links_shib_protected_CHECKED',
            ),
        }),
        ('Non-Public Other', {
            'fields': (
                'notes',
                'created',
            ),
        }),
    )



admin.site.register( Tracker, TrackerAdmin )
