# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import RedirectView
from bul_cbp_app import views


admin.autodiscover()


urlpatterns = [

    url( r'^admin/', admin.site.urls ),  # eg host/project_x/admin/

    url( r'^bul_search/$', views.bul_search, name='bul_search_url' ),

    url( r'^info/$', views.info, name='info_url' ),

    url( r'^login/$', views.login, name='login_url' ),
    url( r'^login_test/$', views.login_test, name='login_test_url' ),

    url( r'^project_image/(?P<slug>.*)/$', views.project_image, name='project_image_url' ),

    url( r'^project_info/(?P<slug>.*)/$', views.project_info, name='project_info_url' ),

    # url( r'^demo_image/$', views.demo_image, name='demo_image_url' ),

    # url( r'^demo_info/$', views.demo_info, name='demo_info_url' ),

    url( r'^$', RedirectView.as_view(pattern_name='info_url') ),

    ]
