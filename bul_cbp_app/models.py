# -*- coding: utf-8 -*-

import datetime, json, logging, os, pprint

from .lib.scorer import Scorer
from django.conf import settings as project_settings
from django.core import serializers
from django.core.urlresolvers import reverse
from django.db import models
from django.http import HttpResponseRedirect
from django.utils import timezone


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

    accessibility_check_run = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
        verbose_name='is accessible',
        help_text='start suggestion: no "wave" errors on first and second-level pages'
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
        help_text="check-date for the drop-down menu for whether there _is_ a public url to code",
        blank=True,
        null=True
    )
    public_code_url_CHECKED = models.DateField(
        help_text="check-date for the _accuracy_ of the public url entered",
        blank=True,
        null=True
    )
    responsiveness_CHECKED = models.DateField( blank=True, null=True )
    contains_lightweight_data_reporting_CHECKED = models.DateField( blank=True, null=True )
    accessibility_check_run_CHECKED = models.DateField( blank=True, null=True )
    data_discoverable_CHECKED = models.DateField( blank=True, null=True )
    has_sitechecker_entry_CHECKED = models.DateField( blank=True, null=True )

    ##################################################
    ## security
    ##################################################

    framework_supported = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
        help_text='uses a supported long-term-release'
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

    emails_admin_on_error = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
        help_text=""
    )
    emails_admin_on_error_CHECKED = models.DateField( blank=True, null=True )

    vulnerabilities_fixed = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default='no',
        help_text="github `potential security vulnerabilities` fixed"
    )
    vulnerabilities_fixed_CHECKED = models.DateField( blank=True, null=True )

    ### other ###

    notes = models.TextField( null=True, blank=True )

    score = models.IntegerField( null=True, blank=True, help_text="auto-calculated, not editable" )

    def save(self, *args, **kwargs):
        self.score = scrr.calc_score( self )
        super(Tracker, self).save()

    def __unicode__(self):
        return self.project_name

    def jsonize( self ):
        jsn = serializers.serialize( 'json', self )  # data = serializers.serialize("json", YourModel.objects.all())
        jsn_dct = json.loads( jsn )
        return jsn_dct


    ## end class Tracker()
