# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-01-14 20:46
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('bul_cbp_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tracker',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('project_name', models.CharField(max_length=50)),
                ('slug', models.SlugField(help_text='for identifying segment in url; auto-entered, but feel free to edit')),
                ('project_contact_email', models.EmailField(max_length=254)),
                ('code_versioned', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', max_length=20)),
                ('has_public_code_url', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', max_length=20)),
                ('public_code_url', models.URLField()),
                ('responsive', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', help_text='looks/works right on desktop & mobile-devices', max_length=20)),
                ('contains_lightweight_data_reporting', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', max_length=20)),
                ('accessability_check_run', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', max_length=20)),
                ('data_discoverable', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', help_text='information accessible by discovery-application', max_length=20)),
                ('has_sitechecker_entry', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', max_length=20)),
                ('project_contact_email_CHECKED', models.DateField()),
                ('code_versioned_CHECKED', models.DateField()),
                ('has_public_code_url_CHECKED', models.DateField()),
                ('responsiveness_CHECKED', models.DateField()),
                ('public_code_url_CHECKED', models.DateField()),
                ('contains_lightweight_data_reporting_CHECKED', models.DateField()),
                ('accessability_check_run_CHECKED', models.DateField()),
                ('data_discoverable_CHECKED', models.DateField()),
                ('has_sitechecker_entry_CHECKED', models.DateField()),
                ('framework_supported', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', help_text='eg: uses long-term-release version or later', max_length=20)),
                ('framework_supported_CHECKED', models.DateField()),
                ('https_enforced', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', max_length=20)),
                ('https_enforced_CHECKED', models.DateField()),
                ('admin_links_shib_protected', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', max_length=20)),
                ('admin_links_shib_protected_CHECKED', models.DateField()),
                ('logs_rotated', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', max_length=20)),
                ('logs_rotated_CHECKED', models.DateField()),
                ('patron_data_expiration_process', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', help_text='if patron data is captured, there is an implemented process for identifying info to be deleted', max_length=20)),
                ('patron_data_expiration_process_CHECKED', models.DateField()),
                ('django_session_data_expired', models.CharField(choices=[('yes', 'yes'), ('no', 'no'), ('n/a', 'not-applicable')], default='n/a', help_text="if django session-data is stored in db, it's auto-deleted via cron", max_length=20)),
                ('django_session_data_expired_CHECKED', models.DateField()),
                ('notes', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
