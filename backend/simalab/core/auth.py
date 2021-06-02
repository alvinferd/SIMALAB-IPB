from django.contrib.auth.backends import ModelBackend
# from django.contrib.auth.models import User
from simalab.core.models import User, Mahasiswa, AdminLab
from simalab.core.ipb import login_mahasiswa, login_admin_lab


class AuthenticationBackend(ModelBackend):

    def authenticate(self, request, username=None, password=None, **kwargs):

        mahasiswa_res = login_mahasiswa(username, password)
        admin_lab_res = login_admin_lab(username, password)

        if mahasiswa_res is not None:
            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                user = User(username=username)
                user.is_staff = True
                user.is_superuser = True
                user.is_mahasiswa = True
                user.save()
                mahasiswa = Mahasiswa.objects.create(user=user)
                mahasiswa.NIM = mahasiswa_res['NIM']
                mahasiswa.departemen = mahasiswa_res['Mayor']
                mahasiswa.NIM = mahasiswa_res['KodeStrata']
                mahasiswa.save()
            
        elif admin_lab_res is not None:
            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                user = User(username=username)
                user.is_staff = False
                user.is_admin_lab = True
                user.save()
                admin_lab = AdminLab.objects.create(user=user)
                admin_lab.NIP = admin_lab_res['NIP']
                admin_lab.NIP = admin_lab_res['ProdiLab'] #ini nanti diganti kalau udh dapat API SIMPEG
                admin_lab.save()

        else:
            return None

        return user



    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None