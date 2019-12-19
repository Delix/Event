from django.db import models

# Create your models here.


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
