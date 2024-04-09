# Time to connect to the SQL database

- To set up a single use connection you can simply use the following code:

  ```javascript
  let mysql = require("mysql");
  let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  connection.connect();

  connection.query(
    "SELECT * from todos where user_id = ? AND completed = ?",
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
  SELECT * FROM POSTS WHERE userId = 5; DELETE FROM POSTS WHERE 1=1;
  ```

- Either way, once you have the connection set up it's as simple as writing the queries. The mysql package automatically protects against SQL injection when used properly. For more information let's check out: [The API Docs](https://github.com/mysqljs/mysql)!

### For PostGres Instructions, You can access information about a package [here](https://node-postgres.com/)
