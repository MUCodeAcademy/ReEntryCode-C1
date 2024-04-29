# ENV Variables

Most times you want to protect passwords and such you use to connect to a database from being leaked. One way to do that is via a package such as `dotenv` In order to use it, you can create a `.env` file (has to be that name and be at the same level as your main server file):

## .env (in your .gitignore)

```
DB_HOST = HOSTNAME
DB_PORT = PORT_NUMBER
DB_USER = DBUSER_NAME
```

Then as the first line in your server file, you need:

```javascript
require("dotenv").config();
```

Then you can access any of your config variables (for the example above) with things like `process.env.DB_HOST`. An important note is that you can ignore that line if you've already setup babel and webpack to use dotenv. You do still need the actual `.env` file and its contents though.
