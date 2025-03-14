# Database Design

For SQL databases, we need to think about how we want to categorize and group information. For example, if you're making a social meda app like Facebook, you probably want to store each user and their corresponding data like profile picture, biography, username, etc. In a database, that would mean you create a `users` table, and each piece of information would be stored in a column in that table - a `profile_picture`, `biography`, and `username` column. It would look like this:

| users           |           |          |        
| --------------- | --------- | -------- |
| profile_picture | biography | username |

For an example, let's say we're building a database for our store app. Think about how you could design interconnected tables. We're going to start basic with only the following needs (in no particular order):
