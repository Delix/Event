from django.db import models
from event.models import Company,Event_Form

from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager
)


class UserManager(BaseUserManager):
    def create_user(self,email,password = None,is_active = True,is_staff = False,is_admin =False):
        if not email:
            raise ValueError('Users must have a email address')
        if not password and user.staff == true:
            raise ValueError('Users must have a password')
        user = self.model(
            email = self.normalize_email(email)
        )
        user.staff = is_staff
        user.admin = is_admin
        user.active = is_active
        if user.staff:
           user.set_password(password)
        else:
           password = User.objects.make_random_password()
           user.set_password(password)
        user.save(using = self._db)
        return user
    def create_staffuser(self,email,password = None,is_active = True,is_staff = True,is_admin =False):
         user = self.create_user(email = email,password = password,is_active = True,is_staff = True,is_admin = False) 
         return user
    def create_superuser(self,email,password = None):
         user = self.create_user(email = email,password = password,is_active = True,is_staff = True,is_admin = True) 
         return user
class User(AbstractBaseUser):
     email = models.EmailField(max_length = 255,unique = True)
     active =  models.BooleanField(default = True)
     staff = models.BooleanField(default = False)
     admin = models.BooleanField(default = False)
     Timestamp = models.DateTimeField(auto_now_add=True)

     objects = UserManager()
     USERNAME_FIELD = 'email' 
     
         
     def has_perm(self,perm,obj =None):
         return True
     def has_module_perms(self,app_label):
         return True

     @property
     def is_staff(self):
         return self.staff
    
     @property
     def is_admin(self):
         return self.admin
    
     @property
     def is_active(self):
         return self.active
                     


# Create your models here.
class  Contact(models.Model):
      title = models.CharField(max_length = 4)
      name = models.CharField(max_length = 250)
      phone = models.CharField(max_length = 250)
      email = models.EmailField(max_length=70)
      user = models.OneToOneField(User,on_delete = models.CASCADE)
      form = models.ForeignKey(Event_Form,on_delete = models.CASCADE,related_name = 'Form')
  
      def __str__(self):
          return self.name  