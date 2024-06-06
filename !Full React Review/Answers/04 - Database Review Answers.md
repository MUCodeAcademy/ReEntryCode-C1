# Review Week 1

## Databases

1. What steps (if any) need to be taken to store passwords in a database?

- Hash the password:

```js
// give it the password and the salt rounds (how many times it runs the encryption)
bcrypt.hashSync(password, 10);
```

2. How would you find all users based off a username in an SQL database? (Assume you have a users table with `id`, `username`, and `email` columns)

`SELECT * FROM users WHERE username = ?`, [username]

3. What are joins in SQL?

- Combines two or more tables that have a shared column.

```sql
SELECT * FROM users
JOIN blog ON users.user_id = blog.user_id;
```

4. If you need to store user information, all the blog posts from a user, and all their friends, how would you structure that in SQL?

- 3 tables: users table, blog table, and friends table.

5. How would you get all users from a database (assume there's a 'users' table) sorted in descending order from oldest to youngest?

`SELECT * FROM users ORDER BY birthday DESC`

6. What is the difference between `HAVING someColumn < 10` and `WHERE someColumn < 10`?

- HAVING is used for aggregate functions - aggregate functions are the math functions (COUNT, AVG, SUM, MIN, MAX). WHERE cannot be used with these, or you get an error.

```sql
SELECT AVG(money) FROM sales
HAVING money > 10;
```

7. How would you add up all numbers in a column for all the rows that match the same criteria?

`SELECT SUM(columnName) FROM tableName`

8. Assuming you have a column name of `userID` but you wanted it to appear as `uID` in your output, how would you do that?

- You would use an alias:

`SELECT userID AS uID FROM users`