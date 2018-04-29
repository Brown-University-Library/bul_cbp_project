# -*- coding: utf-8 -*-

import logging, pprint
from .lib.scorer import Scorer
from bul_cbp_app.models import Tracker
from django.test import TestCase


log = logging.getLogger(__name__)
TestCase.maxDiff = None


class ScorerTest( TestCase ):
    """ Checks score calculation. """

    def test_mostly_empty(self):
        """ Checks single `yes`. """
        scrr = Scorer()
        log.debug( 'dir(scrr), ```%s```' % pprint.pformat(dir(scrr)) )
        trckr = Tracker( code_versioned='yes' )
        # trckr.save()
        scr = scrr.calc_score(trckr)
        log.debug( 'scr, `%s`' % scr )
        self.assertEqual( 3, scrr.calc_score(trckr) )


class RootUrlTest( TestCase ):
    """ Checks root urls. """

    def test_root_url_no_slash(self):
        """ Checks '/root_url redirect (no appended slash)'. """
        response = self.client.get( '' )  # project root part of url is assumed
        self.assertEqual( 302, response.status_code )  # permanent redirect
        redirect_url = response._headers['location'][1]
        self.assertEqual(  '/info/', redirect_url )

    def test_root_url_slash(self):
        """ Checks '/root_url/ redirect (with appended slash)'. """
        response = self.client.get( '/' )  # project root part of url is assumed
        self.assertEqual( 302, response.status_code )  # permanent redirect
        redirect_url = response._headers['location'][1]
        self.assertEqual(  '/info/', redirect_url )
