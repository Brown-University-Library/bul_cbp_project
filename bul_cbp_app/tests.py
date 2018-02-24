# -*- coding: utf-8 -*-

import logging
from .models import Tracker
from bul_cbp_app.lib import image_helper
from django.test import TestCase


log = logging.getLogger(__name__)
TestCase.maxDiff = None


class Scorer( TestCase ):
    """ Checks score calculation. """

    def test_mostly_empty(self):
        """ Checks single `yes`. """
        trckr = Tracker( code_versioned='yes' )
        self.assertEqual( 3, image_helper.calc_score(trckr) )


class RootUrlTest( TestCase ):
    """ Checks root urls. """

    def test_root_url_no_slash(self):
        """ Checks '/root_url'. """
        response = self.client.get( '' )  # project root part of url is assumed
        self.assertEqual( 302, response.status_code )  # permanent redirect
        redirect_url = response._headers['location'][1]
        self.assertEqual(  '/info/', redirect_url )

    def test_root_url_slash(self):
        """ Checks '/root_url/'. """
        response = self.client.get( '/' )  # project root part of url is assumed
        self.assertEqual( 302, response.status_code )  # permanent redirect
        redirect_url = response._headers['location'][1]
        self.assertEqual(  '/info/', redirect_url )
