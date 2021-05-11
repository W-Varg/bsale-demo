from django.shortcuts import render
from apps.models import Category, Product
from rest_framework import viewsets, status, generics, mixins
from rest_framework.views import APIView
from apps.serializers import CategorySerializer, ProductSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from django_filters import rest_framework as filters


def index(request):
    """ Render index html for get data from API """
    return render(request, 'index.html',)


class ProductFilter(filters.FilterSet):
    """
    FILTER for get products for name contains and get price
    """
    name = filters.CharFilter(lookup_expr='icontains')
    min_price = filters.NumberFilter(field_name="price", lookup_expr='gte')
    max_price = filters.NumberFilter(field_name="price", lookup_expr='lte')

    class Meta:
        model = Product
        fields = ['category', 'name']


class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows get Categories.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    ordering = ['id']


class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows get Products.
    """
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ProductFilter
    ordering = ['id']


# class MyPostViewSet(viewsets.BaseModelViewSet):
class MyPostViewSet(viewsets.GenericViewSet):
    """ Custom viewset for filter sending post data from FRON-END"""

    def post(self, request, *args, **kwargs):
        queryset = self.queryset
        filter_params = request.DATA or request.GET
        if filter_params:
            queryfilter = self.filter_class(filter_params, queryset=queryset)
            queryset = queryfilter.qs
        page = self.paginate_queryset(queryset)
        serializer = self.get_pagination_serializer(page)
        return Response(serializer.data)
