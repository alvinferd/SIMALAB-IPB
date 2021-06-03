from django.shortcuts import render

# directory /login/ bakal akses file login.html di templates
def login(request):
	return render(request, 'login.html')