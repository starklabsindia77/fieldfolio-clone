import React from "react";
import "../../css/signup/Wholesaler.css";
import { Link } from "react-router-dom";

function Wholesaler() {
  return (
    <div className="BasePage__BasePageContainer-sc-1tto81y-0 dwtqTs">
      <main className="BasePage__Main-sc-1tto81y-1 hneQfM">
        <div className="SignupContainer__Container-zso9tb-0 facORo">
          <div className="FormContainers__VerticalFormContainer-mmcuqf-2 fysHjX">
            <Link to="/">
              <svg
                width="80"
                height="80"
                viewBox="0 0 48 48"
                className="SignupContainer__SignupLogo-zso9tb-2 drQZfE"
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
            <header className="SignupContainer__Header-zso9tb-3 dLXoYj">
              <h1 className="heading">Wholesaler signup</h1>
              <p className="subhead">
                Start selling on <br /> Fieldfolio
              </p>
              <div className="ProgressBar__Track-liqwbt-0 yewmZ SignupContainer__Progress-zso9tb-1 fttjjT">
                <div
                  color="hsl(250, 100%, 60%)"
                  style={{ width: "33%" }}
                  className="ProgressBar__Bar-liqwbt-1 ibCKwd"
                ></div>
              </div>
            </header>
            <section className="SignupContainer__Body-zso9tb-4 hpLMXL">
              <form action="#">
                <div className="FormContainers__InputGroup-mmcuqf-1 cDHahY">
                  <div className="FormInput__FieldContainer-we5g1j-1 cWfKVe">
                    <div className="FormInput__FieldTitle-we5g1j-3 gjraxJ">
                      <div className="Nano-sc-1fad15u-0 hZNIvq">First Name</div>
                    </div>
                    <div className="FormInput__InputContainer-we5g1j-0 hfrtTR">
                      <input
                        type="text"
                        name="first_name"
                        autoFocus=""
                        title="First Name"
                        className="Input-ebgq5k-3 jewHIj"
                      />
                    </div>
                  </div>
                  <div className="FormInput__FieldContainer-we5g1j-1 cWfKVe">
                    <div className="FormInput__FieldTitle-we5g1j-3 gjraxJ">
                      <div className="Nano-sc-1fad15u-0 hZNIvq">Last Name</div>
                    </div>
                    <div className="FormInput__InputContainer-we5g1j-0 hfrtTR">
                      <input
                        type="text"
                        name="last_name"
                        title="Last Name"
                        className="Input-ebgq5k-3 jewHIj"
                      />
                    </div>
                  </div>
                  <div className="FormInput__FieldContainer-we5g1j-1 cWfKVe">
                    <div className="FormInput__FieldTitle-we5g1j-3 gjraxJ">
                      <div className="Nano-sc-1fad15u-0 hZNIvq">Email</div>
                    </div>
                    <div className="FormInput__InputContainer-we5g1j-0 hfrtTR">
                      <input
                        type="email"
                        name="email"
                        autoComplete="username"
                        title="Email"
                        className="Input-ebgq5k-3 jewHIj"
                      />
                    </div>
                  </div>
                  <div className="FormInput__FieldContainer-we5g1j-1 cWfKVe">
                    <div className="FormInput__FieldTitle-we5g1j-3 gjraxJ">
                      <div className="Nano-sc-1fad15u-0 hZNIvq">Password</div>
                    </div>
                    <div className="FormInput__InputContainer-we5g1j-0 hfrtTR">
                      <input
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        title="Password"
                        className="Input-ebgq5k-3 jewHIj"
                      />
                    </div>
                  </div>
                  <div className="FormInput__FieldContainer-we5g1j-1 iNfBGm">
                    <div className="FormInput__InputContainer-we5g1j-0 hfrtTR">
                      <label className="Input__CheckRadioLabel-ebgq5k-0 fsNzQL">
                        <input
                          type="checkbox"
                          name="terms_accepted"
                          value="false"
                          className="Input__CheckRadio-ebgq5k-1 iulwrg"
                        />
                        <div>
                          <small>
                            I have read and agree to the Fieldfolio
                            <br />
                            <Link target="_blank" to="/terms">
                              Terms of Service
                            </Link>
                            and
                            <Link target="_blank" to="/privacy">
                              Privacy Policy
                            </Link>
                            .
                          </small>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="Button_button__1YLw1 Button_primary__z80TZ default Button_isBlock__g_3iP"
                >
                  <div className="Button_buttonInner__vKlOI">
                    <div className="Button_label__2TWeJ">Sign Up</div>
                  </div>
                </button>
              </form>
            </section>
          </div>
        </div>
        <div className="SignupOptionFooter__Container-r6kkyz-0 fhbqnb">
          <div className="FormContainers__VerticalFormContainer-mmcuqf-2 fysHjX">
            <h3 className="SignupOptionFooter__Heading-r6kkyz-1 dGxXoJ">
              Are you a Retailer?
            </h3>
            <p className="SignupOptionFooter__Subhead-r6kkyz-2 kRDaVa">
              Register for pricing <br /> now.
            </p>
            <Link
              to="/signup/retailer"
              className="Button_button__1YLw1 Button_primary__z80TZ default Button_isBlock__g_3iP"
            >
              <div className="Button_buttonInner__vKlOI">
                <div className="Button_label__2TWeJ">
                  Register as a Retailer
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Wholesaler;
