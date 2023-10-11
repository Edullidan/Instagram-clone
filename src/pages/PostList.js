import React from "react";
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSend,
} from "react-icons/ai";
import { RiBookmarkLine } from "react-icons/ri";
import styles from "./PostList.module.css";

function PostList({ posts, handleLikePost }) {
  return (
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
          <div className={styles.postIcons}>
            <AiOutlineHeart
              className={styles.icon}
              onClick={() => handleLikePost(index)}
            />
            <AiOutlineMessage className={styles.icon} />
            <AiOutlineSend className={styles.icon} />
            <RiBookmarkLine className={styles.icon} />
          </div>
          <div className={styles.likesCount}></div>
        </div>
      ))}
    </div>
  );
}

export default PostList;