from django.contrib import admin
from simalab.core.models import AlatLab,KategoriAlat,User,Mahasiswa, AdminLab

# Yang visible di administrator Django
# list Entitasnya  
admin.site.register(User)
admin.site.register(Mahasiswa)
admin.site.register(AdminLab)
admin.site.register(KategoriAlat)
admin.site.register(AlatLab)

