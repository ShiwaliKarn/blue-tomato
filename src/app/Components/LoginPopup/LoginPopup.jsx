"use client";

import styles from "@/app/Styles/loginPopup.module.css";
import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import SlInput from "@shoelace-style/shoelace/dist/react/input";
import axios from "axios";
import { StoreContext } from "@/app/context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const { setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    reEnteredPassword: "",
  });

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));

    if (name === "password" || name === "reEnteredPassword") {
      if (data.password !== data.reEnteredPassword) {
        setPasswordsMatch(false);
      } else {
        setPasswordsMatch(true);
      }
    }
  };

  const onLogin = async (event) => {
    event.preventDefault();
    if (currState === "Sign Up" && data.password !== data.reEnteredPassword) {
      setPasswordsMatch(false);
      return;
    }

    const newUrl =
      currState === "Login" ? "/api/user/login" : "/api/user/register";

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.login_popup}>
      <form className={styles.login_popup_container} onSubmit={onLogin}>
        <div className={styles.login_popup_title}>
          <h2>{currState}</h2>
          <RxCross2
            className={styles.login_cross}
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className={styles.login_popup_inputs}>
          {currState === "Login" ? null : (
            <input
              type="text"
              placeholder="Your name"
              required
              name="name"
              onChange={onChange}
              value={data.name}
            />
          )}
          <input
            type="email"
            placeholder="Your Email"
            required
            name="email"
            onChange={onChange}
            value={data.email}
          />

          <SlInput
            type="password"
            placeholder="Password"
            password-toggle
            className={styles.password}
            required
            name="password"
            onInput={onChange}
            value={data.password}
          />
          {currState === "Sign Up" && (
            <>
              <SlInput
                type="password"
                placeholder="Re-enter password"
                password-toggle
                className={styles.password}
                name="reEnteredPassword"
                onInput={onChange}
                value={data.reEnteredPassword}
                required
              />
              {passwordsMatch && <p>Passwords do not match!</p>}
            </>
          )}
          <button type="submit">
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>
        </div>
        {currState === "Sign Up" ? (
          <div className={styles.login_popup_condition}>
            <input type="checkbox" required />
            <p>
              By continuing, I agree to the terms of use and privacy policy.
            </p>
          </div>
        ) : (
          ""
        )}

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
