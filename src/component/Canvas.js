import React, { useEffect, useState } from "react";
import "./css/canvas.css";

function Canvas() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollLen = Math.ceil(((scrollpx / winHeightPx) * 100) / 1.6);

    setScrolled(scrollLen);
  };

  return (
    <div className="App">
      <div className="App-header">
        <img
          className="airpod-images"
          src={require(`./images/${scrolled.toString().padStart(4, "0")}.png`)}
          alt=""
        />
      </div>
    </div>
  );
}

export default Canvas;
