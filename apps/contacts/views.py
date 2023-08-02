from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

import requests

from .models import Contact
from django.core.mail import send_mail

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
        data = self.request.data

        name = data['name']
        email = data['email']
        subject = data['subject']
        message = data['message']
        phone = data['phone']

        try:
            send_mail(
                subject, 
                'New Client Request: '
                + '\n\nName: ' + name 
                + '\nEmail: ' + email
                + '\n\nMessage:\n' + message
                + '\nPhone: ' + phone,
                'zanthonygg@gmail.com',
                ['zanthonygg@gmail.com'],
                fail_silently=False
            )

            Contact.objects.create(
                name=name,
                email=email,
                phone=phone,
                subject=subject,
                message=message,
            )

            return Response({'success': 'Message sent successfully'})
        except:
            return Response({'error': 'Message not sent'})