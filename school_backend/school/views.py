from os import name
from tracemalloc import start
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from user.models import User
from .models import *
from .serializer import *

@api_view(['POST', 'GET'])
def register_school(request):
    if request.method == 'GET':
        schools = School.objects.all()
        serializer = SchoolSerializer(schools, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    if request.method == 'POST':
        name = request.data['name']
        description = request.data['description']
        school_gps = request.data['school_gps']
        school_image = request.data['school_image']

        try:
            School.objects.get(user=user)
            return Response({'error': 'User already has a registered school'}, status=status.HTTP_400_BAD_REQUEST)
        except School.DoesNotExist:
            school = School.objects.create(
                user=request.user,
                name=name, 
                description=description,
                school_gps=school_gps,
                school_image=school_image,
                )
            school.slug = '-'.join(['-'.join(str(name)),str(uuid)])
            school.save()
        return Response({'error': 'User has successfully registered school'}, status=status.HTTP_201_CREATED)

@api_view(['POST', 'GET'])
def academic_year(request, uuid):
    if request.method == 'GET':
        academic_years = AcademicYear.objects.all()
        serializer = AcademicYearSerializer(academic_years, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == 'POST':
        start_date = request.data['start_date']
        end_date = request.data['end_date']
        school = School.objects.get(uuid=uuid)

        try:
            AcademicYear.objects.get(start_date__date__gte=start_date, end_date__date__lte=end_date)
            return Response ({'error': "There is already an academic year for this period."})
        except AcademicYear.DoesNotExist:
            AcademicYear.objects.create(
                school=school,
                start_date=start_date,
                end_date=end_date,
                created_by = request.user
                )
        return Response ({'success': 'Created successfully'}, status=status.HTTP_201_CREATED)


@api_view(['POST', 'GET'])
def terms(request, id):
    if request.method == 'GET':
        terms = Terms.objects.all()
        serializer = TermSerializer(terms, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == 'POST':
        start_date = request.data['start_date']
        end_date = request.data['end_date']
        academic_year = AcademicYear.objects.get(id=id)
        try:
            Terms.objects.get(start_date__date__gte=start_date, end_date__date__lte=end_date)
            return Response ({'error': "There is already an academic year for this period."})
        except Terms.DoesNotExist:
            Terms.objects.create(
                start_date=start_date,
                end_date=end_date,
                academic_year = academic_year
                )
        return Response ({'success': 'Created successfully'}, status=status.HTTP_201_CREATED)

@api_view(['POST', 'GET'])
def classrooms(request, id):
    if request.method == 'GET':
        term = Terms.objects.get(id=id)
        classrooms = Classs.objects.filter(term=term)
        serializer = ClassSerializer(classrooms, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    if request.method == 'POST':
        name = request.data['name']
        term = Terms.objects.get(id=id)
        description = request.data['description']

        try:
            Classs.objects.get(name=name, term=term)
            return Response({'error': 'Class with this name already exists'}, status=status.HTTP_400_BAD_REQUEST)
        except Classs.DoesNotExist:
            Classs.objects.create( 
                name=name, 
                description=description,
                term=term
                )
        return Response({'success': 'User has successfully created a class'}, status=status.HTTP_201_CREATED)

#add subject to class object
@api_view(['POST', 'GET'])
def class_subjects(request, id):
    if request.method == 'GET':
        classs = Classs.objects.get(id=id)
        subjects = Subject.objects.filter(subjects_classs=classs)
        serializer = SubjectSerializer(subjects, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    if request.method == 'POST':
        name = request.data['name']
        classs = Classs.objects.get(id=id)
        description = request.data['description']
        teacher = request.data['teacher_id']

        try:
            Subject.objects.get(name=name, classs=classs)
            return Response({'error': 'Subject already exists'}, status=status.HTTP_400_BAD_REQUEST)
        except Subject.DoesNotExist:
            Subject.objects.create(
                name=f"{name} - ({classs.term.start_date.date()}/{classs.term.end_date.date()})", 
                description=description,
                classs=classs,
                teacher=User.objects.get(role='TEACHER', id=teacher)
                )
        return Response({'success': 'User has successfully created a class'}, status=status.HTTP_201_CREATED)

