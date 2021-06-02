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
    NIM = models.CharField(max_length=12, blank=False, null=False, unique=True)
    departemen = models.CharField(max_length=20, blank=False, null=False)
    strata = models.CharField(max_length=12, blank=False, null=True)


class AdminLab(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    NIP = models.CharField(max_length=12, blank=False, null=False, unique=True)
    LabProdi = models.CharField(max_length=12, blank=False, null=True, unique=True)

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
    kategori_id = models.ForeignKey(KategoriAlat, on_delete=models.CASCADE)

    def __str__(self):
        return self.NamaAlat
