import React from "react";
import { Avatar } from "@mui/material";
import styles from "./Column.module.css";

function Column() {
  return (
    <div className={styles.container}>
      <div className={styles.recommendations}>
        <div className={styles.usernames}>
          <div className={styles.username}>
            <div className={styles.left}>
              <span className={styles.avatar}>
                <Avatar>L</Avatar>
              </span>
              <div className={styles.info}>
                <span className={styles.username}>Lomashka_official</span>
              </div>
            </div>
            <button className={styles.follow}>Follow</button>
          </div>

          <div className={styles.username}>
            <div className={styles.left}>
              <span className={styles.avatar}>
                <Avatar>G</Avatar>
              </span>
              <div className={styles.info}>
                <span className={styles.username}>Gojab_44</span>
              </div>
            </div>
            <button className={styles.follow}>Follow</button>
          </div>

          <div className={styles.username}>
            <div className={styles.left}>
              <span className={styles.avatar}>
                <Avatar>T</Avatar>
              </span>
              <div className={styles.info}>
                <span className={styles.username}>Timur_Utmambekov</span>
              </div>
            </div>
            <button className={styles.follow}>Follow</button>
          </div>

          <div className={styles.username}>
            <div className={styles.left}>
              <span className={styles.avatar}>
                <Avatar>G</Avatar>
              </span>
              <div className={styles.info}>
                <span className={styles.username}>Gozinak_</span>
              </div>
            </div>
            <button className={styles.follow}>Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Column;
