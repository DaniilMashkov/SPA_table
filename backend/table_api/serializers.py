from rest_framework import serializers
from table_api.models import TableFields


class TableFieldsSerializer(serializers.ModelSerializer):

    class Meta:
        model = TableFields
        fields = '__all__'
