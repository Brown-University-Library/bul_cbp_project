# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import RedirectView
from bul_cbp_app import views


admin.autodiscover()


urlpatterns = [

    url( r'^admin/', admin.site.urls ),  # eg host/project_x/admin/

    url( r'^info/$', views.info, name='info_url' ),

    url( r'^demo_image/$', views.demo_image, name='demo_image_url' ),

    url( r'^demo_info/$', views.demo_info, name='demo_info_url' ),

    url( r'^$', RedirectView.as_view(pattern_name='info_url') ),

    ]
