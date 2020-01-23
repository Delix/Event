from django.db import models
from django.conf import settings



   
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
       name = models.CharField(max_length = 250)
       sector = models.CharField(max_length = 250)
   
  
      
       def __str__(self):
          return self.name

class Event_Form(models.Model):
        previous = models.TextField(blank = True,null = True)
        hear = models.TextField(blank = True,null = True)
        date = models.DateTimeField(auto_now_add=True )
        event =  models.ForeignKey(Event,on_delete = models.CASCADE,blank = True,null = True)
        company = models.ForeignKey(Company,on_delete = models.CASCADE,blank= True , null = True)
        creator = models.ForeignKey(settings.AUTH_USER_MODEL,related_name = 'user',blank = True,on_delete = models.CASCADE,null = True)

class  Attendee(models.Model):
      title = models.CharField(max_length = 4)
      name = models.CharField(max_length = 250)
      designation = models.CharField(max_length = 250)
      email = models.EmailField(max_length=70)
      phone = models.CharField(max_length = 250,blank = True)
      form = models.ForeignKey(Event_Form,related_name = 'attendees',on_delete = models.CASCADE,blank = True,null = True)
  