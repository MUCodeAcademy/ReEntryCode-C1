## Passwords.

Here's a scenario: you're on a site and you request a password reset. The website then just sends you your current password. If this happens, you should NEVER use that password again (or the site if you can help it!).

- Best practice (honestly, only practice at this point) is to store passwords in your database as hashed values.
- You can't avoid sending the password to the server as plaintext. You could hash it on the front-end, but that's pointless as the end user has access to all of the front-end code anyway.

### What is hashing?

- Hashing is basically just taking a value (in this case a password) and transforming it into a random set of characters using an algorithm.
- Hashing is one way and one way only. Once it's changed, you can't change it back. The beauty of this is that if you take a set value it will always change to the same value.
- Why is this secure? Well, the problem is that it's only secure for a set amount of time longer. How long exactly is tough to say. Basically, any hash can be cracked, but because you're trying to reverse engineer it, the amount of time it would require to get it right is so ludicrous it just doesn't make sense unless you have access to a super computer and absolutely NEED the value.
- Because of this, passwords are converted to a hashed value and then stored in the database. When a plain text password is provided via a login request or equivalent, the order of operations is as follows:
  1. Plain text password is taken from `req` and turned into a hashed value.
  2. User with the username provided is found in the database and the saved hashed password is retrieved.
  3. The two hashed values (one from the DB one form the req) are compared and depending on if they equal or not, the user is allowed access or a wrong password/username message is sent to the front end.

## How to hash

- The `bcryptjs` package is one of the preferred methods for hashing. It's slower than the built in `crypto` package in node but is more secure (which is why it's slower). `npm install bcryptjs`
- This can be done synchronously or asynchronously depending on your needs. See the docs for more info: https://www.npmjs.com/package/bcryptjs
- After installing and requiring the bcrypt package, hashing is incredibly straight forward.
- Bcrypt uses salt rounds for more complex hashing
  - This runs the encryption 2^x times, where x is the amount of salt rounds.
  - Salt rounds increase the time needed to hash but also make it more difficulty to crack.
  - Every increase in salt rounds by 1 DOUBLES the time needed to hash. It'll only be in ms but it can add up.
- Steps for synchronous hashing (why synchronous or asynchronous?):
  ```javascript
  const bcrypt = require("bcryptjs");
  const saltRounds = 10;
  let hash = bcrypt.hashSync(plainTextPassword, saltRounds);
  ```
  That's it!
- Then you can simply compare the two with:
  ```javascript
  bcrypt.compareSync(plainTextPassword, hashedValuedFromDB);
  ```
  That will then be true or false depending on if they match!

Play around with an example [here](https://bcrypt-generator.com/)!

One thing to note is that while the above examples are using the `compareSync` and `hashSync`, the preferred method would be to use async variants. So the hash above could be:

```javascript
let hash = await bcrypt.hash(plainTextPassword, saltRounds);
```
