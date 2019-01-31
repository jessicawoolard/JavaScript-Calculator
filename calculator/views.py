from django.shortcuts import render
from django.views.generic import TemplateView, View


class IndexView(TemplateView):
    template_name = 'index.html'
