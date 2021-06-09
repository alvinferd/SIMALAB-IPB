from django.shortcuts import render
from rest_framework import viewsets
from simalab.core.serializers import orangSerializer,MhsSerializer,adminlabSerializer,laborSerializer,kategoriSerializer,alatSerializer,submisiSerializer,peminjamanSerializer,templateSerializer
from simalab.core.models import User,Mahasiswa,AdminLab,Laboratorium,KategoriAlat,AlatLab,Form_Submisi,PeminjamanRuangan,TemplateForm

class orangView(viewsets.ModelViewSet):
    serializer_class = orangSerializer
    queryset = User.objects.all()

class MhsView(viewsets.ModelViewSet):
    serializer_class = MhsSerializer
    queryset = Mahasiswa.objects.all()

class adminView(viewsets.ModelViewSet):
    serializer_class = adminlabSerializer
    queryset = AdminLab.objects.all()

class labView(viewsets.ModelViewSet):
    serializer_class = laborSerializer
    queryset = Laboratorium.objects.all()

class kategoriView(viewsets.ModelViewSet):
    serializer_class = kategoriSerializer
    queryset = KategoriAlat.objects.all()

class alatView(viewsets.ModelViewSet):
    serializer_class = alatSerializer
    queryset = AlatLab.objects.all()

class submisiView(viewsets.ModelViewSet):
    serializer_class = submisiSerializer
    queryset = Form_Submisi.objects.all()

class peminjamanView(viewsets.ModelViewSet):
    serializer_class = peminjamanSerializer
    queryset = PeminjamanRuangan.objects.all()

class templateView(viewsets.ModelViewSet):
    serializer_class = templateSerializer
    queryset = TemplateForm.objects.all()
