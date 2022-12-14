import React, { useState, useEffect } from "react";
import "./css/Airpodtext.css";

function Airpodstext() {
  window.addEventListener("scroll", function () {
    const text = document.querySelector(".hero-lockup");
    const rebuit = document.querySelector(".hero-rebuilt");
    text.style.transform = `scale(${1 + Number(window.pageYOffset) / 10000})`;
    if (window.pageYOffset >= 500 && window.pageYOffset <= 1000) {
      text.style.opacity = `${(500 / window.pageYOffset) ** 4}`;
    } else if (window.pageYOffset >= 1000 && window.pageYOffset <= 1200) {
      text.style.opacity = `0`;
      rebuit.style.opacity = `${(window.pageYOffset - 1000) / 200}`;
      // rebuit.style.opacity = `${(Number(window.pageYOffset) - 799) / 200}`;
    } else if (window.pageYOffset >= 1200 && window.pageYOffset <= 1400) {
      text.style.opacity = `0`;
      rebuit.style.opacity = `${(1400 - window.pageYOffset) / 200}`;
    } else if (window.pageYOffset >= 1400) {
      text.style.opacity = `0`;
      rebuit.style.opacity = `0`;
    } else {
      text.style.opacity = `1`;
      rebuit.style.opacity = `0`;
    }
  });
  window.addEventListener("scroll", function () {
    if (this.window.pageYOffset >= 1000) {
      const rebuit = document.querySelector(".hero-rebuilt");
      rebuit.style.transform = `scale(${
        1 + Number(window.pageYOffset - 1000) / 1000
      })`;
    }
  });

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
    <div className="text-container">
      <h1 className="hero-rebuilt">Rebuilt from the sound up.</h1>
      <div className="hero-lockup">
        <div className="hero-lockup-inner">
          <p className="hero-eyebrow">All-new</p>
          <h1 className="hero-headline">AirPods Pro </h1>

          <div className="hero-announce hero-links-anim">
            <span className="icon-copy">Watch the film</span>

            <span className="icon-copy">Watch the event</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airpodstext;
