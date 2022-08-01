import React from "react";
import { getIconById, ICONS_ID } from "../../icons";
import { MainWrapper } from "./footer.styles";

export const Footer = () => {
  return (
    <MainWrapper>
      <div class="footer-main">
        <div class="footer-main--inner">
          <div class="grid-x grid-margin-x">
            <div class="cell small-6 medium-3 large-2">
              <h6>Customer Service</h6>
              <ul>
                <li>
                  <a
                    rel="nofollow"
                    href="https://support.muscleandstrength.com"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="https://support.muscleandstrength.com/hc/en-us/articles/4410315657367"
                  >
                    Track Your Order
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="/store/customer/account/login"
                  >
                    Account Login
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="https://support.muscleandstrength.com/hc/en-us/articles/4409534729879-Returns-Exchanges-Policy"
                  >
                    Returns &amp; Exchanges
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="https://support.muscleandstrength.com/hc/en-us/requests/new"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="cell small-6 medium-3 large-2">
              <h6>Follow</h6>
              <ul class="social-links">
                <li>
                  <a
                    rel="nofollow"
                    href="http://www.youtube.com/muscleandstrength"
                  >
                    <span class="visually-hidden">
                      Subscribe to us on Youtube
                    </span>
                    {/* <svg>
                      <use href="/sites/all/themes/mnsnew/icons.svg#icon-youtube"></use>
                    </svg> */}
                    {getIconById(ICONS_ID.IconYoutube)}
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="http://instagram.com/muscleandstrength"
                  >
                    <span class="visually-hidden">
                      Follow us on Instagram
                    </span>
                    {getIconById(ICONS_ID.IconInstagram)}
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="http://pinterest.com/musclestrength/"
                  >
                    <span class="visually-hidden">
                      Follow us on Pinterest
                    </span>
                    {getIconById(ICONS_ID.IconPinterest)}
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="http://www.facebook.com/muscleandstrength"
                  >
                    <span class="visually-hidden">
                      Like us on Facebook
                    </span>
                    {getIconById(ICONS_ID.IconFacebook)}
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="http://www.twitter.com/Muscle_Strength"
                  >
                    <span class="visually-hidden">
                      Follow us on Twitter
                    </span>
                    {getIconById(ICONS_ID.IconTwitter)}
                  </a>
                </li>
              </ul>
            </div>
            <div class="cell small-6 medium-3 large-2">
              <h6>About</h6>
              <ul>
                <li>
                  <a rel="nofollow" href="/about">
                    About Us
                  </a>
                </li>
                <li>
                  <a rel="nofollow" href="/store/rewards">
                    Rewards Program
                  </a>
                </li>
                <li>
                  <a rel="nofollow" href="/careers">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div class="cell small-6 medium-3 large-2">
              <h6>Work With Us</h6>
              <ul>
                <li>
                  <a rel="nofollow" href="/writers">
                    Contribute to M&amp;S
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="/store/affiliate-program"
                  >
                    Affiliate Program
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom--inner">
          <p>
            © 2006-2022,
            <span>Muscle &amp; Strength, LLC.</span>
            <span>
              1180 First Street South Ext, Columbia, SC, 29209.
            </span>
            Phone: 1-800-537-9910
          </p>
          <p>
            <a
              rel="nofollow"
              href="https://www.iubenda.com/terms-and-conditions/27031375"
            >
              Terms of Use
            </a>{" "}
            -
            <a
              rel="nofollow"
              href="https://www.iubenda.com/privacy-policy/27031375"
              class="iubenda-nostyle no-brand iubenda-embed "
              title="Privacy Policy"
            >
              Privacy Policy
            </a>{" "}
            -
            <a
              rel="nofollow"
              href="https://www.iubenda.com/privacy-policy/27031375/cookie-policy"
              class="iubenda-nostyle no-brand iubenda-embed "
              title="Cookie Policy"
            >
              Cookie Policy
            </a>{" "}
            -
            <a
              rel="nofollow"
              href="/accessibility-statement"
              title="Accessibility Statement"
            >
              Accessibility Statement
            </a>
            -{" "}
            <a
              rel="nofollow"
              href="#here"
              class="iubenda-cs-preferences-link"
              title="Tracking Preferences"
              data-iub-enabled="1"
            >
              Tracking Preferences
            </a>
          </p>
          <img
            class=" lazyloaded"
            data-src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/brettandmeganfooter.png"
            alt="Muscle &amp; Strength"
            src="https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/brettandmeganfooter.png"
          />
        </div>
      </div>
    </MainWrapper>
  );
};
