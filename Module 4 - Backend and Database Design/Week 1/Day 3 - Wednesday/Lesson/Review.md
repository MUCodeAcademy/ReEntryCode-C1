# Module 4 Week 1 Review

## Databases

1. What steps (if any) need to be taken to store passwords in a database?

2. How do you connect to the databse from the server?

3. How would you find all users based off a username in an SQL database? (Assume you have a users table with `id`, `username`, and `email` columns)

4. What are joins in SQL?

5. In MySQL databases, what are the main different types to store values?

6. If you need to store user information, all the blog posts from a user, and all their friends, how would you structure that in SQL?

7. How would you get all users from a database (assume there's a 'users' table) sorted in descending order from oldest to youngest?

8. What is the difference between `HAVING someColumn < 10` and `WHERE someColumn <10`?

9. How would you add up all numbers in a column for all the rows that match the same criteria?

10. Assuming you have a column name of `userID` but you wanted it to appear as `uID` in your output, how would you do that?

## Express

1. How do you set up express?

2. How do you set up SQL queries in an express application?

3. In express how and why would you implement a middleware?

4. What is the `next()` function and why should you use it?

5. What are the different methods for the fetch requests, and when would you use each? (This is what you would put in the `method` section of the fetch request)

6. What arguments should you use for the functions in express routes and what are they used for?

7. How would you send a response?

8. Will the following code cause any errors if a user went to that route? Explain why or why not.

```js
app.get("/route", (req, res) => {
    if (true) {
        res.send("Valid");
    }
    res.send("invalid");
});
```