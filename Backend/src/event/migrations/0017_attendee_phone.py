# Generated by Django 2.2.5 on 2019-11-27 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0016_auto_20191127_1022'),
    ]

    operations = [
        migrations.AddField(
            model_name='attendee',
            name='phone',
            field=models.CharField(blank=True, max_length=250),
        ),
    ]
