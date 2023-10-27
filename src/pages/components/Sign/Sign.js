import React, { useState } from "react";
import styles from "./Sign.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const userData = await response.json();
        const userId = userData.id; // Получаем ID пользователя при успешной авторизации

        // Создаем пост с указанием ID пользователя
        const postResponse = await fetch("/api/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: "Новый пост", userId }), 
        });

        if (postResponse.status === 200) {
          console.log("Пост успешно создан и связан с пользователем");
          router.push("/Home");
        } else {
          console.error("Ошибка при создании поста");
        }
      } else {
        console.error("Ошибка авторизации");
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса на авторизацию", error);
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
          placeholder='Phone, username or email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.password}
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className={styles.login} type='submit' value='Login' />
      </form>
      <img
        className={styles.logo}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png'
        alt='Logo'
      />
      <div className={styles.create_account}>
        <p>Don't have an account yet?</p>
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
