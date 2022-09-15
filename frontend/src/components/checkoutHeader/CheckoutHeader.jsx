import React from "react";
import { Link } from "react-router-dom";
import { getIconById, ICONS_ID } from "../../icons";
import { WebsiteLogo } from "../websiteLogo/WebsiteLogo";
import { MainWrapper } from "./checkoutHeader.styles";

export const CheckoutHeader = () => {
  return (
    <MainWrapper>
      <div className="wrap">
        <div className="column-one">
          <div className="logo">
            <a href="/store/" className="logo-a">
              <WebsiteLogo />
            </a>
            <a href="/store/" className="logo-b">
              <svg width="75" height="60">
                <use href="/store/skin/frontend/mnsv4/default/images/svg-icons/icons.svg#icon-logo"></use>
              </svg>
              <span className="is-hidden">
                Go to Store Homepage
              </span>
            </a>
          </div>
        </div>
        <div className="column-two">
          <h3>Best Prices &amp; Deals</h3>
        </div>
        <div className="column-three">
          <h3>Fast Shipping</h3>
        </div>
        <div className="column-four">
          <div className="logo">
            <Link to="/store">
              <svg
                viewBox=".60000002 .1 338.3999939 200.69999695"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#fff">
                  <path d="m184.2 111c-2.4 0-4 1.1-4.3 2.7-.3 1.2.7 2.3 2.5 3.9 3-1 4.8-1.9 5.3-4 .2-1.5-1.3-2.6-3.5-2.6z"></path>
                  <path d="m168.8 132.3c-.7 3.3 1.9 6 5.8 6 2.6 0 5.8-.8 7.1-1.6l-8.5-9.4c-2.7 1.1-3.9 2.6-4.4 5z"></path>
                  <path d="m328.9 97.2c4.1-27.8-16.8-43.1-75.4-43.1-27.5 0-51.9 3.8-67.7 15.6 9.3-9.6 22.7-15.2 38.6-18.1l9.6-45.5h-76.4l-39.4 79.8h-.4l-5.6-79.8h-76.3l-29.3 137.3h49.3l20.8-98.1h.4l8.1 98.1h41.2l49.6-98.1h.4l-16.7 78.8c2.2-1.3 4.8-2.2 7.9-2.8-2.6-2.4-3.1-4.7-2.6-7.2 1.2-5.6 6.9-10.6 20.3-10.6 8.9 0 16.7 2.8 15.2 10.2-1 4.8-5 7.7-11.8 9.2l5.8 6.6c4.7-3.1 7.3-5.5 10.3-8.1l5.8 6.2c-4.2 4.2-6.7 5.9-10.2 8.1l5 5.6 1.1-5.3 47.3 7.3c6.8 1.1 8.3 5 7.6 8.8-1.3 6.3-6.6 10.7-22.9 10.7-8.1 0-13.6-.9-17.1-2.8-3.3-2-4.2-5-3.5-9.4h-62.9c-8.1 38.7 34.5 44.2 74.5 44.2 58.4 0 87.7-15.1 94.6-47.2 4.8-22.3-8.9-34.5-34.3-38.3l-60.1-9.2c-5-.7-6.1-3.1-5.3-6.8 1.1-5.5 7.4-9.4 22.9-9.4 5.7 0 11.4.7 15.5 2.8 4.4 1.8 7 5.2 5.7 10.5z"></path>
                  <path d="m233 44.2h-2.3l.3-1.6h7l-.3 1.6h-2.3l-1 4.6h-2.4z"></path>
                  <path d="m238.6 42.6h3.4l.2 3.6 1.8-3.6h3.4l-1.3 6.2h-2.1l.9-4.4-2.2 4.4h-1.9l-.4-4.4-.9 4.4h-2.2z"></path>
                </g>
              </svg>{" "}
              <span className="is-hidden">
                Go to Store Homepage
              </span>
            </Link>
          </div>
        </div>
        <div className="column-five">
          <h3>7 Day Support</h3>
        </div>
        <div className="column-six">
          <h3>Satisfaction Guarantee</h3>
        </div>
        <div className="column-seven">
          {/* <svg viewBox="0 0 71 100">
            <g fill="#FFFFFF">
              <path d="m65.5 45v-15c0-16.542-13.458-30-30-30s-30 13.458-30 30v15h-5.5v55h71v-55h-5.5zm-52-15c0-12.131 9.869-22 22-22s22 9.869 22 22v15h-44v-15z" />
            </g>
          </svg> */}

          {getIconById(ICONS_ID.IconPadlock, null, "#FFFFFF")}
        </div>
      </div>
    </MainWrapper>
  );
};
