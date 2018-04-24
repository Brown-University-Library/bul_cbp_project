# -*- coding: utf-8 -*-

import datetime, decimal, logging


log = logging.getLogger(__name__)


class Controller(object):
    """ Manages steps. """

    def __init__( self ):
        pass

    def process_projects( self ):
        """ Calls other functions.
            Called by ```if __name__ == '__main__':``` """
        log.debug( 'starting processing' )



if __name__ == '__main__':
    log.debug( 'starting' )
    c = Controller()
    c.process_projects()
    log.debug( 'complete' )

