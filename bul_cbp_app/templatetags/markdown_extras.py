# from <https://dev.to/learndjango/django-markdown-tutorial-3d43>

from django import template
from django.template.defaultfilters import stringfilter

import markdown as md

register = template.Library()


@register.filter()
@stringfilter
def markdown(value):
    return md.markdown(value, extensions=['markdown.extensions.fenced_code'])
