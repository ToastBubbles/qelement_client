import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-top">
          <div>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="footer-bottom"></div>
      </div>
    </>
  );
}

export default Footer;
