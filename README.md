# api-manager-and-test

An api manager using Fastify, Vite, MariaDB on Docker.
We will manage some books in this project.

## Prerequisite for the project

- Docker
- Node.js
- GIT
- Database manager (like DBeaver)

## How to start and initiate it

1. git clone 'the repository URL'

```
    git clone https://github.com/20HDMI04/api-manager-and-test.git
```

2. npm install in each folder to get the dependecies

```
    npm install
```

3. adding the .env folder to /fastify-backend and /docker-mariadb
   the **/fastify-backend/.env** structure

```
    DATABASE_URL="db_service://*hostname*:*password*@*ip*:*socket*/*your db name*"
    DBNAME=**your db name**
    DBPASSWORD=**your db password**
```

the **/docker-mariadb/.env** structure

```
    DBNAME=**your db name**
    DBPASSWORD=**your db password**
```

4. RUN the db with docker

```
**in the /docker-mariadb directory**
    docker compose up
```

5. prisma **migration**

```
    npx prisma migrate dev --name **your migration name**
```

6. prisma db **seed**

```
    npx prisma db seed
```

to reset the db you can run:

```
    npx run reset
```

OR

```
    prisma db push --force-reset
```

7. RUN the backend and the frontend

```
**in the /fastify-backend and the /frontend directory**
    npm run dev
```
