# -*- coding: utf-8 -*-

import datetime, decimal, logging


log = logging.getLogger(__name__)


def calc_score( tracker ):
    """ Calculates int score.
        Called by views.project_image() """

    possible = 0
    score = 0

    ##################################################
    ## public info
    ##################################################

    if tracker.code_versioned is not 'n/a':
        possible += 1
        if tracker.code_versioned == 'yes':
            score += 1

    if tracker.has_public_code_url is not 'n/a':
        possible += 1
        if tracker.has_public_code_url == 'yes':
            score += 1

    possible += 1
    if tracker.public_code_url:
        score += 1

    if tracker.responsive is not 'n/a':
        possible += 1
        if tracker.responsive == 'yes':
            score += 1

    if tracker.contains_lightweight_data_reporting is not 'n/a':
        possible += 1
        if tracker.contains_lightweight_data_reporting == 'yes':
            score += 1

    if tracker.accessability_check_run is not 'n/a':
        possible += 1
        if tracker.accessability_check_run == 'yes':
            score += 1

    if tracker.data_discoverable is not 'n/a':
        possible += 1
        if tracker.data_discoverable == 'yes':
            score += 1

    if tracker.has_sitechecker_entry is not 'n/a':
        possible += 1
        if tracker.has_sitechecker_entry == 'yes':
            score += 1

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
    log.debug( 'pub_dates_to_check, ```%s```' % pub_dates_to_check )
    for pub_date_value in pub_dates_to_check:
        log.debug( 'pub_date_value, ```%s```' % pub_date_value )
        possible += 1
        if pub_date_value:
            if ( pub_date_value + datetime.timedelta(6*365/12) ) > datetime.date.today():  # means entry has been updated in last six months
                score += 1

    ##################################################
    ## non-public info
    ##################################################

    if tracker.framework_supported is not 'n/a':
        possible += 1
        if tracker.framework_supported == 'yes':
            score += 1

    if tracker.https_enforced is not 'n/a':
        possible += 1
        if tracker.https_enforced == 'yes':
            score += 1

    if tracker.admin_links_shib_protected is not 'n/a':
        possible += 1
        if tracker.admin_links_shib_protected == 'yes':
            score += 1

    if tracker.logs_rotated is not 'n/a':
        possible += 1
        if tracker.logs_rotated == 'yes':
            score += 1

    if tracker.patron_data_expiration_process is not 'n/a':
        possible += 1
        if tracker.patron_data_expiration_process == 'yes':
            score += 1

    if tracker.django_session_data_expired is not 'n/a':
        possible += 1
        if tracker.django_session_data_expired == 'yes':
            score += 1

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
        possible += 1
        if non_pub_date_value:
            if ( non_pub_date_value + datetime.timedelta(6*365/12) ) > datetime.date.today():  # means entry has been updated in last six months
                score += 1

    log.debug( 'possible score, %s' % possible )
    log.debug( 'actual score, %s' % score )

    initial_percentage_score = (score / possible) * 100
    log.debug( 'initial_percentage_score, `%s`' % initial_percentage_score )

    decimal_percentage_score = decimal.Decimal(initial_percentage_score).quantize( decimal.Decimal('1'), rounding=decimal.ROUND_HALF_UP )
    log.debug( 'decimal_percentage_score, `%s`' % decimal_percentage_score )

    percentage_score = int( decimal_percentage_score )
    log.debug( 'percentage_score, `%s`' % percentage_score )

    return percentage_score


def prep_svg( score ):
    """" Returns image svg.
        Called by views.project_image() """
    if score > 75:
        color = 'green'
    else:
        color = 'orange'
    svg = '''<svg xmlns="http://www.w3.org/2000/svg" width="154" height="20">
    <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <mask id="a">
        <rect width="154" height="20" rx="3" fill="#fff"/>
    </mask>
    <g mask="url(#a)">
        <path fill="#551919" d="M0 0h103v20H0z"/>
        <path fill="{clr}" d="M103 0h51v20H103z"/>
        <path fill="url(#b)" d="M0 0h154v20H0z"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
        <text x="51.5" y="14">BUL code-check</text>
        <text x="127.5" y="14">{scr}%</text>
    </g>
</svg>'''.format( clr=color, scr=score )
    return svg
