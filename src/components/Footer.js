/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/Footer.css";
import FooterBottom from "./FooterBottom";
function Footer() {
  return (
    <div className="iJiBDD">
      <footer className="MarketingFooter_footer__3vEwh">
        <div className="ResponsiveContainers__Base-sc-4w117l-0 ResponsiveContainers__WideContainer-sc-4w117l-3 ggAeeZ">
          <div className="MarketingFooter_footerRow__1cYIP">
            <div className="MarketingFooter_logoColumn__1xuHY MarketingFooter_footerColumn__2l1zp">
              <svg width="56" height="56" viewBox="0 0 48 48" className="">
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
            </div>
            <div className="MarketingFooter_footerColumn__2l1zp">
              <h4>For Wholesalers</h4>
              <ul>
                <li>
                  <a href="/wholesaler">Sell on Fieldfolio</a>
                </li>
                <li>
                  <a
                    href="https://help.fieldfolio.com/sellers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Seller Help
                  </a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
                <li>
                  <a href="/integrations/myob">MYOB Integration</a>
                </li>
                <li>
                  <a href="/integrations/xero">Xero Integration</a>
                </li>
              </ul>
            </div>
            <div className="MarketingFooter_footerColumn__2l1zp">
              <h4>For Retailers</h4>
              <ul>
                <li>
                  <a href="/retailer">Buy on Fieldfolio</a>
                </li>
                <li>
                  <a
                    href="https://help.fieldfolio.com/buyers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buyer Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="MarketingFooter_footerColumn__2l1zp">
              <h4>For Reps</h4>
              <ul>
                <li>
                  <a href="/for-reps">Sell on iPad</a>
                </li>
                <li>
                  <a
                    href="https://help.fieldfolio.com/reps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rep Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="MarketingFooter_footerColumn__2l1zp">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="/contact">Contact Support</a>
                </li>
                <li>
                  <a
                    href="https://help.fieldfolio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <FooterBottom />
    </div>
  );
}

export default Footer;
