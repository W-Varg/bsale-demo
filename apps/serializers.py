from rest_framework import serializers
from .models import Category, Product


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    category_id = serializers.IntegerField(required=False)

    class Meta:
        model = Product
        fields = ['name', 'url_image', 'price', 'discount', 'category_id']
