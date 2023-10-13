import React from "react";
import styles from "./home.module.css";
import Sidenav from "./components/navigation/Sidenav";
import Column from "./components/timeline/Column";
import Posts from "./components/CreatePost/create-post";






function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__nav}>
        <Sidenav />
  <div className={styles.homepage__column}>
    <Column></Column>
  </div>
   </div>
       <div className={styles.posts}><Posts></Posts></div>
      </div>
  
  );
}

export default Homepage;