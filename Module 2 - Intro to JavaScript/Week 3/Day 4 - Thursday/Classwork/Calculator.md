# Building a Calculator

- Have a div that functions as the input for the calculator.
- Set up number buttons for 0-9
- Set up action buttons for +, -, \*, /, power, CE, and =
- When a user clicks a number, add that to the screen (like a calculator).
- When a user clicks an action button, check for the following:
  - If there's nothing in memory and they didn't press =, store the current value in memory and then clear the screen to allow them to input the next number.
  - If something is in memory, perform the previous action and display that value on the screen. When they press a new button, clear the screen to allow them to start typing a new number.
  - If '=' is pressed, show the value of the last action pressed.
  - If 'C' is pressed, clear out memory and start from scratch.
- BONUS - Allow a user to push either the numpad or the actual numbers on the keyboard to use the calculator if they don't want to click buttons.

There's an example of what it might look like on calculator.png