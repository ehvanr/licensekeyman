License Key Manager
=========

The purpose of this application is to provide a self hosted server that manages application license keys for your application(s).  It also provides a client API that allows your application to register itself to the database.

Import The SQL Database:
------------------------

Import the SQL database into either MySQL or MariaDB using the provided database.sql file. By default, the application uses the root user and 'testpassword' as the password.

Download Dependencies:
----------------------

	npm install

Start The API Server:
----------------------

	node app.js

Reset The Database:
---------------

You can either drop the DB completely and re-add it.  Or you can delete the table values and reset the AUTO\_INCREMENT values across the tables.

Open The Management Console:
----------------------------

To open the management console, navigate to the managementconsole folder and just double click on index.html


Run The Sample Application:
---------------------------

To compile, navigate to the javalib folder and execute:

    javac -cp .:lib/* *.java

And then to run:

    java -cp .:lib/* SampleApplication
