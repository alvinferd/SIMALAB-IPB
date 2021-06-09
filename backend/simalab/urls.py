"""simalab URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from simalab.core import views
from rest_framework.authtoken import views as drf_views


router = routers.DefaultRouter()
router.register(r'orang', views.orangView, 'simalab')
router.register(r'mahasiswa', views.MhsView, 'simalab')
router.register(r'pegawai', views.adminView, 'simalab')
router.register(r'lab', views.labView, 'simalab')
router.register(r'kategoriAlat', views.kategoriView, 'simalab')
router.register(r'alat', views.alatView, 'simalab')
router.register(r'submisiPeminjaman', views.submisiView, 'simalab')
router.register(r'jadwalPeminjaman', views.peminjamanView, 'simalab')
router.register(r'templateForm', views.templateView, 'simalab')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-token-auth/', drf_views.obtain_auth_token, name='api-token-auth'),
]

