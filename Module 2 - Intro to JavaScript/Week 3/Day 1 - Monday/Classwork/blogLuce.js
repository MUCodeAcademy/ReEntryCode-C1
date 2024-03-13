// Create a list of blog posts
let posts = [
    {
        content: "This is the text content of the post.",
        author: "Luce",
        likes: 10,
        dislikes: 0,
        date: new Date().toLocaleDateString(),
        // This is for an array of emoji reactions
        reactions: [],
        comments: [
            "I am commenting on this post."
        ],
    },
    {
        content: "Second Post",
        author: "Not Luce",
        likes: 0,
        dislikes: 10,
        date: new Date().toLocaleDateString(),
        // This is for an array of emoji reactions
        reactions: [],
        comments: [
            "I am NOT commenting on this post.",
            "Second comment"
        ],
    }
];

// Function to "like" or "dislike" blog posts
function likeDislike(type, index) {
    if (type == "like") {
        posts[index].likes++;
    } else {
        posts[index].dislikes++;
    }

    displayPosts();
}

// Display the blog posts
function displayPosts() {
    const blogDisplay = document.getElementById("blogDisplay");
    blogDisplay.innerHTML = ""; // Clear the current content
    
    posts.forEach((item, index) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("post");

        newDiv.innerHTML = `
            <p>${item.content}</p>
            <p>${item.author}</p>
            <p>Likes: ${item.likes} <button onclick='likeDislike("like", ${index})'><img src='thumbsup.png' /></button> 
            / Dislikes: ${item.dislikes} <button onclick='likeDislike("dislike", ${index})'><img src='thumbsdown.png' /></button></p>
            <p>Date: ${item.date}</p>
            <p>${item.reactions}</p>
            <div>Comments: ${item.comments}</div>
            <button onclick='addComment(${index})'>Add Comment</button>
        `

        // Function to comment on blog posts
        //  - Add a button to each post
        //  - Write a function for that button that adds the comment to the comment array
        //  - Will need to call displayPosts() at the end of the function
        //  - This will be incredibly similar to adding likes/dislikes
        
        // Function to add emojis to blog posts?
        
        blogDisplay.appendChild(newDiv);
    });
}

function addComment(index) {
    posts[index].comments.push(prompt("Add a comment"));
    displayPosts();
}

displayPosts();

// Function to remove a post:
//  - Add a button to each post
//  - The function will take whichever one they clicked on and remove it from the array
//  - posts.splice(index, 1) will remove one item with a specific index
//  - Call displayPosts() at the end

// Function to add blog posts to the list
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

    displayPosts();
}

document.getElementById("addPost").addEventListener("click", addPost);

// Profile Page?
