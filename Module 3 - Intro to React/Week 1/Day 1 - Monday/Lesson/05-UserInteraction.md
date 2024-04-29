# Handling User Triggered Events

When you're building a site or application, it is important to know how to handle events triggered by the user. We've already talked about several of these (`click`, `mouseenter`, etc) previously. With React you can still use all of the same events but the implementation is slightly different. Let's take a look at a simple implementation both with traditional DOM manipulation as well as with React. First, let's assume we have a button that when clicked, we want to log the button's value to the console. Then we'll see how to keep track of user input and use it in some way.

## Button Click Event

### Traditional DOM

With traditional methods there are technically two ways to do it. The first method is the best practice, but there is another way to do it as well. With the first method it would look something like this:

```html
<button id="some-button" value="1">Click Me</button>
<script>
  document
    .getElementById("some-button")
    .addEventListener("click", clickHandler);

  function clickHandler(event) {
    console.log(event.target.value);
  }
</script>
```

That is what we're used to doing but there is another way to do it:

```html
<button id="some-button" value="1" onclick="clickHandler(event)">
  Click Me
</button>
<script>
  function clickHandler(event) {
    console.log(event.target.value);
  }
</script>
```

As you can see with the second option, it allows you to bypass the `addEventListener` in favor of adding it directly to the element itself. While this isn't the way you typically want to do it, that functionality is what you will use for React.

### React

Using the above as a template, you can combine both the function creation AND the implementation in one fell swoop.

```HTML
<button id="some-button" value="1" onClick={(e) => console.log(e.target.value)}>
  Click Me
</button>
<!-- If you declared the clickHandler function as above, it would simply be: -->
<button id="some-button" value="1" onClick={(e) => clickHandler(e)}>
  Click Me
</button>
<!-- OR -->
<button id="some-button" value="1" onClick={clickHandler}>
  Click Me
</button>
```

As you can see it's very straightforward. The only major difference is that any event is written in camel case and then the function is wrapped in `{}`. One thing to look out for as well is there are issues you can run into if you wanted to use the `this` keyword such as say in a class based component. We'll take a look at one of those examples during the classwork so we'll put a pin in it for now.

## Input value binding

So let's say you had some variable that you wanted to update with the new value from an input box. In React it's pretty straight forward. You could simply follow the pattern above and utilize the `onChange` event in the same way you would use the `onClick` from above. One thing to note though is that this is simply reading the input field and is not actually updating any values that input might be tied to. This is something we'll be getting into more detail with later on.
