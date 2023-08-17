import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="container" style={{ width: "80%" }}>
          <ul class="footer-list">
            <li>
              <a href="/" class="footer-link">
                Terms of use
              </a>
            </li>

            <li>
              <a href="/" class="footer-link">
                Privacy & Policy
              </a>
            </li>
          </ul>

          <p class="copyright">
            Copyright 2023{" "}
            <a href="/" class="copyright-link">
              Sahayata
            </a>
            . All Rights Reserved. |{" "}
            <a
              href="https://webfudgeagency.com"
              target="_blank"
              rel="noreferrer"
              className="copyright-link"
            >
              Design by WEBFUDGE
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
