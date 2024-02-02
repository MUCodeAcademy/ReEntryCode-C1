# Week 1 Review HTML and CSS

## HTML

1. What is the purpose of HTML?

- All of the information on the page (text, images, etc.). Stands for Hypertext Markup Language.

2. What is the general layout of the prebuilt HTML code?

- <!DOCTYPE html>
- <html>
- <head>
- <meta>
- <body>

3. How would you link to a CSS file?

- This goes in between the <head></head> tags
- <link type="text/css" rel="stylesheet" href="FileName.css" />

4. How would you link to another website?

- <a href="https://www.website.com">Click here!</a>

5. What is the difference between an inline element and a block element?

- `inline` - Will only take up as much space as they need, and you can't set width and height.
- `block` - Always start on a new line and they take up the whole width, but you can set width and height.

6. What is the difference between the `head` tag and the `body` tag?

- `head` - Information that describes the document. Used for stuff that won't show up on the page.
- `body` - Main content. Everything that shows up on the page will go here.

7. What is the difference between the `ul` tag and the `ol` tag?

- `ul` - Unordered List. By default these show up with bullet points next to each item. 
- `ol` - Ordered List. By default these show up with numbers next to each item.

8. What is the point of setting the elements up like this:

```html
<div class="flex-container">
  <div>
    <div class="item"></div>
  </div>
  <div>
    <div class="item"></div>
  </div>
</div>
```

- Makes a big flexbox container with two containers inside of it each containing an item.

## CSS

1. What is CSS used for?

- Means Cascading Style Sheets. It's for all of the styling (color, spacing, etc.).

2. What are the three main ways you can include CSS to style an element?

- Making a separate css file and linking it to the HTML.
- Write CSS in the <style></style> tag.
- Write CSS on the element itself like this:
<p style="background-color: blue">This background will be blue</p>

3. How would you select a class, id, or element (let's use a `div` as an example) with css?

- `class` - `.class-name{}`
- `id` - `#id-name{}`
- `element` - `div{}`

4. How would I set the text color to blue for all of the text inside this div?
 - What if I wanted the paragraph text to be blue, and the text in the list to be red?
 
```html
<div>
  <p>Paragraph text</p>
  <ul>
    <li>Text in a list</li>
  </ul>
</div>
```

Part 1 everything blue:
```css
div {
  color: blue
}
```

Part 2 paragraph blue, list red:
```css
p {
  color: blue;
}
li {
  color: red;
}
```

5. What are the differences between fixed, absolute, and relative positioning?

- `fixed` - Fixes an element to the page and it will stay there no matter what.
- `absolute` - Moves in accordance with other elements, but you can specify exactly where to put with top/bottom/left/right.
- `relative` - Follows the normal flow of the page, but you can set top/bottom/right/left properties to move it. By default, most elements are relative.

6. What are the benefits of using flex box layout?

- It's an easier method to put elements next to each other.

7. How would you select an element that is a child of another element?

- `div:nth-child(3)`
- `div > p` - This will select every paragraph inside the div.

8. Name three different units of measurement you can use in CSS.

- px (pixels)
- cm (centimeters)
- % (percentage)
- vw (view width) vh (view height)
- em (relative to the font-size)

9. What are pseudo-classes and pseudo-selectors?

- Things like `:nth-child()` or `:hover` where they select an element AND its location or state.

10. Name three different ways to choose the color red.

- `color: red`
- `color: rgb(255, 0, 0)`
- `color: #FF0000`

11. If you have three divs that you want to display side by side on the same line (without dead space between them), how would you do that?

- Create a parent container and make it a flex-box with `display: flex;`, set `flex-direction: row;`, and maybe add some wrapping `flex-wrap: wrap;`. In the HTML, make three divs inside of it.

```html
<div class="flex-container">
  <div></div>
  <div></div>
  <div></div>
</div>
```

12. How would you style a div to be EXACTLY 1/3 of the browser window in width?

- `width: calc(100vw / 3)`
- `width: calc(100% / 3)`