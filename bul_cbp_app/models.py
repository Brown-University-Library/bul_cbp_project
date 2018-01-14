# -*- coding: utf-8 -*-

import datetime, json, logging, os, pprint
from django.conf import settings as project_settings
from django.core.urlresolvers import reverse
from django.db import models
from django.http import HttpResponseRedirect

log = logging.getLogger(__name__)


class Tracker(models.Model):

    STANDARD_CHOICES = (
        ('yes', 'yes'),  # ( db-value, appearance-value )
        ('no', 'no'),
        ('n/a', 'not-applicable'),
    )

    created = models.DateTimeField( auto_now_add=True )
    modified = models.DateTimeField( auto_now=True )

    ##################################################
    ## will be publicly viewable
    ##################################################

    project_name = models.CharField( max_length=50 )
    slug = models.SlugField( help_text='for identifying segment in url; auto-entered, but feel free to edit' )
    project_contact_email = models.EmailField()

    code_versioned = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
    )

    has_public_code_url = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
    )
    public_code_url = models.URLField( max_length=200 )

    responsive = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
        help_text='looks/works right on desktop & mobile-devices'
    )

    contains_lightweight_data_reporting = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
    )

    accessability_check_run = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
    )

    data_discoverable = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
        help_text='information accessible by discovery-application'
    )

    has_sitechecker_entry = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
    )

    ##################################################
    ## everything below (to bottom of file) _not_ publicly viewable
    ##################################################

    ## dates for publicly viewable options
    project_contact_email_CHECKED = models.DateField()
    code_versioned_CHECKED = models.DateField()
    has_public_code_url_CHECKED = models.DateField()
    responsiveness_CHECKED = models.DateField()
    public_code_url_CHECKED = models.DateField()
    contains_lightweight_data_reporting_CHECKED = models.DateField()
    accessability_check_run_CHECKED = models.DateField()
    data_discoverable_CHECKED = models.DateField()
    has_sitechecker_entry_CHECKED = models.DateField()

    ##################################################
    ## security
    ##################################################

    framework_supported = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
        help_text='eg: uses long-term-release version or later'
    )
    framework_supported_CHECKED = models.DateField()

    https_enforced = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
    )
    https_enforced_CHECKED = models.DateField()

    admin_links_shib_protected = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
    )
    admin_links_shib_protected_CHECKED = models.DateField()

    logs_rotated = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
    )
    logs_rotated_CHECKED = models.DateField()

    patron_data_expiration_process = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
        help_text='if patron data is captured, there is an implemented process for identifying info to be deleted'
    )
    patron_data_expiration_process_CHECKED = models.DateField()

    django_session_data_expired = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='n/a',
        help_text="if django session-data is stored in db, it's auto-deleted via cron"
    )
    django_session_data_expired_CHECKED = models.DateField()

    ### other ###

    notes = models.TextField( null=True, blank=True )

    def __unicode__(self):
        return self.project_name
