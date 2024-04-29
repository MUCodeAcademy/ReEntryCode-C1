# What is JSX

React functions off of JSX. It might seem weird at first, but it is just HTML and JavaScript combined together in the same file. It uses `{}` for property binding (which we'll get into in a second) and has strict rules for how to use HTML. Some of the key things to remember are:

- When using classes on an element, instead of `<div class='classes go here'>` you use `<div className='classes go here'>`
- When using the style attribute, you would use `<div style ={{height: '10%'}}>` the first `{}` are for the binding, but then it accepts an object with keys and values
- ALL elements must be closed - even normally self closing elements like this: `<img src="...">` would cause an error. This would not: `<img src="..." />`

# Example

Take this HTML 

```html
<h1>Luce's Todos</h1>
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Luce" 
  class="photo"
>
<ul>
    <li>Reinvent traffic lights </li>
    <li>Create a perpetual motion machine </li>
    <li>Improve the spectrum technology </li>
</ul>
```

And you want to put it into this React component:

```javascript
export default function TodoList() {
  return (
    // ???
  )
}
```

You could just copy and paste the HTML into the 'return' of the component, however it will not work. There are a few key things we need to change first to make it valid JSX.

1. Return a single root element
- This means that we will wrap the entire HTML in a single parent tag.

2. Close all of the tags

3. camelCase mostly everything
- Most HTML attributes are written in camelCase in React. Example: instead of stroke-width you use strokeWidth.
- Additionally, you can't use 'class' since it's a reserved word in React. Use className instead.

With all of those changes, it would look like this:

```javascript
export default function TodoList() {
  return (
    <>
      <h1>Luce's Todos</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Luce" 
        className="photo" 
      />
      <ul>
        <li>Reinvent traffic lights </li>
        <li>Create a perpetual motion machine </li>
        <li>Improve the spectrum technology </li>
      </ul>
    </>
  );
}
```