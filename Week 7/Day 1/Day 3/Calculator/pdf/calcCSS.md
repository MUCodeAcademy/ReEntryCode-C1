# Calculator CSS

```css
* {
    font-family: 'monospace', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

body {
    background-color: #242424;
}

.main {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50vh;
    width: 50vw;
    border: 5px solid black;
}

#display {
    display: flex;
    background-color: rgb(133, 133, 133);
    width: 99.6%;
    height: 20%;
    text-align: right;
    align-items: center;
    justify-content: right;
    align-self: center;
    font-size: calc(100% + 7vh);
    border-bottom: 5px solid black;
}


.button-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
}

button {
    background-color: rgb(215, 215, 215);
    border-radius: 5%;
    width: 25%;
}

button:hover {
    background-color: rgb(105, 105, 105);
}

button:active {
    background-color: rgb(84, 84, 84);
}
```