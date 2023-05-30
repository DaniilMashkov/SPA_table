from rest_framework.test import APITestCase
from rest_framework import status
from django.core.management import call_command


class TableFieldsTestCase(APITestCase):

    def setUp(self) -> None:
        call_command('fill_table_with_test_data')

    def test_get_table(self):
        response = self.client.get('api/table/?page=1&column=name&sort=contain&query=15')
        self.assertEqual(response.status_code, status.HTTP_200_OK)