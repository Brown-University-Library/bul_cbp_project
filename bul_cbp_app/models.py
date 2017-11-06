# -*- coding: utf-8 -*-

import datetime, json, logging, os, pprint
from django.conf import settings as project_settings
from django.core.urlresolvers import reverse
from django.db import models
from django.http import HttpResponseRedirect

log = logging.getLogger(__name__)


class Tracker(models.Model):

    STANDARD_CHOICES = (
        (YES, 'yes'),
        (NO, 'no'),
        (NA, 'not-applicable'),
    )

    created = models.DateTimeField( auto_now_add=True )
    modified = models.DateTimeField( auto_now=True )


    ## will be publicly viewable

    project_name = models.CharField( max_length=50 )

    has public_code_url = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default=NA,
    )
    public_code_url = models.URLField( max_length=200 )


    ## all below not publicly viewable

    ## dates for publicly viewable options
    has public_code_url__checked = models.DateField()
    public_code_url__checked = models.DateField()

    ## security

    supported_code_version = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default=NA,
        help_text="eg: uses long-term-release version or later"
    )
    supported_code_version__checked = models.DateField()

    https_enforced = models.CharField(
        max_length=20,
        choices=STANDARD_CHOICES,
        default=NA,
        help_text="eg: uses long-term-release version or later"
    )
    https_enforced__checked = models.DateField()

    notes = models.TextField( null=True, blank=True )

    def __unicode__(self):
        return self.project_name
