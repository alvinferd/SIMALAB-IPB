from django.db import models

# Create your models here.
import uuid

from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, PermissionsMixin
)

class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False,)
    username = models.CharField(max_length=32, blank=False, null=False, unique=True)
    
    is_mahasiswa = models.BooleanField(default=False)
    is_adminLab = models.BooleanField(default=False)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser

    def __str__(self):
        return self.username

class Mahasiswa(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    Nama = models.CharField(max_length=20, blank=False, null=False)    
    NIM = models.CharField(max_length=12, blank=False, null=False, unique=True)
    departemen = models.CharField(max_length=20, blank=False, null=False)
    strata = models.CharField(max_length=12, blank=False, null=False)

    def __str__(self):
        return self.Nama

class AdminLab(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    Nama = models.CharField(max_length=20, blank=False, null=False)        
    NIP = models.CharField(max_length=12, blank=False, null=False, unique=True)
    LabProdi = models.CharField(max_length=12, blank=False, null=True)

    def __str__(self):
        return self.Nama

class Laboratorium(models.Model):
    id_labor = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False,)
    ruangan = models.CharField(max_length=100, blank=False, null=False)
    departemen = models.CharField(max_length=500, blank=False, null=False)

    def __str__(self):
        return self.ruangan


class KategoriAlat(models.Model):
    id_kategori = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False,)
    Kategori = models.CharField(max_length=100, blank=False, null=False)
    Keterangan = models.CharField(max_length=500, blank=False, null=False)

    def __str__(self):
        return self.Kategori

class AlatLab(models.Model):
    id_alat = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False,)
    NamaAlat = models.CharField(max_length=100, blank=False, null=False)
    Quantity = models.IntegerField(default = 0)
    SubInv = models.CharField(max_length=100, blank=False, null=True)    
    kategori_id = models.ForeignKey(KategoriAlat, on_delete=models.CASCADE)
    lab_id = models.ForeignKey(Laboratorium, on_delete=models.CASCADE)
    gambarAlat = models.FileField(upload_to='static/uploads/alat/',null=True)

    def __str__(self):
        return self.NamaAlat

class Form_Submisi(models.Model):
    id_form = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False,)
    judulPenelitian = models.CharField(max_length=100, blank=False, null=False)
    no_hp = models.CharField(max_length=100, blank=False, null=False)
    dosbing = models.CharField(max_length=100, blank=False, null=False)
    date_form = models.DateField()
    date_peminjaman = models.DateField()    
    file1 = models.FileField(upload_to='static/uploads/submisi/',null=True)
    file2 = models.FileField(upload_to='static/uploads/submisi/',null=True)
    Verifikasi = models.BooleanField(default=False)
    Status = models.BooleanField(null=True)
    user_id = models.ForeignKey(Mahasiswa, on_delete=models.CASCADE)
    ruangan_id = models.ForeignKey(Laboratorium, on_delete=models.CASCADE)

    def __str__(self):
        return self.judulPenelitian

class PeminjamanRuangan(models.Model):
    id_peminjaman = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False,)
    peminjam_id = models.ForeignKey(Mahasiswa, on_delete=models.CASCADE)
    lab_id = models.ForeignKey(Laboratorium, on_delete=models.CASCADE)
    form_id = models.ForeignKey(Form_Submisi, on_delete=models.CASCADE)
    date_peminjaman = models.DateField()
    keterangan = models.CharField(max_length=100, blank=False, null=False)    

    def __str__(self):
        return self.keterangan

class TemplateForm(models.Model):
    id_template = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False,)
    nama_form = models.CharField(max_length=100, blank=False, null=False)
    file = models.FileField(upload_to='static/uploads/templates/')
    departemenlab = models.CharField(max_length=100, blank=False, null=False)

    def __str__(self):
        return self.nama_form
