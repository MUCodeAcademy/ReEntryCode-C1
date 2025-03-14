# Time to connect to the SQL database

- To set up a single use connection you can simply use the following code:

  ```javascript
  let mysql = require("mysql");
  let connection = mysql.createConnection({
    host: process.env.DB_HOST, // Where the database is running
    user: process.env.DB_USER, // Your username for the database
    password: process.env.DB_PASSWORD, // Your password (if there is one)
    database: process.env.DB_DATABASE, // The name of your database schema
  });

  connection.connect();

  connection.query(
    "SELECT * FROM todos WHERE user_id = ? AND completed = ?",
    [userId, 1],
    function (err, rows, fields) {
      if (err) throw err;

      console.log("The first todo is:", rows[0]);
    }
  );

  connection.end();

  // The question mark above protects from SQL Injection
  // Without, lets say req.params.userId = "5; DELETE FROM POSTS WHERE 1=1;"
  // That would result in:
  ```

  ```SQL
  SELECT * FROM todos WHERE user_id = 5 AND completed = 1;
  ```

- Either way, once you have the connection set up it's as simple as writing the queries.