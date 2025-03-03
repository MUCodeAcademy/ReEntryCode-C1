# Review Module 5 Week 3

## Passport and Authentication

1. What is a cookie?

    - Stores data in the browser. Set a time limit (must be less than 400 days).

2. What is a JWT?

    - JSON Web Token, basically a more secure cookie. There's a secret key that will make sure the users are authenticated, and the data might be encrypted.

3. Explain the differences and benefits of cookies over JWT and vice versa.

    - JWTs are more secure.
    - Cookies are easier to implement.

4. Why would you (or not) want to allow for a user to log in via Google, GitHub, Facebook, etc. on your application?

    Advantages:
        - You use Google's code to sign in, instead your own.
        - You don't need a server.
        - The user doesn't need to make a new account for your own website.
    Disadvantages: 
        - You don't have complete customization/control over collecting user information (like analytics).
        - If you require users to sign up with one of those options, and they don't have accounts for any of them, then they can't sign up.


## Sockets

1. What are sockets?

    - Allows users to connect and send information to each other in real time.

2. What's the general pattern for creating websockets?

    - Define some events on the server that will run when that event happens.
    - On the front-end, trigger those events when a user does something.
    - The server will send some information back when an event happens.

3. How would you add sockets to a React application?

    - Import socket.io and socket.io-client
    - Initialize sockets on the server