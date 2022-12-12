import React from "react";
import "./css/Airpodtwice.css";
import image2 from "./2-airpods/audio_airpod_guts_bottom__bfet1uy1eg0y_large.jpg";
import image1 from "./2-airpods/audio_airpod_guts_top__d2is2iiz9l6q_large.jpg";

function Airpodtwice() {
  // window.addEventListener("scroll", function () {
  //   const videoEl1 = document.querySelector(".image-1");

  //   if (window.pageYOffset > 5570 && window.pageYOffset < 6500) {
  //     // videoEl1.style.position = "fixed";
  //     // videoEl1.style.top = "130px";
  //     // videoEl1.style.left = "550px";
  //     videoEl1.style.opacity = "1";
  //   } else {
  //     videoEl1.style.opacity = "0";
  //   }
  // });
  // window.addEventListener("scroll", function () {
  //   const videoEl2 = document.querySelector(".image-2");

  //   if (window.pageYOffset > 5570 && window.pageYOffset < 6500) {
  //     videoEl2.style.opacity = "1";

  //     // videoEl2.style.position = "fixed";
  //     // videoEl2.style.top = "130px";
  //     // videoEl2.style.left = "550px";
  //   } else {
  //     videoEl2.style.opacity = "0";
  //   }
  // });
  window.addEventListener("scroll", function () {
    const videoEl1 = document.querySelector(".image-1");
    const videoEl2 = document.querySelector(".image-2");

    if (window.pageYOffset > 5150 && window.pageYOffset < 5850) {
      videoEl1.style.opacity = `${(window.pageYOffset - 5150) / 700}`;
    } else if (window.pageYOffset > 5850 && window.pageYOffset < 6250) {
      videoEl1.style.opacity = `${(6250 - window.pageYOffset) / 400}`;
    } else if (window.pageYOffset > 6250 && window.pageYOffset < 6650) {
      videoEl2.style.opacity = `${(window.pageYOffset - 6250) / 400}`;
    } else if (window.pageYOffset > 6650 && window.pageYOffset < 7050) {
      videoEl2.style.opacity = `${(7050 - window.pageYOffset) / 400}`;
    } else {
      videoEl2.style.opacity = `0`;
      videoEl1.style.opacity = `0`;
    }
  });

  return (
    <>
      <div class="copy xray-copy guts-1">
        <span style={{ opacity: 0.5 }} tabindex="-1">
          The chip uses powerful{" "}
        </span>
        <strong style={{ opacity: 1 }}>new adaptation algorithms</strong>
        <span style={{ opacity: 0.5 }}>
          {" "}
          to process sound more quickly, tuning audio at the precise moment you
          hear it. Every detail is rendered for your specific ear shape,
          immersing you in{" "}
        </span>
        <span>
          <strong style={{ color: "rgb(2, 168, 2)" }} class="green-text">
            higher‑fidelity&nbsp;sound
          </strong>
          .
        </span>
      </div>
      <div class="copy xray-copy guts-2">
        <strong>A redesigned inward-facing microphone</strong>{" "}
        <span style={{ opacity: 0.5 }} className="opac-trans" tabindex="-1">
          {" "}
          works with voice enhancement algorithms to better recognise and
          articulate your voice, so it{" "}
        </span>
        <span style={{ color: "rgb(2, 168, 2)" }} class="green-text">
          sounds more natural
        </span>{" "}
        <span style={{ opacity: 0.5 }}>
          when you’re on phone and video&nbsp;calls.
        </span>
      </div>
      <div class="copy xray-copy guts-3">
        <strong>A custom-built driver and amplifier</strong>{" "}
        <span style={{ opacity: 0.5 }} className="opac-trans" tabindex="-1">
          {" "}
          work with the{" "}
        </span>
        <strong style={{ color: "rgb(2, 168, 2)" }} class="green-text">
          H2&nbsp;chip
        </strong>{" "}
        <span style={{ opacity: 0.5 }}>
          {" "}
          to provide lower distortion during playback, so you’ll hear deeper
          bass and crisper highs — across all volume&nbsp;levels.
        </span>
      </div>
      <div className="image-1">
        <img className="airpod-twice-image-1" src={image1} alt="" />
      </div>
      <div className="image-2">
        <img className="airpod-twice-image-1" src={image2} alt="" />
      </div>
    </>
  );
}

export default Airpodtwice;
