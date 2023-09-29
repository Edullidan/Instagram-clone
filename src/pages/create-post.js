import React, { useState } from "react";
import { useRouter } from "next/router";

function CreatePostPage() {
  const [postText, setPostText] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: postText }),
      });

      if (response.status === 200) {
        console.log("Post created successfully");
        router.push("/about"); // Перенаправление на страницу about.js после создания поста
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows='4'
          cols='50'
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder='Write your post here...'
        />
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

export default CreatePostPage;
