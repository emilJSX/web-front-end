import React from "react";
import { FooterComponent } from "./Footer.Styled";
import { ReactComponent as WishLogo } from "../../../style/icons/wish-x-white-logo.svg";
import { socialIcons } from "../../../utils/soicla-icons-all";
import { headerLists } from "../../../utils/dummy-data/header-list";
import { Link } from "react-router-dom";
import { Text } from "@mantine/core";

export const Footer = () => {
  return (
    <FooterComponent>
      <section className="footer-head">
        <WishLogo />
        <ul>
          {headerLists.map((e) => (
            <li key={e.name}>
              <Link to={e.href} className={"footer-links"}>
                {e.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <li>{socialIcons.fb}</li>
          <li>{socialIcons.instagram}</li>
          <li>{socialIcons.twitter}</li>
          <li>{socialIcons.tiktok}</li>
        </ul>
      </section>

      <section className="footer-main">
        <div>
          <p id="1">Make</p>
          <p id="p2">wishes</p>
          <p id="3">come true</p>
        </div>
      </section>
      <section className="footer-bottom">
        <div>
          <p>© WishX 2019 – 2022</p>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="bottom-connector"></div>
        <div>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/">Made with love</Link>
        </div>
      </section>

      <section className="bottom-sm">
        <div className="private-poice">
          <Link to="/privacy" className="private-police-title">
            Privacy Policy
          </Link>
          <div className="bottom-connector"></div>
          <Link to="/terms" className="treams-of-service">
            Terms of Service
          </Link>
        </div>
        <div>
          <p>© WishX 2019 – 2022</p>
          <Link>Made with love</Link>
        </div>
      </section>
    </FooterComponent>
  );
};
