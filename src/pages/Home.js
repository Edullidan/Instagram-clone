import React from "react";
import styles from "../styles/HomePage.module.css";
import Sidenav from "./components/navigation/Sidenav";

import Posts from "./components/CreatePost/create-post";







function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__nav}>
        <Sidenav />
        <div className={styles.posts}>
          <Posts></Posts>
        </div>
      </div>
     
      
    </div>
  );
}

export default Homepage;