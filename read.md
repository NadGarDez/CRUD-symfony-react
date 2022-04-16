# CRUD React + Symfony
## Features

- Trips CRUD 
- Travelers CRUD 
- Create and Read reservations

## Tech
This is a personal project, however you are free to leave your contribution.
## Installation
### Software version
```sh
php --version
$ PHP 7.4.3 (cli) (built: Mar  2 2022 15:36:52)

$ node -v
v12.22.1

$ symfony -v
$ Symfony CLI version 5.4.7 (c) 2017-2022 Symfony SAS
```

### Dowload packages

```sh
$ cd [project_name]
$ yarn install
npm start 
$ composer install
```
### DB setup:

Please take a look at the .env file, uncomment and replace the content of the DATABASE_URL variable with your own database manager, version and credentials. 
```env
# DATABASE_URL="sqlite:///%kernel.project_dir%/var/data.db"
# DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7&charset=utf8mb4"
#DATABASE_URL="postgresql://symfony:ChangeMe@127.0.0.1:5432/app?serverVersion=13&charset=utf8"
#DATABASE_URL="mysql://user:pass@127.0.0.1:3306/db_name?serverVersion=mariadb-10.3.22"
```
After the above, it is only necessary to start the migration process. The database will be automatically created and configured without writing any amount of sql code.
```sh
$ php bin/console doctrine:migrations:migrate # the migration packages were installed in the previous part
```
Finaly we can to start the development server.
```sh
$ symfony server:start
$ yarn encore dev --watch # in other console instance
```

### DB Model
![login](../githubImages/db.png)



## Captures

![login](../githubImages/captura1.png)
![login](../githubImages/captura2.png)
![login](../githubImages/captura3.png)
![login](../githubImages/captura4.png)
![login](../githubImages/captura5.png)
![login](../githubImages/captura6.png)
![login](../githubImages/captura7.png)
![login](../githubImages/captura8.png)
![login](../githubImages/captura9.png)
![login](../githubImages/captura10.png)
![login](../githubImages/captura11.png)


## Environments
Only available for development environment



