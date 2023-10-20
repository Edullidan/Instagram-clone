import React from "react";
import { Avatar } from "@mui/material";
import styles from "./Profile.module.css";
import Sidenav from "./components/navigation/Sidenav";
import { FaImages, } from 'react-icons/fa';
import {BiBookmarkAlt } from "react-icons/bi";
import {LiaUserTagSolid} from "react-icons/lia"
import { useRouter } from "next/router";
function Profile() {

  const router= useRouter()

  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <Avatar className={styles.avatar} />
        <div className={styles.userInfo}>
          <h1 className={styles.username}>YourUsername</h1>
          <div className={styles.profileStats}>
            <div className={styles.stat}>
              <span className={styles.statCount}>100</span>
              <span className={styles.statLabel}>Posts</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statCount}>1000</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statCount}>500</span>
              <span className={styles.statLabel}>Following</span>
            </div>
          </div>
        </div>
       
      </div>
        <div className={styles.iconsContainer}>
          <div className={styles.icon}>
            <FaImages />
          </div>
          <div className={styles.icon} ><BiBookmarkAlt/></div>
          <div className={styles.icon}><LiaUserTagSolid/></div>
        </div>
     
      <div className={styles.Sidenav} >
        <Sidenav></Sidenav>
      </div>
    </div>
  );
}

export default Profile;