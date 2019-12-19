from django.contrib import admin
from django.contrib.auth import get_user_model
from accounts.models import Contact

User = get_user_model()
class Useradmin(admin.ModelAdmin):
  search_fields = ['email']
  class Meta:
       model = User

admin.site.register(User,Useradmin)
# Register your models here.



