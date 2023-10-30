import React, { useState, useEffect } from "react";
import styles from "./create-post.module.css";
import { FaRegPlusSquare } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineMessage, AiOutlineSend } from "react-icons/ai";
import { RiBookmarkLine } from "react-icons/ri";
import { Avatar } from "@mui/material";
import createComment from "@/pages/Comment/createComment";

function Posts() {
  const [postData, setPostData] = useState({
    text: "",
    image: null,
  });
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
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
        const newPost = { ...postData };
        newPost.imageURL = URL.createObjectURL(postData.image);
        setPosts([...posts, newPost]);

        const postsToStore = [...posts, newPost];
        postsToStore.forEach((post) => {
          delete post.imageURL;
        });

        localStorage.setItem("posts", JSON.stringify(postsToStore));

        setPostData({ text: "", image: null });
        setIsFormOpen(false);
      } else {
        console.error("Error creating post. Status code:", response.status);
      }
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  }

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts) {
     
      const restoredPosts = storedPosts.map((post) => {
        if (post.image) {
          const blob = new Blob([null], { type: "image/*" });
          const imageURL = post.imageURL; 
          const image = new Image();
          image.src = imageURL;
          image.onload = () => {
            URL.revokeObjectURL(imageURL); 
          };
          return { ...post, image: blob, imageURL: null };
        } else {
          return post;
        }
      });
      setPosts(restoredPosts);
    }
  }, []);
  const handleLikePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes++;
    setPosts(updatedPosts);
  };

  const CommentInput = ({ postId, setComments }) => {
    const [commentText, setCommentText] = useState("");

    const handleCommentChange = (e) => {
      setCommentText(e.target.value);
    };

    const handleAddComment = async () => {
      try {
        const newComment = {
          text: commentText,
          postId: postId,
        };

        const response = await createComment(newComment);

        if (response.status === 200) {
          setComments((prevComments) => [...prevComments, newComment]);
          setCommentText("");
        } else {
          console.error("Error creating comment. Status code:", response.status);
        }
      } catch (error) {
        console.error("Error creating comment:", error.message);
      }
    };

    return (
      <div className={styles.comment_container}>
        <input
          className={styles.add_comment}
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={handleCommentChange}
        />

        <button className={styles.comment_create} onClick={handleAddComment}>
          Submit
        </button>
      </div>
    );
  }

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
              <div className={styles.postHeader}>
                <Avatar alt="User Avatar" />
              </div>
              <p>{post.text}</p>
              {post.image && typeof post.image === "object" && post.image instanceof Blob && (
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

              <CommentInput postId={index} setComments={setComments} />

              {comments
                .filter((comment) => comment.postId === index)
                .map((comment) => (
                  <div key={comment.id} className={styles.comment}>
                    {comment.text}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;