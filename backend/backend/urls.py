from django.urls import path, include

urlpatterns = [
    path('api/', include('table_api.urls')),
]