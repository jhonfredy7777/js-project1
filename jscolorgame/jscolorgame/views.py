from django.shortcuts import render


#views

def home_view(request):
    return render(request,"index.html",{})