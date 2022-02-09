from rest_framework import serializers
from school.models import AcademicYear, School, Terms

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'

class AcademicYearSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicYear
        fields = '__all__'

class TermSerializer(serializers.ModelSerializer):
    class Meta:
        model = Terms
        fields = '__all__'

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Terms
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Terms
        fields = '__all__'