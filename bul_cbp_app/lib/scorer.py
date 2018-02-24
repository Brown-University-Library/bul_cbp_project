# -*- coding: utf-8 -*-

import datetime, decimal, logging


log = logging.getLogger(__name__)


class Scorer(object):
    """ Handles scoring. """

    def __init__( self ):
        pass

    def calc_score( self, tracker ):
        """ Calculates int score.
            Called by views.project_image() """

        possible = 0
        score = 0

        ##################################################
        ## public info
        ##################################################

        if tracker.code_versioned != 'n/a':
            possible += 1
            if tracker.code_versioned == 'yes':
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        if tracker.has_public_code_url != 'n/a':
            possible += 1
            if tracker.has_public_code_url == 'yes':
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        possible += 1
        if tracker.public_code_url:
            score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        if tracker.responsive != 'n/a':
            possible += 1
            if tracker.responsive == 'yes':
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        if tracker.contains_lightweight_data_reporting != 'n/a':
            possible += 1
            if tracker.contains_lightweight_data_reporting == 'yes':
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        if tracker.accessability_check_run != 'n/a':
            possible += 1
            if tracker.accessability_check_run == 'yes':
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        if tracker.data_discoverable != 'n/a':
            possible += 1
            if tracker.data_discoverable == 'yes':
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        if tracker.has_sitechecker_entry != 'n/a':
            possible += 1
            if tracker.has_sitechecker_entry == 'yes':
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        ## removing this from scoring since it's required
        # possible += 1
        # if tracker.project_contact_email:
        #     score +=1

        ## public dates
        pub_dates_to_check = [
            tracker.project_contact_email_CHECKED,
            tracker.code_versioned_CHECKED,
            tracker.has_public_code_url_CHECKED,
            tracker.public_code_url_CHECKED,
            tracker.responsiveness_CHECKED,
            tracker.contains_lightweight_data_reporting_CHECKED,
            tracker.accessability_check_run_CHECKED,
            tracker.data_discoverable_CHECKED,
            tracker.has_sitechecker_entry_CHECKED,
            ]
        for pub_date_value in pub_dates_to_check:
            log.debug( 'pub_date_value, ```%s```' % pub_date_value )
            possible += 1
            if pub_date_value:
                if ( pub_date_value + datetime.timedelta(6*365/12) ) > datetime.date.today():  # means entry has been updated in last six months
                    score += 1
            log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )


        ##################################################
        ## non-public info
        ##################################################

        if tracker.framework_supported != 'n/a':
            possible += 1
            if tracker.framework_supported == 'yes':
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        if tracker.https_enforced != 'n/a':
            possible += 1
            if tracker.https_enforced == 'yes':
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        if tracker.admin_links_shib_protected != 'n/a':
            possible += 1
            if tracker.admin_links_shib_protected == 'yes':
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        if tracker.logs_rotated != 'n/a':
            possible += 1
            if tracker.logs_rotated == 'yes':
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        log.debug( 'tracker.patron_data_expiration_process, `%s`' % tracker.patron_data_expiration_process )
        assert tracker.patron_data_expiration_process is not 'n/a', 'error, tracker.patron_data_expiration_process is `%s`' % tracker.patron_data_expiration_process
        # if tracker.patron_data_expiration_process is not 'n/a':
        if tracker.patron_data_expiration_process != 'n/a':
            log.debug( 'hereA' )
            log.debug( 'tracker.patron_data_expiration_process, `%s`' % tracker.patron_data_expiration_process )
            possible += 1
            if tracker.patron_data_expiration_process == 'yes':
                log.debug( 'hereB' )
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        if tracker.django_session_data_expired != 'n/a':
            possible += 1
            if tracker.django_session_data_expired == 'yes':
                score += 1
        log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        ## non-public dates
        non_pub_dates_to_check = [
            tracker.framework_supported_CHECKED,
            tracker.https_enforced_CHECKED,
            tracker.admin_links_shib_protected_CHECKED,
            tracker.logs_rotated_CHECKED,
            tracker.patron_data_expiration_process_CHECKED,
            tracker.django_session_data_expired_CHECKED,
            ]
        for non_pub_date_value in non_pub_dates_to_check:
            log.debug( 'non_pub_date_value, ```%s```' % pub_date_value )
            possible += 1
            if non_pub_date_value:
                if ( non_pub_date_value + datetime.timedelta(6*365/12) ) > datetime.date.today():  # means entry has been updated in last six months
                    score += 1
            log.debug( 'possible so far, `%s`; score so far, `%s`' % (possible, score) )

        initial_percentage_score = (score / possible) * 100
        log.debug( 'initial_percentage_score, `%s`' % initial_percentage_score )

        decimal_percentage_score = decimal.Decimal(initial_percentage_score).quantize( decimal.Decimal('1'), rounding=decimal.ROUND_HALF_UP )
        log.debug( 'decimal_percentage_score, `%s`' % decimal_percentage_score )

        percentage_score = int( decimal_percentage_score )
        log.debug( 'percentage_score, `%s`' % percentage_score )

        return percentage_score

        ## end def calc_score()

    ## end class Scorer()
