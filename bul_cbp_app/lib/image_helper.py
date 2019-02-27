# -*- coding: utf-8 -*-

import datetime, decimal, logging
from bul_cbp_app import settings_app


log = logging.getLogger(__name__)


def prep_svg( score, score_display ):
    """" Returns image svg.
        Called by views.project_image() """
    if score > settings_app.PUBLIC_SCORE_CUTOFF:
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
</svg>'''.format( clr=color, scr=score_display )
    return svg


# def prep_svg( score, score_display ):
#     """" Returns image svg.
#         Called by views.project_image() """
#     if score > 75:
#         color = 'green'
#     else:
#         color = 'orange'
#     svg = '''<svg xmlns="http://www.w3.org/2000/svg" width="154" height="20">
#     <linearGradient id="b" x2="0" y2="100%">
#         <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
#         <stop offset="1" stop-opacity=".1"/>
#     </linearGradient>
#     <mask id="a">
#         <rect width="154" height="20" rx="3" fill="#fff"/>
#     </mask>
#     <g mask="url(#a)">
#         <path fill="#551919" d="M0 0h103v20H0z"/>
#         <path fill="{clr}" d="M103 0h51v20H103z"/>
#         <path fill="url(#b)" d="M0 0h154v20H0z"/>
#     </g>
#     <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
#         <text x="51.5" y="14">BUL code-check</text>
#         <text x="127.5" y="14">{scr}%</text>
#     </g>
# </svg>'''.format( clr=color, scr=score_display )
#     return svg
