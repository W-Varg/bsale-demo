from django.shortcuts import render
from apps.models import Category, Product
from rest_framework import viewsets
from apps.serializers import CategorySerializer, ProductSerializer


def index(request):
    return render(request, 'index.html',)


class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows get Categories.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows get Categories.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
