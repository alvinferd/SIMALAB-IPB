from django.contrib.auth.backends import ModelBackend
# from django.contrib.auth.models import User
from simalab.core.models import User
from simalab.core.ipb import get_ipb_user


class AuthenticationBackend(ModelBackend):

    def authenticate(self, request, username=None, password=None, **kwargs):

        if get_ipb_user(username, password) is None:
            return None

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            user = User(username=username)
            user.is_staff = True
            user.save()
        return user

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None