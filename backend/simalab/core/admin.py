from django.contrib import admin
from simalab.core.models import PeminjamanRuangan,Laboratorium,Form_Submisi,AlatLab,KategoriAlat,User,Mahasiswa, AdminLab

# Yang visible di administrator Django
# list Entitasnya  
admin.site.register(User)
admin.site.register(Mahasiswa)
admin.site.register(AdminLab)
admin.site.register(Laboratorium)
admin.site.register(KategoriAlat)
admin.site.register(AlatLab)
admin.site.register(Form_Submisi)
admin.site.register(PeminjamanRuangan)

