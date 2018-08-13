from django.conf.urls import url
from django.contrib import admin
from django.conf.urls import include
from . import views
print 'cwbhclbwaibclue'
urlpatterns = [
    url(r'^$', views.render_index, name='index'),
    url(r'^$upload_me', views.upload, name='upload'),

]