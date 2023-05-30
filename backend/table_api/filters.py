class TableFilter:
    @staticmethod
    def filter(params, queryset):
        column = params.get('column')
        sort = params.get('sort')
        query = params.get('query')

        if column and sort and query:
            lookup = '__'.join([params.get('column'), params.get('sort')])
            return queryset.filter(**{lookup: params.get('query')})

        return queryset
