# What is State?

State is one of the most important parts of any front-end application. We started to see that while we can handle interaction with the user and bind attributes, we can't actually update the page due to how the Virtual DOM works. We can however _tell_ React when to update and what items to pay attention to. That is one of the biggest things that can cause your application to work correctly or not depending on how you have it set up.

Simply put, state is just that - the state of data in your application. For example, a lightbulb has two states: on or off. Components in React can have their own state, which represents data that can change over time. This makes components dynamic and interactive. In our lightbulb example, the lightbulb component may need to remember whether the lightbulb is currently on or off, and other components may need to access or manipulate that state.

HTML and HTTP are stateless, meaning that they do not inherently store information about previous interactions. This also means that once you load the page, nothing changes. If we want things to happen and trigger re-renders, we have to use JavaScript to manage its state. Not just that, but it has to be in a way that React will pay attention to.
