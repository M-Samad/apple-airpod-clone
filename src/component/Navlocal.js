import React, { useEffect } from "react";
import "./css/localnav.css";

function Navlocal() {
  const stickyLocalNav = function (entries) {
    const airpodesNav = document.querySelector(".airpodes-nav");
    const localNav = document.querySelector(".airpodes-container");
    const [entry] = entries;

    if (!entry.isIntersecting) {
      airpodesNav.classList.add("sticky-local-nav");
      localNav.classList.add("airpodes-container-bottom");
    } else {
      airpodesNav.classList.remove("sticky-local-nav");
      localNav.classList.remove("airpodes-container-bottom");
    }
  };

  useEffect(() => {
    const navGlobal = document.querySelector(".nav-global");
    const observer = new IntersectionObserver(stickyLocalNav, {
      root: null,
      threshold: 0,
    });
    observer.observe(navGlobal);
  }, []);

  return (
    <nav className="airpodes-nav">
      <div className="airpodes-container">
        <div className="airpodes-nav-content">
          <li className="airpodes-nav-title">
            <a className="airpodes" href="">
              AirPods Pro (2nd generation)
            </a>
          </li>
        </div>
        <div className="local-nav">
          <li className="airpodes-nav-title">
            <a className="local-nav-content" href="">
              Overview
            </a>
          </li>
          <li className="airpodes-nav-title">
            <a className="local-nav-content" href="">
              Tech Specs
            </a>
          </li>
          <li className="airpodes-nav-title">
            <a className="local-nav-content" href="">
              Compare
            </a>
          </li>
          <li className="airpodes-nav-title">
            <a className="" href="">
              <button className="buy-button">Buy</button>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navlocal;
