# Chatroom

## Functionality: 

- Login/register screen
- Write/send/display messages to either the entire room or a specific person
- List of people in the chatroom (active/inactive symbol)
- Thumb up/Thumb down messages
- Ranking people according to how many thumbs up/down they have
- Remove yourself/other people in the chatroom
- Block users
- Get the users location and people in a radius and suggest those users

## Files:

Pages Folder - LoginPage.js, Profile.js, Chatroom.js, Messages.js
Context Folder - UserContext.js
CSS Folder with files for potentially each page

server.js - connect to the database/websockets
.env - for the database variables

## Database:

Users table: user_id, username, password

Blocked Users table: blocked_user_id, blocker_user_id

Rankings table: user_id, thumbs_up_count, thumbs_down_count

<!-- If we want to keep track of message history, we would want a messages table -->
Messages table: message_id, sender_id, receiver_id, content, timestamp, read