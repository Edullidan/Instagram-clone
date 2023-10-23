import React from "react";
import { Avatar } from "@mui/material";
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSend,
} from "react-icons/ai";
import { RiBookmarkLine } from "react-icons/ri";
import styles from "./PostList.module.css";

function PostList() {
 
  const [posts, setPosts] = React.useState([
    {
      user: "_Ramazan_",
      postImage:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      likes: 120,
      time: "1d",
    },
    {
      user: "Samvel_55",
      postImage:
        "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg",
      likes: 233,
      time: "6d",
    },
    {
      user: "Gerkosh1",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      likes: 312,
      time: "7d",
    },
    {
      user: "Tarzan33",
      postImage:
        "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhcmNofGVufDB8fDB8fHww&w=1000&q=80",
      likes: 400,
      time: "22d",
    },
  ]);

  return (
    <div className={styles.Timeline}>
      <div className={styles.timeline__left}>
        <div className={styles.timeline__posts}>
          {posts.map((post, index) => (
            <div className={styles.container} key={index}>
              <div className={styles.post}>
                <div className={styles.post__header}>
                  <div className={styles.post__headerAutor}>
                    <Avatar></Avatar>
                    {post.user} • <span>{post.time}</span>
                  </div>
                </div>
                <div className={styles.post__image}>
                  <img src={post.postImage} alt='' />
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
                  <p className={styles.words}>Liked by {post.likes} people.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostList;