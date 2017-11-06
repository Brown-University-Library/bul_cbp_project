# -*- coding: utf-8 -*-

from .models import Tracker
from django.contrib import admin


class TrackerAdmin(admin.ModelAdmin):
    # list_display = [ 'created', 'number', 'format', 'acquisition_method', 'volumes', 'titles', 'location', 'serial_added_volume' ]
    # search_fields = ('created', 'format', 'location', 'acquisition_method')
    # list_filter = [ 'created', 'format', 'acquisition_method', 'location', 'serial_added_volume' ]
    list_display = [ 'project_name', 'modified' ]
    ordering = [ 'project_name' ]


admin.site.register( Tracker, TrackerAdmin )
