## So Now we want to send data!

### Generic Sending of Data

- Express can't easily handle posted data without some sort of help.
- The accepted practice is to use `express.json()` this will allow the express `.post` route to actually access the body of the request as a JSON file
- From there it's as simple as declaring it as middleware `app.use(express.json())`. That allows access to the json object being sent to the server!
- Any time you're using a .post request it's as simple as pulling it from `req.body` so let's say you posted the following JSON file to a .post route:
  ```javascript
  {
      "username": "John",
      "password": "Smith"
  }
  ```
  If you wanted to get the username key you can simply log it like: `console.log(req.body.username)`

## What about passwords?

- So in the above example we're sending a JSON object with a `username` and `password`. It's being sent as plain text. Is this a bad thing, if so why/why not?
