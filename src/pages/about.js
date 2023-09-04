import React from "react";
import styles from "./about.module.css";
import Sidenav from "./components/navigation/Sidenav";
import Timeline from "./components/timeline/Timeline";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__nav}>
        <Sidenav></Sidenav>
      </div>
      <div className={styles.homepage__timeline}>
        <Timeline></Timeline>
      </div>
    </div>
  );
}

export default Homepage;
