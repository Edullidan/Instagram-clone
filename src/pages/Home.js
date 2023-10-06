import React from "react";
import styles from "./home.module.css";
import Sidenav from "./components/navigation/Sidenav";
import Posts from "./create-post";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__nav}>
        <Sidenav></Sidenav>
      </div>
      <div className={styles.create__post}>
        <Posts></Posts>
      </div>
    </div>
  );
}

export default Homepage;
