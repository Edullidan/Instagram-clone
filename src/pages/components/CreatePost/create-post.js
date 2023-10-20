import React, { useState, useEffect } from "react";
import styles from "./create-post.module.css";
import { FaRegPlusSquare } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineMessage, AiOutlineSend } from "react-icons/ai";
import { RiBookmarkLine } from "react-icons/ri";

function Posts() {
  const [postData, setPostData] = useState({
    text: "",
    image: null,
  });
  const [posts, setPosts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setPostData({ ...postData, image: imageFile });
  };

  async function createPost(formData) {
    const response = await fetch("/api/post", {
      method: "POST",
      body: formData,
    });

    return response;
  }

  const handleCreatePost = async () => {
    try {
      const formData = new FormData();
      formData.append("text", postData.text);
      formData.append("image", postData.image);

      const response = await createPost(formData);

      if (response.status === 200) {
        setPosts([...posts, postData]);
        setPostData({ text: "", image: null });
        setIsFormOpen(false);
      } else {
        console.error("Error creating post. Status code:", response.status);
      }
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };
  
  const handleLikePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes++; 
    setPosts(updatedPosts);
  };

  return (
    <div className={styles.container}>
      <div onClick={() => setIsFormOpen(true)} className={styles.addIcon}>
        <FaRegPlusSquare className={styles.icon} />
        <span>Create</span>
        <div className={styles.createPostForm}>
          <div className={styles.createPostFormInner}></div>
          {isFormOpen ? (
            <>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              <button onClick={handleCreatePost} className={styles.post__button}>
                Create Post
              </button>
            </>
          ) : null}
        </div>
      </div>
      <div className={styles.post__container}>
        <div className={styles.timeline__posts}>
          {posts.map((post, index) => (
            <div key={index} className={styles.post}>
              <p>{post.text}</p>
              {post.image && (
                <img
                  src={URL.createObjectURL(post.image)}
                  alt="Post"
                  className={styles.postImage}
                />
              )}
              <div className={styles.iconContainer}>
                <AiOutlineHeart
                  className={styles.icon}
                  onClick={() => handleLikePost(index)}
                />
                <AiOutlineMessage className={styles.icon} />
                <AiOutlineSend className={styles.icon} />
                <RiBookmarkLine className={styles.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;