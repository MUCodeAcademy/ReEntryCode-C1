# Module 4 Week 1 Review

## Databases

1. What steps (if any) need to be taken to store passwords in a database?

- Hash the password first.

```js
await argon2.hash(password);
```

2. How do you connect to the database from the server?

- Start MAMP, then in the server.js use the mysql library to create the connection with the database information.

```js
const connection = mysql.createConnection({
    // The database host, user, password, and name goes here
})

connection.connect();
```

3. How would you find all users based off a username in an SQL database? (Assume you have a users table with `id`, `username`, and `email` columns)

```SQL
SELECT * FROM users
WHERE username = theirUsername;
```

4. What are joins in SQL?

- Combines tables based on a shared column. Used for getting information from multiple tables.

```SQL
SELECT * FROM users
JOIN friends ON users.id = friends.id;
```

- A natural join will automatically combine the two tables without having to specify the shared columns.

```SQL
SELECT * FROM users
NATURAL JOIN friends;
```

5. In MySQL databases, what are the main different types to store values?

- VARCHAR - a string
- TEXT - paragraphs or long strings
- INT - integer (non-decimal numbers)
- DECIMAL - numbers with decimals
- DATE - dates in this format: `YYYY-MM-DD`

- There are many more, but these are the most common ones.

6. If you need to store user information, all the blog posts from a user, and all their friends, how would you structure that in SQL?

- User Table - user_id, username, password
- Blog Table - blog_id, likes, dislikes, comments, content, user_id
- Friends Table - friend_id, user_id, requests

7. How would you get all users from a database (assume there's a 'users' table) sorted in descending order from oldest to youngest?

```SQL
SELECT * FROM users
ORDER BY users.age DESC;
```

8. What is the difference between `HAVING someColumn < 10` and `WHERE someColumn < 10`?

- `WHERE` - Cannot be used with aggregate functions (SUM, AVG, COUNT, MIN, MAX).
- `HAVING` - Designed to be used with aggregate functions.

9. How would you add up all numbers in a column for all the rows that match the same criteria?

```SQL
SELECT SUM(users.score) FROM users;
```

10. Assuming you have a column name of `userID` but you wanted it to appear as `uID` in your output, how would you do that?

- You would use an alias

```SQL
SELECT userID AS uID FROM users;
```

## Express

1. How do you set up express?

- In the server.js file:

```js
// Import express
const express = require('express');
// Creates an instance of express
const app = express();
```

2. How do you set up SQL queries in an express application?

- Query the connection, then use the parenthesis to prevent a SQL injection attack.

```js
connection.query(
    "SELECT username FROM users WHERE username = (?)",
    [username]
)
```

3. In express how and why would you implement a middleware?

- Function that runs before you get to the URL. Create the function, then put the function in between the URL and the req, res function.

```js
function middleware(req, res, next) {
    // Code that you want to run
    next();
}

app.get("/login", middleware, (req, res) => {
    // Code that will run after the middleware function, once they get to /login
})
```

4. What is the `next()` function and why should you use it?

- Used in middleware functions to move on to the next function or the final route.

5. What are the different methods for the fetch requests, and when would you use each? (This is what you would put in the `method` section of the fetch request)

- `POST` - Sending data
- `GET` - Receiving data
- `PUT` - Creating new data
- `PATCH` - Changing data
- `DELETE` - Removing data

6. What arguments should you use for the functions in express routes and what are they used for?

- `req` - Request, holds information/data that's being sent to the server.
- `res` - Response, the information you want to give back.
- `next` - Lets middleware move on to the next step in the route.

7. How would you send a response?

- 400 codes are for errors, 200 codes are usually for successful requests

```js
res.send("Hello");
res.status(404).send("Not Found");
```

8. Will the following code cause any errors if a user went to that route? Explain why or why not.

```js
app.get("/route", (req, res) => {
    if (true) {
        res.send("Valid");
    }
    res.send("invalid");
});
```

- It will cause an error, because you can only send one response. To fix it, either add an `else` to the `if` statement. OR you can add a return in front of the first res.send().

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
    res.send("invalid");
});
```