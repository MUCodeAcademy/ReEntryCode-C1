# Websites I use

## HTML:

- https://developer.mozilla.org/en-US/docs/Web/HTML
    - You can either search for HTML elements at the top of the page or you can scroll through the side bar on the left
- https://www.w3schools.com/html
    - Scroll through the bar on the left to look at different elements

## CSS:
- https://developer.mozilla.org/en-US/docs/Web/CSS

- https://www.w3schools.com/css

## JavaScript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
    - You can either search for JavaScript functions at the top of the page or you can scroll through the side bar on the left. There are also tutorials if you want to look at some of those.
- https://www.w3schools.com/js

## Regex (Regular Expressions)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet

## React
- https://react.dev
    - There's also some stuff on the mozilla docs, but there's not as much information
    (https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
    - w3schools also has one

## SQL
- https://www.w3schools.com/sql

## Specific package documentation
- For most packages they're hosted on their own websites - for example, emotion is at https://emotion.sh/docs/introduction
- However, you can also check out their npm page and see if they have their documentation on there - for example, the emotion npm page: https://www.npmjs.com/package/@emotion/react

## Other resources I use
- StackOverflow is a pretty popular forum for people asking programming questions: https://stackoverflow.com 
- I use ChatGPT quite a bit: https://chat.openai.com
- You can either ask it to write some code for a certain function, or copy/paste your code in there to see if it can fix the errors.

## IMPORTANT THINGS TO KEEP IN MIND ABOUT CHATGPT
- IT IS NOT ALWAYS 100% CORRECT. ChatGPT (in it's current iteration, GPT-4o), sometimes 'hallucinates' and just makes things up. Do not take everything it says as completely factual.
- MAKE SURE YOU UNDERSTAND THE CODE. As you're learning, nothing is worse than copy and pasting code from other sources if you don't understand it. If it gives you some code that you don't know, you can ask it to explain the code or try Googling it. This also applies to other code you copy from places like StackOverflow.
- It's not the best programmer. ChatGPT will almost certainly be a better programmer than you are while you're learning, but the more you use it, the more you'll realize that it's good at writing simple code, but not so good at writing more complex code. You will almost certainly run into problems with scalability and repetitive code.

<!-- Try running git pull first -->
git pull

If it tell you the connection was reset, try it again and it should work.

If it tells you to save or stash your changes first, follow the steps below:

<!-- adds all files to commit -->
git add *

<!-- saves your code to the stash so you can retrieve it later -->
git stash

<!-- gets new changes from GitHub -->
git pull

<!-- retrieves everything in your stash -->
git stash apply

## MAMP ERROR FIXING

<!-- This one doesn't work if there's stuff in data directory (i.e. there's an existing database) -->
mysqld --initialize-insecure --basedir="C:\MAMP\bin\mysql" --datadir="C:\MAMP\db\mysql"

<!-- Starts the server -->
mysqld --port=3306 --datadir="C:\MAMP\db\mysql"

open command prompt (search cmd in search bar)
cd ..
cd ..
cd MAMP\bin\mysql\bin
mysqld --port=3306 --datadir="C:\MAMP\db\mysql"