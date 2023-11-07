import React from "react";
import { useRouter } from "next/router";
import styles from "./Sidenav.module.css";


import {
  FaHome,
  FaSearch,
  FaRegCompass,
  FaRegImages,
  FaRegEnvelope,
  FaRegHeart,
  FaBars,
  FaRegPlusSquare,
  FaUser
  
  
} from "react-icons/fa";

function Sidenav() {
  const router = useRouter();

  const navigateToProfile = () => {
    router.push("/Profile"); 
  };

 
  
    return (
      <div className={styles.sidenav}>
        <img
          className={styles.sidenav_logo}
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt="Logo"
        />
        <div className={styles.sidenav__buttons}>
          <button className={styles.sidenav__button}>
            <FaHome />
            <span>Home</span>
          </button>
          <button className={styles.sidenav__button}>
            <FaSearch />
            <span>Search</span>
          </button>
          <button className={styles.sidenav__button}>
            <FaRegCompass />
            <span>Explore</span>
          </button>
          <button className={styles.sidenav__button}>
            <FaRegImages />
            <span>Reels</span>
          </button>
          <button className={styles.sidenav__button}>
            <FaRegEnvelope />
            <span>Messages</span>
          </button>
         
          <button className={styles.sidenav__button}>
            <FaRegHeart />
            <span>Notifications</span>
          </button>
          <button className={styles.sidenav__button} onClick={navigateToProfile}>
            <FaUser />
            <span>Profile</span></button>
        </div>
        <div className={styles.sidenav__more}>
          <button className={styles.sidenav__button}>
            <FaBars />
            <span>More</span>
          </button>
        </div>
      </div>
    );
  }
  
  export default Sidenav;

