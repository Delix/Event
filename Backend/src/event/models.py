from django.db import models
from django.contrib.auth.models import User

# Create your models here. need work on date and def

class Division(models.Model):
    name = models.CharField(max_length = 250)
    image = models.CharField(max_length = 250)
    
    def __str__(self):
        return self.name
 

class Event(models.Model):
    name = models.CharField(max_length = 250)
    location = models.CharField(max_length = 250)
    date = models.DateField()
    division = models.ForeignKey(Division,related_name = 'events',on_delete = models.CASCADE)

    def __str__(self):
        return self.name

class  Company(models.Model):
      company = models.CharField(max_length = 250)
      sector = models.CharField(max_length = 250)

      def __str__(self):
          return self.company

class  Attendee(models.Model):
      title = models.CharField(max_length = 4)
      name = models.CharField(max_length = 250)
      designation = models.CharField(max_length = 250)
      email = models.EmailField(max_length=70)
      company = models.ForeignKey(Company,on_delete = models.CASCADE)
       
      def __str__(self):
          return self.name

class Event_Form(models.Model):
        previous = models.TextField()
        hear = models.TextField()
      
        event =  models.ForeignKey(Event,on_delete = models.CASCADE)
        attendee = models.ForeignKey(Attendee,on_delete = models.CASCADE)
        date = models.DateTimeField(auto_now_add=True)
       
    
     
class Social(models.Model):
        name = models.CharField(max_length = 250)
        link = models.URLField(max_length=250,blank = True)
        def __str__(self):
             return self.name

class Contactus(models.Model):
          address =  models.CharField(max_length = 250,default = 'Office 112b – 115 Block C, JHB 55 Empire Road, Parktown' )
          call = models.CharField(max_length = 250,default = '+27 (0) 11 482 7256')
          email = models.EmailField(max_length=70,default = 'info@empowaworx.co.za')

class TermsCondition(models.Model):
          name =  models.TextField()
          description = models.TextField()
          def __str__(self):
             return self.name
