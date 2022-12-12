import React from "react";
import "./css/globalnav.css";

function NavbarGlobal() {
  return (
    <nav className="nav-global">
      <div className="nav-container">
        <div className="nav-menu">
          <li className="nav-link logo">
            <a className="link-a" href="https://www.apple.com/in"></a>
          </li>
          <li className="nav-link">
            <a className="link-a" href="https://www.apple.com/in/store">
              Store
            </a>
          </li>
          <li className="nav-link">
            <a className="link-a" href="https://www.apple.com/in/mac">
              Mac
            </a>
          </li>
          <li className="nav-link">
            <a className="link-a" href="https://www.apple.com/in/ipad">
              iPad
            </a>
          </li>
          <li className="nav-link">
            <a className="link-a" href="https://www.apple.com/in/iphone">
              iPhone
            </a>
          </li>
          <li className="nav-link">
            <a className="link-a" href="https://www.apple.com/in/watch">
              Watch
            </a>
          </li>
          <li className="nav-link">
            <a className="link-a" href="https://www.apple.com/in/airpods">
              AirPods
            </a>
          </li>
          <li className="nav-link">
            <a className="link-a" href="https://www.apple.com/in/tv-home">
              TV & Home
            </a>
          </li>
          <li className="nav-link">
            <a className="link-a" href="https://www.apple.com/in/services">
              Only on Apple
            </a>
          </li>
          <li className="nav-link">
            <a
              className="link-a"
              href="https://www.apple.com/in/shop/accessories/all"
            >
              Accessories
            </a>
          </li>
          <li className="nav-link">
            <a className="link-a" href="https://support.apple.com/en-in">
              Support
            </a>
          </li>
          <li className="nav-link search">
            <a className="link-a" href="#"></a>
          </li>
          <li className="nav-link bag">
            <a className="link-a" href="#"></a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default NavbarGlobal;
