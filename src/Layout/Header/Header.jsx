import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import style from "./header.module.css";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../Firebase/FirebaseConfig";
import { ToastContainer, toast } from "react-toastify";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      toast.success("You Are Signing Out", {
        autoClose: 1000,
      });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <ToastContainer />
      <div className={style.header}>
        <nav
          ref={menuRef}
          className={`${style.nav} ${isMenuOpen ? style.showMenu : ""}`}
        >
          <Link className={style.logo} to="/">
            <img src={logo} alt="" />
          </Link>
          <div className={style.menuIcon} onClick={toggleMenu}>
            <FaBars />
          </div>
          <div className={`${style.routes} ${style.desktopMenu}`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/favorite">Favorites</NavLink>
            <NavLink to="/applied">Applied</NavLink>
            <NavLink to="/addjobs">Add Jobs</NavLink>
            <NavLink to="/contact">Contacts</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <div className={`${style.routes} ${style.desktopMenu}`}>
            {user ? (
              <button onClick={handleSignOut} className={style.signout}>
                SignOut
              </button>
            ) : (
              <NavLink to="/signin">SignIn</NavLink>
            )}
            {user ? (
              <div>
                {user.photoURL ? (
                  <img
                    className={style.profileImg}
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <p className={style.profileName}>{user.displayName}</p>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
        <div className={`${style.routes}`}>
          {isMenuOpen && (
            <div className={style.mobileMenu}>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/jobs" onClick={closeMenu}>
                Jobs
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu}>
                Favorite
              </NavLink>
              <NavLink to="/applied" onClick={closeMenu}>
                Applied
              </NavLink>
              <NavLink to="/addjobs" onClick={closeMenu}>
                Add Jobs
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu}>
                Contacts
              </NavLink>
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
              <div className={style.profile}>
                {user ? (
                  <button onClick={handleSignOut} className={style.signout}>
                    SignOut
                  </button>
                ) : (
                  <NavLink to="/signin">SignIn</NavLink>
                )}
                {user ? (
                  <div>
                    {user.photoURL ? (
                      <img
                        className={style.profileImg}
                        src={user.photoURL}
                        alt=""
                      />
                    ) : (
                      <p className={style.profileName}>{user.displayName}</p>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
