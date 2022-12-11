import React from "react";
import Video from "./VideoMan.webm";

function VideoMan() {
  function scrollVideo() {
    const video = document.querySelector("#video");
    console.log(video);
    const videoLength = video.duration;
    const scrollPosition = video.scrollTop();
    video.currentTime =
      (scrollPosition / (video.height() - window.height())) * videoLength;
  }
  window.scroll(function (e) {
    scrollVideo();
  });

  return <div>{/* <video id="video" src={Video}></video> */}</div>;
}

export default VideoMan;
