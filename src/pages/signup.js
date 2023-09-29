import React, { useState } from "react";
import styles from "../styles/SignUp.module.css";

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, email, password }),
      });

      if (response.status === 200) {
        console.log("Registration successful");
      } else {
        console.error("Registration error");
      }
    } catch (error) {
      console.error("Error sending registration request", error);
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_box}>
        <form className={styles.signup_form} onSubmit={handleSubmit}>
          <input
            className={styles.signup_input}
            type='text'
            placeholder='Имя'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.signup_input}
            type='text'
            placeholder='Имя пользователя'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.signup_input}
            type='email'
            placeholder='Моб. телефон или эл. адрес'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.signup_input}
            type='password'
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.signup_button}>Зарегистрироваться!</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
