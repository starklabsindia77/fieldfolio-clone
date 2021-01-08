import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../config/StateProvider";
import { auth } from "../config/firebase";

function Header() {
  const [{ user }] = useStateValue();
  const handleAuthenticaton = () => {
    //console.log(user);
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="HeaderNav">
      <ul className="HeaderNav_navList HeaderNav_isElastic__2pgDh">
        <li className="NavItem_navItem__ObetJ">
          <Link to="/">
            <svg width="24" height="24" viewBox="0 0 48 48" className="">
              <defs>
                <linearGradient
                  x1="50%"
                  y1="15%"
                  x2="50%"
                  y2="100%"
                  id="linearGradient"
                >
                  <stop stopColor="#53F" offset="0%"></stop>
                  <stop stopColor="#309" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                d="M42.8,11.4l-26.1,1.4L17,5.3c0.2-1.8,0.2-2,2.2-2l5.4-0.2c3.8-0.2,5,0.4,5.6,1.4c0.8,1,1,2.2,1.6,4.4l2.4-0.4 c0-3.6,0-7.1,0-8.5L7.5,1.1L7.3,3.5c4.4,0.2,4.8,0.4,4.4,5.4l-1,16.3c-0.4,5-0.6,5.4-5.2,6.1l-0.2,2.4L18.6,33l0.2-2.4 c-1.6,0-3.4,0.2-3-5.6l0.4-9.3c3.6-0.2,4.8,0.6,5,2.4c0,0.6-1.2,21.4-1.2,21.4c-0.4,5-0.6,5.4-5.2,6.1L14.5,48L30,47.2l0.2-2.4 c-5.2,0-5.6-0.6-5.2-5.4l0.4-7.1l2.2-0.2c4.6-0.2,5,0,5.2,3.8l2.4-0.2L36,24.4l-2.4,0.2c-1,3.6-1.2,3.8-5.8,4.2L25.6,29l0.8-12.5 c0.2-1.8,0.2-2,2.2-2l4.6-0.2c3.6,0,4.8,0.6,5.4,1.4c0.8,1,1,2.2,1.6,4.4l2.4-0.4C42.8,16.2,42.8,12.8,42.8,11.4"
                fill="url(#linearGradient)"
              ></path>
            </svg>
            <span className="HeaderNav_logotype__2_Aaa">Fieldfolio</span>
          </Link>
        </li>
      </ul>
      <ul className="HeaderNav_navList">
        {!user && (
          <li className="NavItem_navItem__ObetJ NavItem_isPrimary__tSx7H">
            <Link to="/signup/retailer">
              <span className="showForPhoneOnly">Signup</span>
              <span className="hideForPhone">Signup Free</span>
            </Link>
          </li>
        )}

        <li className="NavItem_navItem__ObetJ">
          <Link to={!user ? "/login" : "/"}>
            <div onClick={handleAuthenticaton} className="Login">
              {user ? "Sign Out" : "Login"}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
