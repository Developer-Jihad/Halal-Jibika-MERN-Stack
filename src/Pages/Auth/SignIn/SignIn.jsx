import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "../auth.module.css";
import img from "../../../assets/images/login.gif";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/FirebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
    e.target.email.value = "";
    e.target.password.value = "";
  };
  const notify = () => {
    toast("Default Notification !", { autoClose: 1000 });
  };
  if (user) {
    notify();
  }

  return (
    <>
      <ToastContainer />
      <div className={styles.container}>
        <div className={styles.authImage}>
          <img src={img} alt="" />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.form}>
            {/* Sign In Form */}
            <div className={styles.signInForm}>
              <h2>Sign In</h2>
              <br />
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <input type="email" placeholder="Email" name="email" />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <button className={styles.btn} type="submit">
                  Sign In
                </button>
              </form>
            </div>
            <br />

            <div className={styles.flex}>
              <p>Don't have an Account? </p>
              <Link to="/signup"> Please Sign Up</Link>
            </div>
            <br />
            <hr />
            <br />
            {/* Social Icons */}
            <h3>Sign-In with:</h3>
            <div className={styles.socialIcons}>
              <FcGoogle
                onClick={() => signInWithGoogle()}
                className={styles.icon}
              />
              <FaGithub
                onClick={() => signInWithGithub()}
                className={styles.icon}
              />
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
