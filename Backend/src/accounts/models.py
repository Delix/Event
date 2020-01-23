from django.db import models
from django.conf import settings
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager
)


class UserManager(BaseUserManager):
    
    def create_user(self,email,password = None,is_active = True,is_staff = False,is_admin =False):
        if not email:
            raise ValueError('Users must have a email address')
        if not password :
            raise ValueError('Users must have a password')

        user = self.model(
             email = self.normalize_email(email),
             staff = is_staff,
             admin = is_admin,
             active = is_active
        )
      
     
        user.set_password(password)
        user.save(using = self._db)
        return user

    def create_formuser(self,email): 
       password = self.make_random_password()
       print(password)
       user = self.create_user(email = email,password= password,is_active = True,is_staff = False,is_admin = False)
       return user
    def create_staffuser(self,email,password = None):
         user = self.create_user(email = email,password = password,is_active = True,is_staff = True,is_admin = False) 
         return user
    def create_staffuser(self,email,password = None):
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

     def email_user(self, subject, message, from_email=None, **kwargs):
         
        send_mail(subject, message, from_email, [self.email], **kwargs)

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
      creator = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,primary_key = True)
  
      def __str__(self):
          return self.name  