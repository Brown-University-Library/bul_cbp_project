# -*- coding: utf-8 -*-

import datetime, json, logging, os, pprint
from .lib.scorer import Scorer
from django.utils import timezone
from django.conf import settings as project_settings
from django.core.urlresolvers import reverse
from django.db import models
from django.http import HttpResponseRedirect

log = logging.getLogger(__name__)
scrr = Scorer()


class Tracker(models.Model):

    STANDARD_CHOICES = (
        ('yes', 'yes'),  # ( db-value, appearance-value )
        ('no', 'no'),
        ('n/a', 'not-applicable'),
    )

    created = models.DateTimeField( auto_now_add=True )
    modified = models.DateTimeField( auto_now=True )

    # ================================================
    # will be publicly viewable
    # ================================================

    project_name = models.CharField( max_length=50 )
    slug = models.SlugField( help_text='for identifying segment in url; auto-entered, but feel free to edit' )
    project_contact_email = models.EmailField()

    code_versioned = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
    )

    has_public_code_url = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
    )
    public_code_url = models.URLField(
        max_length=200,
        blank=True
    )

    responsive = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
        help_text='looks/works right on desktop & mobile-devices'
    )

    contains_lightweight_data_reporting = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
    )

    accessability_check_run = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
    )

    data_discoverable = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
        help_text='information accessible by discovery-application'
    )

    has_sitechecker_entry = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
    )

    # ================================================
    # everything below (to bottom of file) _not_ publicly viewable
    # ================================================

    ## dates for publicly viewable options

    project_contact_email_CHECKED = models.DateField( blank=True, null=True )

    code_versioned_CHECKED = models.DateField( blank=True, null=True )
    has_public_code_url_CHECKED = models.DateField(
        help_text="check-date for whether there is a public url to code",
        blank=True,
        null=True
    )
    public_code_url_CHECKED = models.DateField(
        help_text="check-date for the url entered in this web-app",
        blank=True,
        null=True
    )
    responsiveness_CHECKED = models.DateField( blank=True, null=True )
    contains_lightweight_data_reporting_CHECKED = models.DateField( blank=True, null=True )
    accessability_check_run_CHECKED = models.DateField( blank=True, null=True )
    data_discoverable_CHECKED = models.DateField( blank=True, null=True )
    has_sitechecker_entry_CHECKED = models.DateField( blank=True, null=True )

    ##################################################
    ## security
    ##################################################

    framework_supported = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
        help_text='eg: uses long-term-release version or later'
    )
    framework_supported_CHECKED = models.DateField( blank=True, null=True )

    https_enforced = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
    )
    https_enforced_CHECKED = models.DateField( blank=True, null=True )

    admin_links_shib_protected = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
    )
    admin_links_shib_protected_CHECKED = models.DateField( blank=True, null=True )

    logs_rotated = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
    )
    logs_rotated_CHECKED = models.DateField( blank=True, null=True )

    patron_data_expiration_process = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
        help_text='if patron data is captured, there is an implemented process for identifying info to be deleted'
    )
    patron_data_expiration_process_CHECKED = models.DateField( blank=True, null=True )

    django_session_data_expired = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
        help_text="if django session-data is stored in db, it's auto-deleted via cron"
    )
    django_session_data_expired_CHECKED = models.DateField( blank=True, null=True )

    ### other ###

    notes = models.TextField( null=True, blank=True )

    score = models.IntegerField( null=True, blank=True, help_text="auto-calculated, not editable" )

    def save(self, *args, **kwargs):
        # self.score = 42
        self.score = scrr.calc_score( self )
        super(Tracker, self).save()

    def __unicode__(self):
        return self.project_name

    ## end class Tracker()
