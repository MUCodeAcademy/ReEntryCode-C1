import { useState } from "react";

function Blog() {
    // Make an array of blogs (put it in state)
    const posts = [
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

    const [blogPosts, setBlogPosts] = useState(posts);
    const [userPost, setUserPost] = useState("");

    // Function for increasing likes/dislikes
    function likeDislike(type, index) {
        // If type is "like", increase likes

        // Otherwise increase dislikes
    }

    // Function for adding a comment
    function newComment(index) {
        // Push the new comment to the index
        let userComment = prompt("Enter a new comment");

        // Loop through our posts...
        setBlogPosts(prevPosts => prevPosts.map((item, postIndex) => {
            // If the post in the loop is equal to the one that they want to add a comment to...
            if (postIndex == index) {
                // Return the updated post with the new comment
                return { ...item, comments: [...item.comments, userComment] }
            }
            // For all other posts, just return the unchanged version
            return item;
        }));
    }

    // Function for adding a new post
    function newPost() {
        const template = {
            content: userPost,
            author: "User",
            likes: 0,
            dislikes: 0,
            date: new Date().toLocaleDateString(),
            reactions: [],
            comments: [],
        }

        // Update our blog posts with the template
        // Copy the posts in the array, and add our new template
        setBlogPosts(prevPosts => [...prevPosts, template]);

        // Clear the input
        setUserPost("");
    }

    return (
        <div>
            {/* Display the blogs with the map function (similar to the Todo list) */}
            {blogPosts.map((item, index) => (
                <div>
                    <p>{item.content}</p>
                    <p>Author: {item.author}</p>
                    <p>Likes: {item.likes} <button>Like</button></p>
                    <p>Dislikes: {item.dislikes} <button>Dislike</button></p>
                    <p>Date: {item.date}</p>
                    <p>Reactions: {item.reactions}</p>
                    <div>Comments:
                        {/* Loop through the comments and display each one */}
                        {item.comments.map((comment, commentIndex) => (
                            <p>{comment}</p>
                        ))}
                    </div>
                    <button onClick={() => newComment(index)}>Add comment</button>
                </div>
            ))}

            {/* Input for a new blog post name */}
            <input onChange={(e) => setUserPost(e.target.value)} value={userPost} />
            {/* Button for adding that to the array */}
            <button onClick={() => newPost()}>New Post</button>
        </div>
    )
}

export default Blog;