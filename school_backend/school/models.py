from django.db import models
from user.models import User
import uuid
from django.utils import timezone
from random import randrange


class School(models.Model):
    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, null=True, blank=True)
    slug = models.SlugField(max_length=255, null=True, blank=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    description = models.TextField(blank=True)
    school_gps = models.CharField(blank=False, null=False, max_length=250)
    school_image = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class AcademicYear(models.Model):
    school = models.ForeignKey(School, related_name="school_academic_year", blank=True, null=True, on_delete=models.CASCADE)
    start_date = models.DateTimeField(blank=True,null=True)
    end_date = models.DateTimeField(blank=True,null=True)
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, related_name="academic_year", blank=True, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return f"{self.start_date} - {self.end_date}"

class Terms(models.Model):
    academic_year = models.ForeignKey(AcademicYear, related_name="terms", blank=True, null=True, on_delete=models.CASCADE)
    start_date = models.DateTimeField(blank=True,null=True)
    end_date = models.DateTimeField(blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.start_date} - {self.end_date}"

def generate():
    FROM = '0123456789'
    LENGTH = 5
    std_id = ""
    for i in range(LENGTH):
        std_id += FROM[randrange(0, len(FROM))]
    return f"#{std_id}/{timezone.now().year}"

class Student(models.Model):
    studentID = models.CharField(max_length=255, blank=True, null=True, default=generate)
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    father_name = models.CharField(max_length=255, blank=True, null=True)
    father_contact = models.CharField(max_length=255, blank=True, null=True)
    mother_name = models.CharField(max_length=255, blank=True, null=True)
    mother_contact = models.CharField(max_length=255, blank=True, null=True)
    gender = models.CharField(max_length=255, blank=True, null=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    profile_image = models.TextField(null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    def full_name(self):
        return f"{self.first_name} ({self.last_name})"

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Classs(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    student = models.ManyToManyField(Student, related_name="class_students", blank=True)
    term = models.ForeignKey(Terms, related_name="term_classs", null=True, blank=True, on_delete=models.SET_NULL)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Subject(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    classs = models.ForeignKey(Classs, related_name="subjects", null=True, blank=True, on_delete=models.SET_NULL)
    description = models.TextField(blank=True, null=True)
    teacher = models.ForeignKey(User, related_name="subjects", null=True, blank=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Result(models.Model):
    student = models.OneToOneField(Student, related_name="student_result", null=True, blank=True, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, related_name="subject_results", null=True, blank=True, on_delete=models.CASCADE)
    exam_score = models.IntegerField(default=0, null=True, blank=True)
    class_score = models.IntegerField(default=0, null=True, blank=True)
    grade = models.CharField(max_length=2, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.subject.name} - {self.student.full_name()}"
