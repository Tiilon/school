from django.urls import path
from .views import *

urlpatterns = [
    path('register/', register_school),
    path('academic_year/<uuid>/', academic_year),
    path('terms/<id>/', terms),
    path('term/classroom/<id>/', classrooms),
    path('classroom/subjects/<id>/', class_subjects),
]