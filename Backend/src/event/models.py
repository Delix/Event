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

class Event_Form(models.Model):
        previous = models.TextField(blank = True,null = True)
        hear = models.TextField(blank = True,null = True)
        date = models.DateTimeField(auto_now_add=True )
        event =  models.ForeignKey(Event,on_delete = models.CASCADE,blank = True,null = True)
        isComplete = models.BooleanField()
        

class  Company(models.Model):
       name = models.CharField(max_length = 250)
       sector = models.CharField(max_length = 250)
       form = models.ForeignKey(Event_Form,related_name = 'company',on_delete = models.CASCADE,blank = True,null = True)
       def __str__(self):
          return self.name

class  Attendee(models.Model):
      title = models.CharField(max_length = 4)
      name = models.CharField(max_length = 250)
      designation = models.CharField(max_length = 250)
      email = models.EmailField(max_length=70)
      phone = models.CharField(max_length = 250,blank = True)
      form = models.ForeignKey(Event_Form,related_name = 'attendees',on_delete = models.CASCADE,blank = True,null = True)
  
       
      def __str__(self):
          return self.name

class  Contact(models.Model):
      title = models.CharField(max_length = 4)
      name = models.CharField(max_length = 250)
      phone = models.CharField(max_length = 250)
      email = models.EmailField(max_length=70)
      form = models.ForeignKey(Event_Form,related_name = 'contact',blank = True,on_delete = models.CASCADE,null = True)
    
      def __str__(self):
          return self.name  

     
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
