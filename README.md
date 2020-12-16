How to deploy: 

```sh
$ docker-compose up
```

SQL:

- Open http://localhost:8080/ and login (credentials in docker-compose.yaml)
- Add postgres server (credentials in docker-compose.yaml)
- Create database `dev_farpost_task`
- Execute SQL: `CREATE EXTENSION postgis;` -> schema.sql -> 6.sql -> 7.sql -> 8.sql -> 9.sql

Backend:

```sh
$ npm install
```

For local dev:
- Edit database connection in config/env/local.json

For production: 
- Edit database connection in config/env/production.json

If u use Windows, change scripts in package.json:
```
"start": "SET NODE_ENV=production & node bin/www",
"dev": "SET NODE_ENV=local & nodemon bin/www"
```

Run project dev: `run dev`

Run project production: `npm run start`

Tested on:
```
Windows 10 x64
Node.js v12.16.1
Chrome 87.0.4280.88
```