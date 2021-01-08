import React from "react";
import "../css/FooterBottom.css";
import { Link } from "react-router-dom";

function FooterBottom() {
  return (
    <div className="BasePage__BasePageContainer-sc-1tto81y-0 iJiBDD">
      <footer className="Footer_footer__1_BW4">
        <section className="Footer_footerSection__rMIU3">
          <ul className="Footer_socialLinkList__Hyewq Footer_footerLinkList__1gXZw">
            <li>
              <Link
                to="https://www.facebook.com/fieldfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/fieldfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.twitter.com/fieldfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.pinterest.com.au/fieldfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8.85,23a1.84,1.84,0,0,1-.33,0,1.66,1.66,0,0,1-1-.7A1.62,1.62,0,0,1,7.24,21L9.67,8.81a1.64,1.64,0,0,1,1.61-1.32l.32,0a1.64,1.64,0,0,1,1.28,1.93l-.81,4.1a.35.35,0,0,0,.39.41h0a5,5,0,0,0,4.32-4A4.86,4.86,0,0,0,7.61,7a6.12,6.12,0,0,0-.47,2.25,1.64,1.64,0,0,1-3.27-.14A8.13,8.13,0,1,1,12,17.25a.87.87,0,0,0-.8.66l-.75,3.77A1.64,1.64,0,0,1,8.85,23Z"></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/company/fieldfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </li>
          </ul>
          <ul className="Footer_footerLinkList__1gXZw">
            <li>© 2021 Fieldfolio Pty Ltd</li>
          </ul>
        </section>
        <section>
          <ul className="Footer_footerLinkList__1gXZw">
            <li>
              <Link to="/terms" target="_blank" rel="noopener noreferrer">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy
              </Link>
            </li>
          </ul>
          <ul className="Footer_footerLinkList__1gXZw">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link
                to="https://help.fieldfolio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help
              </Link>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}

export default FooterBottom;
