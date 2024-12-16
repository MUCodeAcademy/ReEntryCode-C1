# Intro to JavaScript Review Part 1

1. Demonstrate how you would connect your HTML file to your JavaScript file:

```html
<script src="JSFileName"></script>
```

2. What are the two ways to create a variable, and what's the difference between the two methods?
```js
let variableName = 3;
const secondVariable = "Something else";

// let is for variables that can change
// const is for variables that cannot change
```
3. Name the 5 primitive data types, and give examples:

- String: words/text ("this is a string")
- Number: any number (3)
- Boolean: true/false (true)
- Undefined: has no value, usually unintentional
`let undefinedVariable;`
- Null: has no value intentionally
`let nullVariable = null;`

4. Give an example of creating an array:
```js
const fruits = ["orange", "apple", "pear"];
```

5. How do you get the second item in that array?
```js
let appleIndex = fruits.indexOf("apple");
fruits[appleIndex];

const fruitTwo = fruits[1];
```

6. Give an example of creating an object: 
```js
const car = {
  color: "blue"
}
```

7. Assuming you have the object below, how do you access `user`'s dog's name?
```js
let user = {
  name: "Billy",
  petDog: {
    name: "Rusty",
  },
};

user.petDog.name;
```

8. How do you log `Your username is Frank` in this example?
```js
let userName = "Frank";
console.log("Your username is " + userName);
```

9. What is the difference between `==`, `===` and `!=`?

- `==` - equal to
- `===` - strictly equal to (type and value)
- `!=` - not equal to

10. Give an example of a `for` loop:
```js
const username = 10;
for (let i = 0; i <= username; i++) {
  console.log(i);
}
```

11. Give an example of a `while` loop:
```js
let whileVariable = 10;
while (whileVariable > 0) {
  console.log(whileVariable);
  whileVariable--;
}
```

12. How do you select an element with the id of `id1`?
```js
const div1 = document.getElementById("id1");
```

13. How do you change that element's text color?
```js
div1.style.color = "red";
```

14. How do you create and add a new `h1` element to the page?
```js
const newH1 = document.createElement("h1");
newH1.style.color = "purple";
document.body.append(newH1);
```