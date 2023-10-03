import React, { useState } from "react";
import styles from "./create-post.module.css";

function Posts() {
  const [postData, setPostData] = useState({
    text: "",
    image: null,
  });
  const [posts, setPosts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setPostData({ ...postData, image: imageFile });
  };

  const handleCreatePost = async () => {
    try {
      const formData = new FormData();
      formData.append("text", postData.text);
      formData.append("image", postData.image);

      const response = await createPost(formData);

      if (response.status === 200) {
        setPosts([...posts, postData]);
        setPostData({ text: "", image: null });
      } else {
        console.error("Error creating post. Status code:", response.status);
      }
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  async function createPost(formData) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: formData,
    });

    return response;
  }

  return (
    <div className={styles.container}>
      <div className={styles.createPostForm}>
        <input
          type='text'
          name='text'
          placeholder='Enter post text'
          value={postData.text}
          onChange={handleInputChange}
        />
        <input
          type='file'
          name='image'
          accept='image/*'
          onChange={handleImageChange}
        />
        <button onClick={handleCreatePost}>Create Post</button>
      </div>

      <div className={styles.timeline__posts}>
        {posts.map((post, index) => (
          <div key={index} className={styles.post}>
            <p>{post.text}</p>
            {post.image && (
              <img
                src={URL.createObjectURL(post.image)}
                alt='Post'
                className={styles.postImage}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
