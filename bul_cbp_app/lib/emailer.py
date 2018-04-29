# -*- coding: utf-8 -*-

""" Prepares and sends email.
    Called by cron job. """

import argparse, datetime, logging, os, pprint, sys
import django

## configure django paths
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
cwd = os.getcwd()  # so this assumes the cron call has cd-ed into the project directory
if cwd not in sys.path:
    sys.path.append( cwd )
django.setup()

## ok, now django-related imports will work
from bul_cbp_app.models import Tracker


logging.basicConfig(
    # filename=os.environ['BUL_CBP__LOG_PATH'],
    level=logging.DEBUG,
    format='[%(asctime)s] %(levelname)s [%(module)s-%(funcName)s()::%(lineno)d] %(message)s',
    datefmt='%d/%b/%Y %H:%M:%S',
    )
log = logging.getLogger(__name__)
log.debug( 'starting' )


class Controller(object):
    """ Manages steps. """

    def __init__( self ):
        pass

    def parse_args( self ):
        """ Parses any args and calls appropriate functions
            Called by ```if __name__ == '__main__':``` """
        parser = self.get_parser()
        args = parser.parse_args()  # halts here if argument is bad, & displays error and usage
        log.debug( 'checking args, ```%s```' % args )  # empty for now
        if args.weekly:
            self.process_projects( 'weekly' )
        elif args.monthly:
            self.process_projects( 'monthly' )
        else:
            self.process_projects( None )
        return

    def get_parser( self ):
        """ Sets up parser.
            Called by parse_args() """
        parser = argparse.ArgumentParser()
        parser.add_argument( '--weekly', action='store_true' )
        parser.add_argument( '--monthly', action='store_true' )
        return parser

    def process_projects( self, timeframe ):
        """ Calls other functions.
            Called by parse_args()` """
        if timeframe is None:
            timeframe = 'weekly'
        projects = Tracker.objects.all()
        for project in projects:
            if timeframe == 'weekly':
                data = self.prep_standard_data( project )
            else:
                data = self.prep_lookahead_data( project )
            self.send_email( data )
            log.debug( 'project `%s` update emailed' % project.project_name )
        return

    def prep_standard_data( self, project ):
        """ Preps email-data alerting to any existing project issues.
            Called by process_projects() """
        data = []
        log.debug( 'data, ```%s```' % pprint.pformat(data) )
        return data

    def prep_lookahead_data( self, project ):
        """ TODO
            Preps email-data alerting to any look-ahead conditions for the next 3-months.
            Called by process_projects() """
        data = []
        log.debug( 'data, ```%s```' % pprint.pformat(data) )
        return data

    def send_email( self, data ):
        return

    ## end Controller()



if __name__ == '__main__':
    c = Controller()
    c.parse_args()
    log.debug( 'complete' )

