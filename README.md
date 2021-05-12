# bsale-demo

This project is an example for bsale, this is a store base with card for show products, its has filter for name, category too paginate using Bootstrap for designs frondend and python with django in backend!

In this projec was used django in backend, django_restframework for created API and frond was used bootstrap v.5.0 for styles, too js native and some jquery too.

**[Repository Code](https://github.com/W-Varg/bsale-demo)** is in <https://github.com/W-Varg/bsale-demo>
**[Demo deployed ](https://demo-bsale.herokuapp.com)** this link <https://demo-bsale.herokuapp.com>

## Requirements
  1. python >= 3.8
  2. django >= 3.2
  3. mysql

## Initialization

clone the repository

```bash
git clone https://github.com/W-Varg/bsale-demo.git
```
## Installation requirements
Access to folder project an execute the next command for installer all packages for the project
 
```bash
pip install -r requirements.txt
```

The content requirements.txt file is

> asgiref ==3.3.4
autopep8 ==1.5.7
dj-database-url ==0.5.0
Django ==3.2.2
django-cors-headers ==3.7.0
django-filter ==2.4.0
django-heroku ==0.3.1
djangorestframework ==3.12.4
gunicorn ==20.1.0
Markdown ==3.3.4
mysqlclient ==2.0.3
psycopg2 ==2.8.6
pycodestyle ==2.7.0
pytz ==2021.1
sqlparse ==0.4.1
toml ==0.10.2
whitenoise ==5.2.0

## Set up a database

for this database we will use the default configuration of the repository, `bsale_test`.

This is already set up in this part of your `bsale/settings.py` file:


```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'bsale_test',
        'USER': 'bsale_test',
        'PASSWORD': 'bsale_test',
        'HOST': 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
        'PORT': '3306',
        'OPTIONS': {'sslmode': 'require'},
    }
}
```

## Starting the web server

In the directory we have the `manage.py` file (the `bsale-demo` directory). In the console, we can start the web server by running `python manage.py runserver`:

```
(myvenv) ~/bsale-demo$ python manage.py runserver
```


Now you need to check that your website is running. Open your browser and enter this address:

```
http://127.0.0.1:8000/
```

successfull, now you cand view the site and probe options, filter, paginate and search products.

To stop the web server, switch back to the window in which it's running and press CTRL+C - Control and C keys together (on Windows, you might have to press Ctrl+Break).

# CODE DOCUMENTATION
The project have the next struture
```
bsale-demo
├── manage.py
├── bsale
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── apps
│   ├── __init__.py
|   ├── static
|   |   ├──css
|   |   └──js
|   ├── templates
|   |   └──index.html
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── test.py
│   ├── urls.py
│   └── views.py
|
└── requirements.txt
└── Procfile
└── .env
```
### Description some files and folder
> **settings.py** this file content all configuration for the project, for example (frameworks apps, DATABASE CONNECTIONS,ALLOWED_HOSTS, MIDDLEWARE, LANGUAJE,etc)

> **apps folder** this folder content an apps for use for django framework, by default create into many files, for example (admin.py, apps.py, models.py, serializers.py, test.py, urls.py, views.py), this app was created for generate **API** for bsale-demo 

> **models.py** this file content models definition for this app, for example (category, product), in this file defined all models, each model will have fields and these fields will be reflected in the database when the migration is executed

> **serializers.py** this file is used for created class serializers for django_rest_framework,the serializers are classes that allow us to transform data from formats more typical of Django as objects that extend from Model or querysets, into formats more typical of the web environment such as JSON and XML, and allow us to do it in both directions.

> **urls.py** this file content the routes for this apps, this file receive request and this file calls some method defined in file views.py

> **views.py** this file content the logic, this file executed when call some request, for example (GET, POST, PUT, DELETE), too can return data on some template or none, in this file are defined two class CategoryViewSet and ProductViewSet, these two classes have class inheritances to make api work easier 

> **static folder** this folder content all files static for this apps, por example (css, js, .jpg, svg, etc)

> **apps.js** this file content all logic in frondend  for index.html file, in this file was use javascript native and jquery too. The render conten its separed for function, the this file for more details.

> **template folder** django used this folder for read files types *.html, the content this folder well used for render data from views.py, currents this folder has index.html

> **Index.html** In this file render all content related for this apps, has incrusted .js and .css from static folder, too have cdn for use bootstrap v5.0 and jquery.

<!--endsec-->
are you have doubts ??
my email is <kryshot05@gmail.com>, I can absolve you some questions