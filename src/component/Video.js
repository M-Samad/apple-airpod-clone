import React, { useEffect, useRef } from "react";
import "./css/video.css";
import video from "./css/AirPods-video.mp4";

function Video() {
  const vidRef = useRef();

  window.addEventListener("scroll", function () {
    const videoEl = this.document.querySelector(".video-bg");
    if (window.pageYOffset > 1300 && window.pageYOffset < 2800) {
      videoEl.classList.add("video");
    } else {
      videoEl.classList.remove("video");
    }
  });

  window.addEventListener("scroll", function () {
    const videoEl = this.document.querySelector(".video-bg");
    if (window.pageYOffset > 1300 && window.pageYOffset < 1400) {
      videoEl.style.opacity = `${(window.pageYOffset - 1300) / 200}`;
    } else if (window.pageYOffset > 2200 && window.pageYOffset < 2400) {
      videoEl.style.opacity = `${(2400 - window.pageYOffset) / 200}`;
    }
  });
  window.addEventListener("scroll", function () {
    const text1 = document.querySelector(".text-cont-1");
    const text2 = document.querySelector(".text-cont-2");
    const text3 = document.querySelector(".text-cont-3");
    const text4 = document.querySelector(".text-cont-4");
    const text5 = document.querySelector(".text-cont-5");

    if (window.pageYOffset > 1300 && window.pageYOffset < 1750) {
      text1.style.opacity = 1;
      text2.style.opacity = 0.2;
      text3.style.opacity = 0.2;
      text4.style.opacity = 0.2;
      text5.style.opacity = 0.2;
    } else if (window.pageYOffset > 1750 && window.pageYOffset < 1900) {
      text2.style.opacity = 1;
      text1.style.opacity = 0.2;
      text3.style.opacity = 0.2;
      text4.style.opacity = 0.2;
      text5.style.opacity = 0.2;
    } else if (window.pageYOffset > 1900 && window.pageYOffset < 2050) {
      text3.style.opacity = 1;
      text1.style.opacity = 0.2;
      text2.style.opacity = 0.2;

      text4.style.opacity = 0.2;
      text5.style.opacity = 0.2;
    } else if (window.pageYOffset > 2050 && window.pageYOffset < 2200) {
      text4.style.opacity = 1;
      text1.style.opacity = 0.2;
      text2.style.opacity = 0.2;
      text3.style.opacity = 0.2;

      text5.style.opacity = 0.2;
    } else if (window.pageYOffset > 2200 && window.pageYOffset < 2600) {
      text5.style.opacity = 1;
      text1.style.opacity = 0.2;
      text2.style.opacity = 0.2;
      text3.style.opacity = 0.2;
      text4.style.opacity = 0.2;
    }
  });

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <React.Fragment>
      <video
        className="video-bg "
        src={video}
        ref={vidRef}
        loop
        muted
        autoPlay
      />

      <div className="video-box">
        <div className="video-container">
          <span className="text-cont-1">
            AirPods Pro have been re-engineered for even richer audio
            experiences.
          </span>
          <span className="text-cont-2">
            Next-level Active Noise Cancellation and Adaptive Transparency
            reduce more external noise.
          </span>
          <span className="text-cont-3">
            Spatial Audio takes immersion to a remarkably personal level.
          </span>
          <span className="text-cont-4">
            Touch control now lets you adjust volume with a swipe.
          </span>
          <span className="text-cont-5">
            And a leap in power delivers 6 hours of battery life from a single
            charge.
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Video;
