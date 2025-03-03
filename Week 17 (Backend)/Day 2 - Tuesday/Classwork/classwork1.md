# Classwork

- Set up a very very simple app that allows you to access the `/` page and sends a `hello world` message.
- Now redirect any route that isn't to `/` to the `/` url.
- So now we want to be able to get all the posts from an API by the user ID. (We're working with non databases currently so let's pretend we have it in a database)
  1. Set up a route that allows for a userID param
  2. Using the placeholder.JSON, when a person calls `/users/5` return an array of only the posts from that user.