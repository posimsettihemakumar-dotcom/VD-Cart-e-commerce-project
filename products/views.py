from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializers

@api_view(["GET","POST"])
def products(request):
    if request.method=="GET":
        all_products=Product.objects.all()
        serializers=ProductSerializers(all_products,many=True)
        return Response(serializers.data)
    serializer=ProductSerializers(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors,status=400)