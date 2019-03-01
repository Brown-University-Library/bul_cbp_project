# -*- coding: utf-8 -*-

from .models import Tracker
from django.contrib import admin


class TrackerAdmin(admin.ModelAdmin):

    list_display = [ 'project_name', 'slug', 'project_contact_email', 'score', 'modified' ]
    list_filter = [
        'project_contact_email',
        'code_versioned',
        'has_public_code_url',
        'responsive',
        'contains_lightweight_data_reporting',
        'accessibility_check_run',
        'data_discoverable',
        'has_sitechecker_entry',
        'framework_supported',
        'https_enforced',
        'admin_links_shib_protected',
        'logs_rotated',
        'patron_data_expiration_process',
        'django_session_data_expired'
    ]
    ordering = [ 'project_name' ]

    readonly_fields = ( 'created', 'modified', 'score' )

    prepopulated_fields = { "slug": ("project_name",) }

    fieldsets = (
        ('Publicly Displayed', {
            'classes': ('wide',),
            'fields': (
                'project_name',
                'slug',
                'project_contact_email',
                'code_versioned',
                'has_public_code_url',
                'public_code_url',
                'responsive',
                'contains_lightweight_data_reporting',
                'accessibility_check_run',
                'data_discoverable',
                'has_sitechecker_entry',
                'modified',
            )
        }),
        ('Non-Public Dates for above', {
            'classes': ('wide',),
            'fields': (
                'code_versioned_CHECKED',
                'has_public_code_url_CHECKED',
                'public_code_url_CHECKED',
                'responsiveness_CHECKED',
                'contains_lightweight_data_reporting_CHECKED',
                'accessibility_check_run_CHECKED',
                'data_discoverable_CHECKED',
                'has_sitechecker_entry_CHECKED',
                'project_contact_email_CHECKED',
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
                'logs_rotated',
                'logs_rotated_CHECKED',
                'patron_data_expiration_process',
                'patron_data_expiration_process_CHECKED',
                'django_session_data_expired',
                'django_session_data_expired_CHECKED',

            ),
        }),
        ('Non-Public Other', {
            'fields': (
                'notes',
                'created',
                'score'
            ),
        }),
    )

    save_on_top = True

    ## class TrackerAdmin()


admin.site.register( Tracker, TrackerAdmin )
