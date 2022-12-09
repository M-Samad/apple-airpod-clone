import React, { useState, useEffect } from "react";
import "./css/Airpodtext.css";

function Airpodstext() {
  //   const scrollText = function () {
  window.addEventListener("scroll", function () {
    const text = document.querySelector(".hero-lockup");
    text.style.transform = `scale(${1 + Number(window.pageYOffset) / 10000})`;
    if (window.pageYOffset >= 500) {
      text.style.opacity = `${(500 / window.pageYOffset) ** 4}`;
    } else if (window.pageYOffset > 800) {
      text.style.opacity = `0`;
    } else {
      text.style.opacity = `1`;
    }
  });
  //   };
  //   useEffect(() => {
  //     scrollText();
  //   }, []);

  //   requestAnimationFrame(() => {
  //     const text = document.querySelector(".hero-lockup");
  //     function getIntersectionRatio(i) {
  //       const a = [window.scrollY, window.scrollY + window.innerHeight];
  //       const b = [text.offsetTop, text.offsetTop + text.clientHeight];
  //       const max = Math.max(a[0], b[0]);
  //       const min = Math.min(a[1], b[1]);
  //       return Math.max(0, (min - max) / (b[1] - b[0]));
  //     }
  //     function onScroll() {
  //       const text = document.querySelector(".hero-lockup");

  //       const intersection = getIntersectionRatio(text);

  //       const top = text.offsetTop - window.pageYOffset < 0;
  //       text.style.cssText = `
  //                   transform-origin: ${top ? "center center" : "top center"};
  //                   position: ${top ? "fixed" : "fixed"};
  //                   transform: scale(${1 + 0.5 / intersection});
  //                   opacity: ${intersection};
  //                 `;

  //       requestAnimationFrame(onScroll);
  //     }
  //     onScroll();
  //   });

  return (
    <div className="hero-lockup">
      <div className="hero-lockup-inner">
        <p className="hero-eyebrow">All-new</p>
        <h1 className="hero-headline">AirPods Pro </h1>
        <div className="hero-announce hero-links-anim">
          <ul className="hero-links links-inline">
            <li>
              <a
                href="/105/media/in/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/films/under-the-spell/airpods-pro-under-the-spell-tpl-in-2022_16x9.m3u8"
                id="film-airpods-pro-2nd-gen"
                className="icon-wrapper hero-cta"
                role="button"
              >
                <span className="icon-copy">Watch the film</span>
                <span className="icon icon-after icon icon-playcircle"></span>
              </a>{" "}
            </li>
            <li>
              <a href="/in/apple-events/" className="icon-wrapper hero-cta">
                <span className="icon-copy">Watch the event</span>
                <span className="icon icon-after icon more"></span>
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Airpodstext;
