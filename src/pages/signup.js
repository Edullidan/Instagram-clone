import React from "react";
import styles from "./SignUp.module.css";

function SignUp() {
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_box}>
        <form className={styles.signup_form}>
          <input
            className={styles.signup_input}
            type='text'
            placeholder='Имя'
          />
          <input
            className={styles.signup_input}
            type='text'
            placeholder='Имя пользователя'
          />
          <input
            className={styles.signup_input}
            type='email'
            placeholder='Моб. телефон или эл. адрес'
          />
          <input
            className={styles.signup_input}
            type='password'
            placeholder='Пароль'
          />
          <button className={styles.signup_button}>Зарегистрироваться!</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
