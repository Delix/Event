# Generated by Django 2.2.5 on 2019-10-31 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0005_guest_owner'),
    ]

    operations = [
        migrations.CreateModel(
            name='TermsCondition',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('Description', models.TextField()),
            ],
        ),
    ]
