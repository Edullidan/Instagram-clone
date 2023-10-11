import React from "react";
import styles from "./home.module.css";
import Sidenav from "./components/navigation/Sidenav";
import Column from "./components/timeline/Column";





function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__nav}>
        <Sidenav />
   </div>
      
  <div className={styles.homepage__column}>
    <Column></Column>
  </div>
      </div>
  
  );
}

export default Homepage;