# -*- coding: utf-8 -*-

import datetime, json, logging, os, pprint
from django.conf import settings as project_settings
from django.core.urlresolvers import reverse
from django.db import models
from django.http import HttpResponseRedirect

log = logging.getLogger(__name__)


class Tracker(models.Model):
    created = models.DateTimeField( auto_now_add=True )
    modified = models.DateTimeField( auto_now=True )
    project_name = models.CharField( max_length=50 )

    notes = models.TextField( null=True, blank=True )

    def __unicode__(self):
        return self.project_name
