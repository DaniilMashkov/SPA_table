from django.db import models


class TableFields(models.Model):
    date = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=50)
    quantity = models.IntegerField()
    distance = models.DecimalField(max_digits=10, decimal_places=3)

    class Meta:
        ordering = ['id']
