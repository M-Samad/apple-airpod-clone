import React, { useEffect, useRef } from "react";
import soundVid from "./Sound-vid.mp4";
import "./css/Soundvid.css";

function Soundvid() {
  const vidRef = useRef();

  window.addEventListener("scroll", function () {
    const soundvid = document.querySelector(".sound-video-1");
    if (window.pageYOffset > 1800 && window.pageYOffset < 4500) {
      soundvid.classList.add("sound-video");
    } else {
      soundvid.classList.remove("sound-video");
    }
  });

  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <div>
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
