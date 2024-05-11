import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import img from "../../../assets/images/login.gif";
import styles from "../auth.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/FirebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      return alert("Your Password Doesn't Match");
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({
        displayName: name,
      });
    }
  };
  const notify = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000
    });
  };
  if (loading) {
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
            {/* Sign Up Form */}
            <div className={styles.signUpForm}>
              <h2>Sign Up</h2>
              <br />
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <input type="text" placeholder="Name" name="name" />
                </div>
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
                <div className={styles.inputGroup}>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                  />
                </div>
                <button className={styles.btn} type="submit">
                  Sign Up
                </button>
              </form>
            </div>
            <br />

            <div className={styles.flex}>
              <p>Already have an Account? </p>
              <Link to="/signin"> Please Sign In</Link>
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

export default SignUp;
