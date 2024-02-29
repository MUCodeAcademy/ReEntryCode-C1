# Code Descriptions

Go through each block of code, and describe what each part does.

Example:

What does this code do, line by line?

```js
function add(number1, number2) {s
    let result = number1 + number2;

    return result
}

add(7, 5);
```

- 

## Practice

### #1
```js 
function likeDislike(type, index) {
    if (type == "like") {
        posts[index].likes++;
    } else {
        posts[index].dislikes++;
    }
}

likeDislike("like", 0);
```

- 

### #2
```js
let posts = [
    {
        content: "This is the text content of the post.",
        author: "Luce",
    },
];

posts.forEach((item, index) => {
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `
        <button onclick='addComment(${index})'>Add Comment</button>
    `

    blogDisplay.appendChild(newDiv);
});
```

- 

### #3
```js
function addComment(index) {
    posts[index].comments.push(prompt("Add a comment"));
}
```

- 

### #4
```js
function addPost() {
    const content = document.getElementById("newPost").value;

    posts.push(
        {
            content: `${content}`,
            author: "Different Person",
            likes: 0,
            dislikes: 0,
            date: new Date().getTime(),
            reactions: [],
            comments: [
                
            ],
        }
    )
    document.getElementById("newPost").value = "";
}

document.getElementById("addPost").addEventListener("click", addPost);
```

- 