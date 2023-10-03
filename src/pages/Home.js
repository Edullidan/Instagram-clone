import React from "react";
import styles from "./about.module.css";
import Sidenav from "./components/navigation/Sidenav";
import Posts from "./create-post";
import Column from "./components/timeline/Column";
function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__nav}>
        <Sidenav></Sidenav>
      </div>
      <div className={styles.create__post}>
        <Posts></Posts>
      </div>
      <div>
        <Column></Column>
      </div>
    </div>
  );
}

export default Homepage;
