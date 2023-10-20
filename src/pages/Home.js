import React from "react";
import styles from "./home.module.css";
import Sidenav from "./components/navigation/Sidenav";

import Posts from "./components/CreatePost/create-post";
import PostList from "./components/PostList/PostList";






function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__nav}>
        <Sidenav />
        <div className={styles.posts}>
          <Posts></Posts>
        </div>
      </div>
        <div className={styles.homepage_posts}>
          <PostList></PostList>
        </div>
      
    </div>
  );
}

export default Homepage;