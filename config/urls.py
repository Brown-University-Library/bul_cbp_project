# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import RedirectView
from bul_cbp_app import views


admin.autodiscover()


urlpatterns = [

    ## primary app urls...
    url( r'^info/$', views.info, name='info_url' ),
    url( r'^project_image/(?P<slug>.*)/$', views.project_image, name='project_image_url' ),
    url( r'^project_info/(?P<slug>.*)/$', views.project_info, name='project_info_url' ),
    url( r'^admin/login/', RedirectView.as_view(pattern_name='login_url') ),
    url( r'^admin/', admin.site.urls ),  # eg host/project_x/admin/

    ## support urls...
    url( r'^version/$', views.version, name='version_url' ),
    url( r'^error_check/$', views.error_check, name='error_check_url' ),
    url( r'^bul_search/$', views.bul_search, name='bul_search_url' ),
    url( r'^login/$', views.login, name='login_url' ),
    url( r'^logout/$', views.logout, name='logout_url' ),
    url( r'^problem/$', views.problem, name='problem_url' ),

    url( r'^$', RedirectView.as_view(pattern_name='info_url') ),

    ]
