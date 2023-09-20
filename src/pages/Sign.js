import React, { useState } from "react";
import styles from "./Sign.module.css";
import Link from "next/link";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Before fetch");

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("After fetch");

      if (response.status === 200) {
        console.log("Authentication successful");
      } else {
        console.error("Authentication error");
      }
    } catch (error) {
      console.error("Error sending authentication request", error);
    }
  };

  return (
    <div className={styles.sign_in_container}>
      <img
        className={styles.picture}
        src='https://www.thehoth.com/wp-content/uploads/2020/08/Instagram-768x1088.png'
        alt='picture'
      />
      <form className={styles.sign_in_form} onSubmit={handleSubmit}>
        <input
          className={styles.email}
          type='email'
          placeholder='Phone, username, or email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.password}
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className={styles.login} type='submit' value='Sign In' />
      </form>
      <img
        className={styles.logo}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png'
        alt='Logo'
      />
      <div className={styles.create_account}>
        <p>Don't have an account?</p>
        <Link href={"/signup"}>
          <button className={styles.create_account_button}>
            Create an account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
