from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegisterSerializer


@api_view(["POST"])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User created successfully"})
    return Response(serializer.errors, status=400)