from table_api.views import TableFieldsListAPIView
from django.urls import path

urlpatterns = [
    path('table/', TableFieldsListAPIView.as_view()),
]
