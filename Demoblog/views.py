from django.http import HttpResponse

def about(request):
    return HttpResponse("we love django")

def homepage(request):
    return HttpResponse("This is homepage...")
