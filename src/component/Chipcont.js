import React, { useEffect, useRef } from "react";
import VideoChip from "./Video-chip.mp4";
import "./css/Chipcont.css";

function Chipcont() {
  const vidRef = useRef();

  //   let callback = (entries, observer) => {
  //     // const video = document.querySelector(".chip-video");

  //     entries.forEach((entry) => {
  //       if (entry.target.className == "myvideo") {
  //         if (entry.isIntersecting) {
  //           entry.target.play();
  //         }
  //       } else {
  //         entry.target.pause();
  //       }
  //     });
  //   };

  //   useEffect(() => {
  //     const video = document.querySelector(".chip-video");

  //     let observer = new IntersectionObserver(callback, {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0.7,
  //     });
  //     observer.observe(video);
  //   }, []);
  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <div className="chip-main-cont">
      <div className="chip-cont">
        <video
          className="chip-video"
          src={VideoChip}
          ref={vidRef}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="chip-text-cont">
        <p className="chip-text-p">
          <span className="chip-text chip-text-1">The brand-new H2 chip </span>
          <span className="chip-text chip-text-2">
            carries out more functions than ever, using
          </span>{" "}
          <span className="chip-text chip-text-3">
            computational algorithms
          </span>{" "}
          <span className="chip-text chip-text-4">
            to deliver even smarter noise cancellation, superior
            three-dimensional sound and more efficient battery life — all at
            once.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Chipcont;
