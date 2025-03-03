# ENV Variables

Most times you want to protect your database information from being leaked. One way to do that is via a package such as `dotenv`. In order to use it, you can create a `.env` file (has to be that name and be at the same level as your main server file):

## .env (in your .gitignore)

```
DB_HOST=localhost
DB_USER=luce
DB_PORT=3000
DB_PASSWORD=verysecretnoleakpls
DB_DATABASE=store
```

They don't need to be named like that, but it's a very common naming practice.

Then as the first line in your server file, you need:

```javascript
require("dotenv").config();
```

Then you can access any of your config variables (for the example above) with things like `process.env.VITE_DB_HOST`.
