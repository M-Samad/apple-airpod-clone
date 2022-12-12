import React, { useEffect, useRef } from "react";
import soundVid from "./Sound-vid.mp4";
import AirpodImg from "./2-airpods/audio_airpod__dni8q27q7tqq_large.jpg";
import "./css/Soundvid.css";

function Soundvid() {
  const vidRef = useRef();

  // window.addEventListener("scroll", function () {
  //   const soundvid = document.querySelector(".sound-video-1");
  //   if (window.pageYOffset > 1800 && window.pageYOffset < 4500) {
  //     soundvid.classList.add("sound-video");
  //   } else {
  //     soundvid.classList.remove("sound-video");
  //   }
  // });
  window.addEventListener("scroll", function () {
    const imageEl = document.querySelector(".image-video-1");

    if (window.pageYOffset > 7050 && window.pageYOffset < 7150) {
      imageEl.style.opacity = `1`;
    } else if (window.pageYOffset > 7150 && window.pageYOffset < 7850) {
      imageEl.style.opacity = `${(7850 - window.pageYOffset) / 700}`;
      imageEl.style.transform = `scale(${
        1 - Number(window.pageYOffset - 7150) / 2800
      })`;
    } else {
      imageEl.style.opacity = `0`;
      imageEl.style.transform = `scale(1)`;
    }
  });
  window.addEventListener("scroll", function () {
    const videoEl = document.querySelector(".sound-video-1");

    if (window.pageYOffset > 7050 && window.pageYOffset < 7150) {
      videoEl.style.opacity = `1`;
    } else if (window.pageYOffset > 7150 && window.pageYOffset < 7850) {
      videoEl.style.opacity = `${(7850 - window.pageYOffset) / 700}`;
      videoEl.style.transform = `scale(${
        1 - Number(window.pageYOffset - 7150) / 2800
      })`;
    } else {
      videoEl.style.opacity = `0`;
      videoEl.style.transform = `scale(1)`;
    }
  });

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <div>
      <img className="image-video-1" src={AirpodImg} alt="" />
      <video
        className="sound-video-1 "
        src={soundVid}
        ref={vidRef}
        loop
        muted
        autoPlay
      />
    </div>
  );
}

export default Soundvid;
