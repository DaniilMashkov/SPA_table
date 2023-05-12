from rest_framework import generics, response, status
from table_api.serializers import TableFields, TableFieldsSerializer
from table_api.paginator import MyPaginator
from table_api.filters import TableFilter


class TableFieldsListAPIView(generics.ListAPIView):
    serializer_class = TableFieldsSerializer
    pagination_class = MyPaginator

    def get(self, request):
        try:
            return super().get(request)
        except Exception as ex:
            return response.Response(
                {'err': ex},
                status.HTTP_404_NOT_FOUND,
                content_type='application/json')

    def get_queryset(self):
        return TableFilter.filter(self.request.query_params, TableFields.objects.all())
