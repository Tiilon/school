# Generated by Django 3.2.7 on 2022-01-22 12:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('school', '0005_academicyear_academic_year'),
    ]

    operations = [
        migrations.RenameField(
            model_name='academicyear',
            old_name='academic_year',
            new_name='school',
        ),
    ]