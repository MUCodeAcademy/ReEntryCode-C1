# Rock Paper Scissors

We will be building a rock-paper-scissors game, where the user will select one of those three options, and then the computer will select one randomly as well. Then, it will compare the two and see who won. We will keep a tracker at the top to count the games played and the wins/losses/draws.

Here's what we'll need:

## HTML

1. Create divs for the wins, losses, ties, and games played.
2. Create buttons for the user to select rock, paper, or scissors.
3. Create a div that will display what the computer picked.
4. Create a div that will display whether the user won, lost, or tied.

## JavaScript

## Step One: Getting the Buttons to work:

* Select all three buttons.
* Attach event listeners to each of them and make sure those are working. This can be done with a simple function that just does a console log on click.

## Step Two: Have the computer randomly select one

* Build a function that that randomly selects a value "rock", "paper", or "scissors.
* Return that value from the function

## Step Three: Make the buttons do different things

* Refactor the event listeners for the buttons to pass in a variable (or pull the value from elsewhere in the html). 
* Based off the button clicked put a message in the page as to which button you clicked. This can be a div somewhere saying: "You chose rock!" or whatever other thing you prefer.
* Take the value returned from the AI rock paper scissors function and log that onto the screen as well.

## Step Four: Finishing Touches

* Now you have a working version of Rock Paper Scissors for selecting items, but you have to visually check to see who won. 
* Compare your choice to the computers choice and add a message of who won the game or if it was a tie.
* Add code to keep track of not only what the game count is, but also what your current wins losses and ties are. 

For the CSS, feel free to add whatever styling you'd like.