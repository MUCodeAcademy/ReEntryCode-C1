# Initial Steps:

1. Display something simple on each page, so that the routing can work correctly.
2. Set up routing to each page in the App.js
3. Make a menu at the top that the user can click on to go to the different pages.
4. Set up the UserContext.js with state and functions for the user to login and logout (don't forget to add the UserProvider to the index.js).
5. Let the user register and login on the Login page
6. Make a server.js file and connect it to the database.
7. When the user registers, put their username/password into the database.
    - Maybe we should check if that username already exists in the database, and if it does, tell them they need to pick a different username.
8. When the user logs in, see if they exist in the database, and if they do, check if their username/password matches.

Folder Structure:

- src
    - Context
        - UserContext.js
    - CSS
        - Chatroom.css
        - Login.css
        - Messages.css
        - Profile.css
    - Pages
        - Chatroom.js
        - Login.js
        - Messages.js
        - Profile.js
    - App.js
    - index.js
    - server.js