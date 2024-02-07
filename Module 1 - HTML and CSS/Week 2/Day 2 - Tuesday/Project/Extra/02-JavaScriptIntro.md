## JavaScript Introduction

JavaScript will enable your website to become interactive and dynamic. This section will guide you through implementing JavaScript features in your recipe project. You'll learn how to manipulate the Document Object Model (DOM), handle user input and events, and dynamically update the content of your webpage.

It wouldn't be a bad idea to refer to look at Mozilla's tutorial first: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction

### File creation and linking

1. Create a JavaScript file.
    - Create a new file named script.js in the same folder as your HTML/CSS files. To link the JavaScript file to the HTML, put this in your HTML document just before the closing </body> tag: 
    ```html
    <script src="script.js"></script>
    ```
    Make sure it's in the same folder as your HTML/CSS files.
2. If you want to check that it's linked correctly, you can simply add an alert in the script.js file like this:
    ```js
    alert("JavaScript is working!");
    ```
    When you run the HTML file, it should pop this alert up on the page.

### Dynamic Information

Here's the MDN Documentation on arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

We're going to use an array to store our recipes and then add those to the document.

1. First, we need to make an array to store our recipes and the descriptions in the JavaScript file.
```js
// An array is basically just a list. We're going to store the recipe names in an array called recipes.
const recipes = [
    "Recipe 1",
    "Recipe 2",
    // Add more recipes following this pattern if you want
]
```

2. Now we need to loop through each name, and display it to the screen. For the example, let's say I have a <div> with an id="recipe-list"
```js
// getElementById will select my div with an id="recipe-list". We're then storing it in a variable called recipeListDiv so that we can add text to it later.
const recipeListDiv = document.getElementById("recipe-list");

// This will loop through the recipes, and do something for each one.
recipes.forEach(recipe => {
    // Create a new paragraph element for each recipe.
    const p = document.createElement("p");
    // Set the text of the paragraph to the recipe name.
    p.textContent = recipe;
    // Append the paragraph to the recipe list div.
    recipeListDiv.appendChild(p);
});
```

That should display all of our recipes in our recipes array to the page. If you're following this code exactly, make sure you have a div with an id="recipe-list" in your HTML.

### Event Listeners

Here's the MDN Documentation on event listeners: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

We're going to use event listeners to show a detailed view of the recipe when the user clicks on it.

1. First you need to get the element that the user clicks on from the HTML. Assuming that you have a button the user can click on to view the recipe, this is generally what the JavaScript code will look like.
```js
// This querySelector gets an element from the document. In this case, we're just selecting our button. If we have multiple buttons, it will select all of them.
// We're then storing it in a variable called 'btn' that we can use later.
const btn = document.querySelector('button');
```
2. Now, we need to attach an event listener to it, so that it can wait for the user to take an action.
```js
// Adds an event listener that will wait for the user to click on it.
btn.addEventListener("click", () => {
// Once the user clicks on the button, we create a new div.
const newDiv = document.createElement("div");
// Then we create some text for the recipe information.
const newContent = document.createTextNode("This is the recipe information.");
// Now we put the text in the div.
newDiv.appendChild(newContent);
// Finally we have to put the new div into the document
// This queryselector selects an element with the class 'recipe1'
const currentDiv = document.querySelector(".recipe1");
// Inserts the newDiv before the currentDiv
document.body.insertBefore(newDiv, currentDiv);
});
```

In general, this code will select the button from the HTML, and add an event listener to it. It will wait for the user to click on it, then it will create a new div with some new text, and add it to a div with the class of recipe1.

**THIS WILL NOT WORK IF YOU HAVE MULTIPLE BUTTONS**: The query selector will select all of them, and put them into an array. If you have multiple buttons, I would recommend adding an id or a class to each one, and using querySelector to select the button with a specific class or id.

Now you should have some basic JavaScript functionality in your website. There are a ton of other things you can do with JavaScript, so try looking through the Mozilla documentation and add some more stuff!