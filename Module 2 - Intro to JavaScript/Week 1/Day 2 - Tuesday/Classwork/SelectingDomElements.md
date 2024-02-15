06
# Changing DOM Elements

First, select the element. There are a several functions you can use to do so, depending on how your HTML is set up.

```js
// Get an element by its id
let div1 = document.getElementById("divId");
// Get all elements with a certain class (puts them in an array)
let div2 = document.getElementsByClassName("divClass");
// Get all elements with a certain tag (puts them in an array)
let div3 = document.getElementsByTagName("div");
// Can also use querySelector for a more generic selector
let div4 = document.querySelector(".className"); // gets the first element with this class
let div5 = document.querySelector("#id"); // gets the first element with this id
let div6 = document.querySelector("div"); // gets the first div on the page
let div7 = document.querySelectorAll("div"); // gets ALL the divs on the page and puts them in an array
```

I usually use getElementById, just make sure you have an id attached to the element in the HTML you're trying to get.

Next, you can change, add, or remove elements on the page.

If you wanted to change an element on the page, it would look like this:

```js
// Get the element first
let div1 = document.getElementById("divId");
// Change whatever you want
div1.style.backgroundColor = "red";
div1.style.border = "2px solid black";
div1.style.width = "200px";
div1.style.height = "200px";
div1.innerHTML = "This text will be inside the div";
```

If you need to make a new element to put on the page, there's a few more steps:

```js
// Create the element (in this case, we're making a div)
let newDiv = document.createElement("div");
// Change whatever you want
newDiv.style.backgroundColor = "blue";
newDiv.style.width = "100px";
newDiv.style.height = "100px";
// You must add it to the page at the end
document.body.append(newDiv);
```

You can also remove elements on the page if you need to:

```js
let div = document.getElementById("divId");
// Using the remove() function on the div simply removes it, and that's all you need to do.
div.remove();
```