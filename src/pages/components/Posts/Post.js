import React from "react";
import { Avatar } from "@mui/material";
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSend,
} from "react-icons/ai";
import { RiBookmarkLine } from "react-icons/ri";
import styles from "./Post.module.css";

function Post({ user, postImage, likes, time }) {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.post__header}>
          <div className={styles.post__headerAutor}>
            <Avatar></Avatar>
            {user} • <span>{time}</span>
          </div>
        </div>
        <div className={styles.post__image}>
          <img src={postImage} alt='' />
        </div>
        <div className={styles.post__footer}>
          <div className={styles.post__footerIcons}>
            <div className={styles.post__IconsMain}>
              <AiOutlineHeart className={styles.postIcon} />
              <AiOutlineMessage className={styles.postIcon} />
              <AiOutlineSend className={styles.postIcon} />
            </div>
            <div className={styles.post__iconSave}>
              <RiBookmarkLine className={styles.postIcon} />
            </div>
          </div>
          <p className={styles.words}>Liked by {likes} people.</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
