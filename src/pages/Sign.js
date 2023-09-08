import React, { useState, useEffect } from "react";
import styles from "./Sign.module.css";
import Link from "next/link";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Ошибка при получении сообщений", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
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
          placeholder='Телефон, имя пользователя или эл. адрес'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.password}
          type='password'
          placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className={styles.login} type='submit' value='Вход' />
      </form>
      <img
        className={styles.logo}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png'
        alt='Logo'
      />
      <div className={styles.create_account}>
        <p>У вас еще нет аккаунта?</p>
        <Link href={"/signup"}>
          <button className={styles.create_account_button}>
            Создать учетную запись
          </button>
        </Link>
      </div>

      {/* Пример отображения полученных сообщений из базы данных */}
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SignIn;
