# -*- coding: utf-8 -*-

import json, os


FOO = 'BAR'


README_URL = os.environ['BUL_CBP__README_URL']

SUPER_USERS = json.loads( os.environ['BUL_CBP__SUPER_USERS_JSON'] )

STAFF_USERS = json.loads( os.environ['BUL_CBP__STAFF_USERS_JSON'] )  # can use admin

STAFF_GROUP = os.environ['BUL_CBP__STAFF_GROUP']

TEST_META_DCT = json.loads( os.environ['BUL_CBP__TEST_META_DCT_JSON'] )


# DEV_SHIB_INFO = json.loads( os.environ['BUL_CBP__DEV_SHIB_INFO_JSON'] )

# TEST_USERNAME = os.environ['BUL_CBP__TEST_USERNAME']
# TEST_NETID = os.environ['BUL_CBP__TEST_NETID']
# TEST_EMAIL = os.environ['BUL_CBP__TEST_EMAIL']
