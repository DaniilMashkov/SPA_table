import django
import os
import pathlib
path = pathlib.Path(__file__).parents[1]
os.environ['DJANGO_SETTINGS_MODULE'] = 'backend.settings'
# print(os.environ['DJANGO_SETTINGS_MODULE'])
django.setup()
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from django.core.management import call_command


class TableFieldsTestCase(APITestCase):

    def setUp(self) -> None:
        super().setUp()
        call_command('migrate')
        call_command('fill_table_with_test_data')

    def test_get_table(self):
        response = self.client.get('/api/table/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 150)

        response = self.client.get('/api/table/', {'page': 1, 'column': 'name', 'sort': 'contains', 'query': 149})
        self.assertEqual(response.json()['results'][0]['name'], 'test_name 149')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
