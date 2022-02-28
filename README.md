# Demo project
This project is a demo task project and its purpose to communicate with MongoDB server in order to fetch data based on POST request query.

## Project structure
```


+---config                   // All the system coniguration e.g DB 
|       configurations.js
|       index.js
|
+---src ----------------- Application source code
|   |   app.js ---------- App level configuration
|   |   routes.js ------- REST API endpoints
|   |   server.js ------- Bootstrap App server
|   |
|   +---controllers ----- A HTTP controller which communicate with service layer
|   |       fetch.data.controller.js
|   |
|   +---lib ------------- Libraries e.g MongoDB configuration
|   |       database.js
|   |
|   +---models ---------- MongoDB Model
|   |       record.model.js
|   |
|   +---services -------- A service layer which contain business logic of an App 
|   |       fetch.data.service.js 
|   |
|   \---utils ---------- All the utilities methods
|           index.js
|
\---tests ------------- All the mocha/chai integration tests
        route.test.js
|   .babelrc
|   .env
|   .gitignore
|   package-lock.json
|   package.json
|   README.md

```

## Setup/Installation
Install node modules
`` $ npm i ``

Configure DB configuration or environment variable
```
DATABASE_URL=
PORT=3001
NODE_ENV=development
```
To run integration test
```
$ npm run test
```

To run project
```
npm run watch
```

