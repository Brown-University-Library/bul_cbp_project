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
from bul_cbp_app import settings_app
from bul_cbp_app.models import Tracker
from django.core.mail import EmailMessage


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
        projects = self.get_projects( timeframe )
        email_contacts = self.gather_email_contacts( projects )
        for email_contact in email_contacts:
            log.debug( 'processing, `%s`' % email_contact )
            email_data = self.prep_email_data( email_contact, projects, timeframe )
            self.send_email( email_data )
        return

    def get_projects( self, timeframe ):
        """ Returns either all projects or those with needs.
            Called by process_projects() """
        if timeframe == 'weekly':
            projects = Tracker.objects.filter( score__lt=100 ).order_by( 'project_name' )
        else:
            projects = Tracker.objects.all().order_by( 'project_name' )
        log.debug( 'num of projects, %s' % len(projects) )
        return projects

    def gather_email_contacts( self, projects ):
        """ Creates contacts list from projects.
            Called by process_projects() """
        email_contacts = []
        for project in projects:
            if project.project_contact_email not in email_contacts:
                email_contacts.append( project.project_contact_email )
        sorted_email_contacts = sorted( email_contacts )
        log.debug( 'sorted_email_contacts, ```%s```' % pprint.pformat(sorted_email_contacts) )
        return sorted_email_contacts

    def prep_email_data( self, email_contact, projects, timeframe ):
        """ Prepares alert data for all projects based on timeframe.
            Called by process_projects() """
        if timeframe == 'weekly':
            email_data = self.prep_needs_data( email_contact, projects )
        else:
            email_data = self.prep_overview_data( email_contact, projects )
        log.debug( 'returning email_data' )
        return email_data

    def prep_needs_data( self, email_contact, projects ):
        """ Preps email dct.
            Called by process_projects() """
        data_dct = {
            'subject': 'weekly project-needs update',
            'body': self.prep_needs_body( email_contact ),
            'sender': settings_app.EMAIL_SENDER,
            'receivers': [ email_contact ],
            }
        log.debug( 'data_dct, ```%s```' % pprint.pformat(data_dct) )
        return data_dct

    def prep_needs_body( self, email_contact ):
        """ Preps email-data alerting to any existing project issues.
            Called by prep_needs_data() """
        user_projects_by_score = Tracker.objects.filter( project_contact_email=email_contact ).order_by( '-score' )
        template = django.template.loader.get_template( 'bul_cbp_app_templates/email_template.html' )
        log.debug( 'about to start loop' )
        for prjct in user_projects_by_score:
            log.debug( 'in prjct loop' )
            issues_lst = []
            #
            if prjct.code_versioned == 'no':
                issues_lst.append( 'needs to be versioned' )
            if not prjct.code_versioned_CHECKED:
                issues_lst.append( 'version-check date needs to be entered' )
            elif ( prjct.code_versioned_CHECKED + datetime.timedelta(6*365/12) ) < datetime.date.today():  # means entry has _not_ been updated in last six months
                issues_lst.append( 'version-check date is too old' )
            #
            if prjct.has_public_code_url == 'no':
                issues_lst.append( 'needs to be publicly accessable (or marked as not-applicable)' )
            if not prjct.has_public_code_url_CHECKED:
                issues_lst.append( '_has_ public-code-url-check date needs to be entered' )
            elif ( prjct.has_public_code_url_CHECKED + datetime.timedelta(6*365/12) ) < datetime.date.today():  # means entry has _not_ been updated in last six months
                issues_lst.append( '_has_ public-code-url-check date is too old' )
            #
            if prjct.has_public_code_url is 'yes' and len(prjct.public_code_url) is 0:
                issues_lst.append( 'need to enter the public url' )
            if not prjct.public_code_url_CHECKED:
                issues_lst.append( 'public-code-url-check date needs to be entered' )
            elif ( prjct.public_code_url_CHECKED + datetime.timedelta(6*365/12) ) < datetime.date.today():  # means entry has _not_ been updated in last six months
                issues_lst.append( 'public-code-url-check date is too old' )
            #
            if prjct.responsive == 'no':
                issues_lst.append( 'needs to be responsive' )
            if not prjct.responsiveness_CHECKED:
                issues_lst.append( 'responsive-check date needs to be entered' )
            elif ( prjct.responsiveness_CHECKED + datetime.timedelta(6*365/12) ) < datetime.date.today():  # means entry has _not_ been updated in last six months
                issues_lst.append( 'responsive-check date is too old' )
            #
            if prjct.contains_lightweight_data_reporting == 'no':
                issues_lst.append( 'needs lightweight data-reporting' )
            if not prjct.contains_lightweight_data_reporting_CHECKED:
                issues_lst.append( 'lightweight-data-reporting-check date needs to be entered' )
            elif ( prjct.contains_lightweight_data_reporting_CHECKED + datetime.timedelta(6*365/12) ) < datetime.date.today():  # means entry has _not_ been updated in last six months
                issues_lst.append( 'lightweight-data-reporting-check date is too old' )
            #
            if prjct.accessability_check_run == 'no':
                issues_lst.append( 'need to pass accessability-check' )
            if not prjct.accessability_check_run_CHECKED:
                issues_lst.append( 'accessability-check date needs to be entered' )
            elif ( prjct.accessability_check_run_CHECKED + datetime.timedelta(6*365/12) ) < datetime.date.today():  # means entry has _not_ been updated in last six months
                issues_lst.append( 'accessability-check date is too old' )
            #
            if prjct.data_discoverable == 'no':
                issues_lst.append( 'need to check w/discovery team to make project discoverable' )
            if not prjct.data_discoverable_CHECKED:
                issues_lst.append( 'discoverability-check date needs to be entered' )
            elif ( prjct.data_discoverable_CHECKED + datetime.timedelta(6*365/12) ) < datetime.date.today():  # means entry has _not_ been updated in last six months
                issues_lst.append( 'discoverability-check date is too old' )
            #
            if prjct.has_sitechecker_entry == 'no':
                issues_lst.append( 'need to add site-checker check' )
            if not prjct.has_sitechecker_entry_CHECKED:
                issues_lst.append( 'sitechecker-check date needs to be entered' )
            elif ( prjct.has_sitechecker_entry_CHECKED + datetime.timedelta(6*365/12) ) < datetime.date.today():  # means entry has _not_ been updated in last six months
                issues_lst.append( 'sitechecker-check date is too old' )
            #
            if prjct.framework_supported is 'no':
                issues_lst.append( 'need to upgrade to modern, supported version of framework' )
            if not prjct.framework_supported_CHECKED:
                issues_lst.append( 'framework-check date needs to be entered' )
            elif ( prjct.framework_supported_CHECKED + datetime.timedelta(6*365/12) ) < datetime.date.today():  # means entry has _not_ been updated in last six months
                issues_lst.append( 'framework-check date is too old' )
            #
            if prjct.https_enforced is 'no':
                issues_lst.append( 'need to enforce https' )
            if not prjct.https_enforced_CHECKED:
                issues_lst.append( 'https-check date needs to be entered' )
            elif ( prjct.https_enforced_CHECKED + datetime.timedelta(6*365/12) ) < datetime.date.today():  # means entry has _not_ been updated in last six months
                issues_lst.append( 'https-check date is too old' )


            #
            prjct.issues = issues_lst
            log.debug( 'issues_lst, ```%s```' % pprint.pformat(issues_lst) )



        context = {
            'usr_projects': user_projects_by_score,
            }
        body_text = template.render(context)
        log.debug( 'body_text, ```%s```' % body_text )
        return body_text

    def prep_overview_data( self, email_contact, projects ):
        """ TODO
            Preps overview email-data including any look-ahead conditions for the next 3-months.
            Called by process_projects() """
        data_dct = {}
        log.debug( 'data_dct, ```%s```' % pprint.pformat(data_dct) )
        return data_dct

    def send_email( self, data_dct ):
        """ Sends email.
            Called by process_projects() """
        try:
            email = EmailMessage(
                data_dct['subject'],
                data_dct['body'],
                data_dct['sender'],
                data_dct['receivers'] )
            email.send()
            log.debug( 'mail sent successfully' )
        except Exception as e:
            log.error( 'exception, ```%s```' % e )
        return

    ## end Controller()


if __name__ == '__main__':
    c = Controller()
    c.parse_args()
    log.debug( 'complete' )
