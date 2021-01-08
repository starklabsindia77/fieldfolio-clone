import React, { useState } from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../config/firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (auth) => {
        console.log(auth.user.uid);
        const id = auth.user.uid;
        const user_role = (
          await db.collection("user_profile").doc(id).get()
        ).data();
        if (user_role.role === "Retailer") {
          history.push("/");
        } else if (user_role.role === "Wholesaler") {
          history.push("/Checkout");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <div className="AuthPageContainer-sc-8fip7o-0 epYhwJ">
        <div className="FormContainers__VerticalFormContainer-mmcuqf-2 jXhYOT">
          <Link to="/">
            <svg
              width="96"
              height="96"
              viewBox="0 0 48 48"
              className="AuthFormContainer__AuthFormLogo-sc-87on2w-1 bPLApc"
            >
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
                d="M33.3,17.8l-13,0.7l0.2-3.7c0.1-0.9,0.1-1,1.1-1l2.7-0.1c1.9-0.1,2.5,0.2,2.8,0.7c0.4,0.5,0.5,1.1,0.8,2.2l1.2-0.2 c0-1.8,0-3.5,0-4.2l-13.3,0.7l-0.1,1.2c2.2,0.1,2.4,0.2,2.2,2.7l-0.5,8.1c-0.2,2.5-0.3,2.7-2.6,3l-0.1,1.2l6.6-0.3l0.1-1.2 c-0.8,0-1.7,0.1-1.5-2.8l0.3-4.5c1.8-0.1,2.4,0.3,2.5,1.2c0,0.3-0.6,10.6-0.6,10.6c-0.2,2.5-0.3,2.7-2.6,3L19.3,36l7.7-0.4l0.1-1.2 c-2.6,0-2.8-0.3-2.6-2.7l0.2-3.5l1.1-0.1c2.3-0.1,2.5,0,2.6,1.9l1.2-0.1l0.4-5.6l-1.2,0.1c-0.5,1.8-0.6,1.9-2.9,2.1l-1.1,0.1 l0.4-6.2c0.1-0.9,0.1-1,1.1-1l2.3-0.1c1.9-0.1,2.5,0.2,2.8,0.7c0.4,0.5,0.5,1.1,0.8,2.2l1.2-0.2C33.3,20.2,33.3,18.5,33.3,17.8"
                fill="url(#linearGradient)"
              ></path>
            </svg>
          </Link>
          <header className="AuthFormContainer__AuthFormHeader-sc-87on2w-2 jzRrbv">
            <h3 className="Heading-zo0nxg-0 hkRQqq">Login to Fieldfolio</h3>
          </header>
          <section className="AuthFormContainer__AuthFormBody-sc-87on2w-3 deAeGx">
            <form action="#" data-ref="login-form">
              <div className="FormContainers__InputGroup-mmcuqf-1 cDHahY">
                <div className="FormInput__FieldContainer-we5g1j-1 iNfBGm">
                  <div className="FormInput__InputContainer-we5g1j-0 hfrtTR">
                    <input
                      type="email"
                      name="email"
                      autoComplete="username"
                      placeholder="Email"
                      className="Input-ebgq5k-3 jewHIj"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="FormInput__FieldContainer-we5g1j-1 iNfBGm">
                  <div className="FormInput__InputContainer-we5g1j-0 hfrtTR">
                    <input
                      type="password"
                      name="password"
                      autoComplete="password"
                      placeholder="Password"
                      className="Input-ebgq5k-3 jewHIj"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                onClick={login}
                className="Button_button__1YLw1 Button_primary__z80TZ default Button_isBlock__g_3iP"
              >
                <div className="Button_buttonInner__vKlOI">
                  <div className="Button_label__2TWeJ">Login</div>
                </div>
              </button>
            </form>
            <div className="LoginForm_fineprint__Omj-R">
              <small>
                <Link
                  className="LoginForm_mutedLink__3tSCE"
                  to="/reset-password"
                >
                  Forgot your password?
                </Link>
              </small>
            </div>
            <section>
              <small>
                New to Fieldfolio? <Link to="/signup/retailer">Sign up</Link>
              </small>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
