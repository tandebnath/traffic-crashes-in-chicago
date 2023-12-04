"use client";
import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [videoEnded, setVideoEnded] = useState(false);

//   useEffect(() => {
//     const videoElement: any = document.getElementById("hero-video");

//     const handleVideoEnd = () => {
//       setVideoEnded(true);
//     };

//     videoElement.addEventListener("ended", handleVideoEnd);

//     return () => {
//       videoElement.removeEventListener("ended", handleVideoEnd);
//     };
//   }, []);

  return (
    <div className={styles.hero}>
      <video
        id="hero-video"
        src="video.mp4"
        autoPlay
        className={styles.video}
        onEnded={() => setVideoEnded(true)}
      />
      {videoEnded && (
        <div className={styles.overlay}>
          <p className={styles.text}>Chicago</p>
          <p className={styles.subText}>Kinda fast, really furious</p>
        </div>
      )}
    </div>
  );
};

export default Hero;
