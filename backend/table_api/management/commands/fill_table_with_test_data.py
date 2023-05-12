from random import randint

from django.core.management import BaseCommand
from table_api.models import TableFields


class Command(BaseCommand):

    def handle(self, *args, **options):
        test_data = []
        for i in range(150):
            test_data.append(
                TableFields(
                    name='test_name {0}'.format(i),
                    quantity=i*randint(1, 9),
                    distance='{0}.{1}'.format(randint(1, 999), randint(1, 999))
                )
            )
        TableFields.objects.bulk_create(test_data)
