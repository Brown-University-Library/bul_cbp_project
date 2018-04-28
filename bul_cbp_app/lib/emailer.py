# -*- coding: utf-8 -*-

""" Prepares and sends email.
    Called by cron job. """

import argparse, datetime, logging, os

os.environ['DJANGO_SETTINGS_MODULE'] = 'config.settings'
logging.basicConfig(
    filename=os.environ['BUL_CBP__LOG_PATH'],
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
        parser = argparse.ArgumentParser(
            epilog="Note: no arguments curently handled.")
        args = parser.parse_args()  # halts here if argument is bad, & displays error and usage
        log.debug( 'checking args, ```%s```' % args )  # empty for now
        self.process_projects()
        pass

    def process_projects( self ):
        """ Calls other functions.
            Called by ```if __name__ == '__main__':``` """
        log.debug( 'starting' )
        print( 'hello' )
        pass


if __name__ == '__main__':
    c = Controller()
    c.parse_args()
    log.debug( 'complete' )

