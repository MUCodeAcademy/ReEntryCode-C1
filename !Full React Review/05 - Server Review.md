## API Creation and Express

1. How do you set up express?

2. How do you set up SQL queries in an express application?

3. In express how and why would you implement a middleware?

4. What is the `next()` function and why should you use it?

5. What are the main http verbs and when would you use each?

6. What function arguments are available to Express JS route handlers / middleware and what are they?

7. How would you set a status and send a response?

8. Will the following code cause any errors if a user went to that route? Explain why or why not.

```js
app.get("/route", (req, res) => {
    if (true) {
        res.send("Valid");
    }
    res.send("invalid");
});
```