from django.contrib import admin
from simalab.core.models import TemplateForm,PeminjamanRuangan,Laboratorium,Form_Submisi,AlatLab,KategoriAlat,User,Mahasiswa, AdminLab


class tampilUser(admin.ModelAdmin):
		list_display = ['id','username']
		search_fields = ['username']
		list_per_page = 10

class tampilMahasiswa(admin.ModelAdmin):
		list_display = ['user','Nama','NIM','departemen','strata']
		list_filter = ('departemen',)
		search_fields = ['Nama','NIM']
		list_per_page = 10

class tampilPegawai(admin.ModelAdmin):
		list_display = ['user','Nama','NIP','LabProdi']
		list_filter = ('LabProdi',)
		search_fields = ['Nama','NIP']
		list_per_page = 10

class tampilLab(admin.ModelAdmin):
		list_display = ['id_labor','ruangan','departemen']
		list_filter = ('departemen',)
		search_fields = ['ruangan']
		list_per_page = 10

class tampilKategori(admin.ModelAdmin):
		list_display = ['id_kategori','Kategori','Keterangan']
		list_filter = ('Kategori',)
		search_fields = ['Kategori']
		list_per_page = 10

class tampilAlat(admin.ModelAdmin):
		list_display = ['id_alat','NamaAlat','Quantity','gambarAlat','kategori_id','lab_id']
		list_filter = ('kategori_id','lab_id',)
		search_fields = ['NamaAlat']
		list_per_page = 10

class tampilSubmisi(admin.ModelAdmin):
		list_display = ['id_form','judulPenelitian','no_hp','dosbing','date_form','date_peminjaman','file1','file2','Verifikasi','Status','user_id','ruangan_id']
		list_filter = ('Verifikasi',)
		search_fields = ['judulPenelitian','user_id','ruangan_id']
		list_per_page = 10

class tampilPeminjaman(admin.ModelAdmin):
		list_display = ['id_peminjaman','keterangan','peminjam_id','lab_id','form_id','date_peminjaman']
		list_filter = ('lab_id',)
		search_fields = ['peminjam_id','lab_id','form_id','date_peminjaman']
		list_per_page = 10

class tampilTemplate(admin.ModelAdmin):
		list_display = ['id_template','nama_form','file','departemenlab']
		list_filter = ('departemenlab',)
		search_fields = ['nama_form']
		list_per_page = 10
		
# Yang visible di administrator Django
# list Entitasnya  
admin.site.register(User, tampilUser)
admin.site.register(Mahasiswa, tampilMahasiswa)
admin.site.register(AdminLab, tampilPegawai	)
admin.site.register(Laboratorium, tampilLab	)
admin.site.register(KategoriAlat, tampilKategori)
admin.site.register(AlatLab, tampilAlat)
admin.site.register(Form_Submisi,tampilSubmisi)
admin.site.register(PeminjamanRuangan,tampilPeminjaman)
admin.site.register(TemplateForm, tampilTemplate)

