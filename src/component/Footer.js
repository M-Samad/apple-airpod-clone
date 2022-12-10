import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <nav className="footer-menu">
          <div className="footer-col">
            <div className="item">
              <input type="checkbox" id="products" />
              <div className="col-section">
                <label htmlFor="products">
                  <h3>Shop and learn</h3>
                </label>
                <ul className="product-list">
                  <li>
                    <a href="#">Mac</a>
                  </li>
                  <li>
                    <a href="#">iPad</a>
                  </li>
                  <li>
                    <a href="#">iPhone</a>
                  </li>
                  <li>
                    <a href="#">Watch</a>
                  </li>
                  <li>
                    <a href="#">TV</a>
                  </li>
                  <li>
                    <a href="#">Music</a>
                  </li>
                  <li>
                    <a href="#">iTunes</a>
                  </li>
                  <li>
                    <a href="#">HomePod</a>
                  </li>
                  <li>
                    <a href="#">iPod touch</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">Gift Cards</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <div className="item">
              <input type="checkbox" id="store" />
              <div className="col-section">
                <label htmlFor="store">
                  <h3>Apple Store</h3>
                </label>
                <ul className="product-list">
                  <li>
                    <a href="#">Find a Store</a>
                  </li>
                  <li>
                    <a href="#">Genius Bar</a>
                  </li>
                  <li>
                    <a href="#">Today at Apple</a>
                  </li>
                  <li>
                    <a href="#">Apple Camp</a>
                  </li>
                  <li>
                    <a href="#">Field Trip</a>
                  </li>
                  <li>
                    <a href="#">Apple Store App</a>
                  </li>
                  <li>
                    <a href="#">Refurbished and Clearance</a>
                  </li>
                  <li>
                    <a href="#">Financing</a>
                  </li>
                  <li>
                    <a href="#">Reuse and Recycling</a>
                  </li>
                  <li>
                    <a href="#">Order Status</a>
                  </li>
                  <li>
                    <a href="#">Shopping Help</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <div className="item">
              <input type="checkbox" id="education" />
              <div className="col-section">
                <label htmlFor="education">
                  <h3>For Education</h3>
                </label>
                <ul className="product-list">
                  <li>
                    <a href="#">Apple and Education</a>
                  </li>
                  <li>
                    <a href="#">Shop for College</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item item-padding-top">
              <input type="checkbox" id="business" />
              <div className="col-section">
                <label htmlFor="business">
                  <h3>For Business</h3>
                </label>
                <ul className="product-list">
                  <li>
                    <a href="#">Apple and Business</a>
                  </li>
                  <li>
                    <a href="#">Shop for Business</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <div className="item">
              <input type="checkbox" id="acccount" />
              <div className="col-section">
                <label htmlFor="acccount">
                  <h3>Account</h3>
                </label>
                <ul className="product-list">
                  <li>
                    <a href="#">Manage Your Apple ID</a>
                  </li>
                  <li>
                    <a href="#">Apple Store Account</a>
                  </li>
                  <li>
                    <a href="#">iCloud.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item item-padding-top">
              <input type="checkbox" id="values" />
              <div className="col-section">
                <label htmlFor="values">
                  <h3>Apple Values</h3>
                </label>
                <ul className="product-list">
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Education</a>
                  </li>
                  <li>
                    <a href="#">Environment</a>
                  </li>
                  <li>
                    <a href="#">Inclusion and Diversity</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Supplier Responsibility</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <div className="item">
              <input type="checkbox" id="about" />
              <div className="col-section">
                <label htmlFor="about">
                  <h3>About Apple</h3>
                </label>
                <ul className="product-list">
                  <li>
                    <a href="#">Newsroom</a>
                  </li>
                  <li>
                    <a href="#">Apple Leadership</a>
                  </li>
                  <li>
                    <a href="#">Job Opportunities</a>
                  </li>
                  <li>
                    <a href="#">Investors</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Contact Apple</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <section className="footer-base">
          <div className="footer-more-ways" x-ms-format-detection="none">
            More ways to shop: Visit an <a href="/retail/">Apple Store</a>,{" "}
            <span className="nowrap">
              call 1-800-MY-APPLE, or <a href="#">find a reseller</a>
            </span>
            .
          </div>
          <div className="footer-legal">
            <div className="footer-legal-copyright">
              Copyright © 2018 Apple Inc. All rights reserved.
            </div>
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Sales and Refunds</a>
              <a href="#">Legal</a>
              <a href="#">Site Map</a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
