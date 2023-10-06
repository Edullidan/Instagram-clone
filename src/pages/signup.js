import Link from "next/link";
import { useState } from "react";
import styles from "../styles/SignUp.module.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsRegistering(true);

      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, email, password }), // Добавляем name и username
      });

      if (response.status === 200) {
        console.log("Registration successful");
        window.location.href = "/";
      } else {
        console.error("Registration error");
        setIsRegistering(false);
      }
    } catch (error) {
      console.error("Error sending registration request", error);
      setIsRegistering(false);
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_box}>
        <form className={styles.signup_form} onSubmit={handleSubmit}>
          <input
            className={styles.signup_input}
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className={styles.signup_input}
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={styles.signup_input}
            type='email'
            placeholder='Mobile, phone or email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.signup_input}
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={styles.signup_button}
            onClick={handleSubmit}
            h
            disabled={isRegistering}
          >
            {isRegistering ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
