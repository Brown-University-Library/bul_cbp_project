# -*- coding: utf-8 -*-

import json, os


FOO = 'BAR'

DEV_SHIB_INFO = json.loads( os.environ['DEV_SHIB_INFO_JSON'] )

# TEST_USERNAME = os.environ['BUL_CBP__TEST_USERNAME']
# TEST_NETID = os.environ['BUL_CBP__TEST_NETID']
# TEST_EMAIL = os.environ['BUL_CBP__TEST_EMAIL']

TEST_META_DCT = json.loads( os.environ['BUL_CBP__TEST_META_DCT_JSON'] )

SUPER_USERS = json.loads( os.environ['BUL_CBP__SUPER_USERS_JSON'] )

STAFF_USERS = json.loads( os.environ['BUL_CBP__STAFF_USERS_JSON'] )  # can use admin

STAFF_GROUP = os.environ['BUL_CBP__STAFF_GROUP']

