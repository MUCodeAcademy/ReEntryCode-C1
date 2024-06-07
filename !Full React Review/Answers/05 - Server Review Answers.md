## API Creation and Express

1. How do you set up express?

```js
// Imports express
const express = require('express');

// Creates the express server
const app = express();

// (Optional, but recommended)
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(cookieParser());
```

2. How do you set up SQL queries in an express application?

```js
const connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.query();
```

3. In express how and why would you implement a middleware?

- Put the middleware function in between the URL and the req, res. It will run that function before it finishes the route. It's mainly used for stuff like authentication.

```js
app.post('/register', middlewareFunction, (req, res) => {

});
```

4. What is the `next()` function and why should you use it?

- next() is used in the middleware function; if you don't include it, it will not continue the route and will freeze the server.

5. What are the main request methods and when would you use each?

- POST: When you want to send data
- GET: When you want to receive data
- DELETE: When you want to delete data 
- PUT: When you want to replace entire data
- PATCH: When you want to replce partial data

6. What function arguments are available to Express JS route handlers / middleware and what are they?

- req: the request object, contains information about the request being sent to the server from the page
- res: the response object, sends a response from the server
- next: see #4

7. How would you set a status and send a response?

`res.status(200).send("Successful")`
`res.status(300).res("Issues with the URL")`
`res.status(404).send("Not found")`
`res.status(500).res("General server error")`

8. Will the following code cause any errors if a user went to that route? Explain why or why not.

```js
app.get("/route", (req, res) => {
    if (true) {
        res.send("Valid");
    }
    res.send("invalid");
});
```

- You can only send one response per route. Here are some fixes:

```js
app.get("/route", (req, res) => {
    if (true) {
        res.send("Valid");
    } else {
        res.send("invalid");
    }
});
```

```js
app.get("/route", (req, res) => {
    if (true) {
        return res.send("Valid");
    }
    return res.send("invalid");
});
```