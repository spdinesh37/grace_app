import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const videoId = "CORr_aAQRzw";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0`;

  return (
    <section className="hero-container">
      <div className="video-background">
        <iframe
          src={embedUrl}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Background Video"
        ></iframe>
      </div>
      <div className="hero-content">
        <h1>Welcome to My Static Page</h1>
        <p>Enjoy the video in the background</p>
      </div>
    </section>
  );
}
