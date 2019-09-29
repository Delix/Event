from django.db import models

# Create your models here. need work on date and def

class Division(models.Model):
    name = models.CharField(max_length = 250)
    image = models.CharField(max_length = 250)



class Event(models.Model):
    name = models.CharField(max_length = 250)
    location = models.CharField(max_length = 250)
    date = models.CharField(max_length = 8)
    division = models.ForeignKey(Division,on_delete = models.CASCADE)


class Guest(models.Model):
      title = models.CharField(max_length = 4)
      name = models.CharField(max_length = 250)
     #S contactno = 
      designation = models.CharField(max_length = 250)
      email = models.EmailField(max_length=70)

      company = models.CharField(max_length = 250)
      sector = models.CharField(max_length = 250)

      hear = models.CharField(max_length = 250)
      previous = models.CharField(max_length = 250)
        
     # date =  models.DateField(_("Date"), default=datetime.date.today)
    
      event =  models.ForeignKey(Event,on_delete =  models.CASCADE)
  