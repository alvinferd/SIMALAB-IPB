from rest_framework import serializers
from simalab.core.models import User,Mahasiswa,AdminLab,Laboratorium,KategoriAlat,AlatLab,Form_Submisi,PeminjamanRuangan,TemplateForm

class orangSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','is_mahasiswa','is_adminLab','is_active','is_staff')

class MhsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mahasiswa
        fields = ('user','Nama','NIM','departemen','strata')

class adminlabSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminLab
        fields = ('user','Nama','NIP','LabProdi')

class laborSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laboratorium
        fields = ('id_labor','ruangan','departemen')

class kategoriSerializer(serializers.ModelSerializer):
    class Meta:
        model = KategoriAlat
        fields = ('id_kategori','Kategori','Keterangan')

class alatSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlatLab
        fields = ('id_alat','NamaAlat','Quantity','gambarAlat','kategori_id','lab_id')

class submisiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form_Submisi
        fields = ('id_form','judulPenelitian','no_hp','dosbing','date_form','date_peminjaman','file1','file2','Verifikasi','Status','user_id','ruangan_id')

class peminjamanSerializer(serializers.ModelSerializer):
    class Meta:
        model = PeminjamanRuangan
        fields = ('id_peminjaman','keterangan','peminjam_id','lab_id','form_id','date_peminjaman')

class templateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TemplateForm
        fields = ('id_template','nama_form','file','departemenlab')

