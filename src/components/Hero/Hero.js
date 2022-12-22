import React from "react";
import { Hero2 } from "./Styled";

const Hero = () => {
  return (
    <Hero2>
      <iframe
        width="1481"
        height="600"
        src="https://www.youtube.com/embed/K8UfiTKVsK4?mute=1&loop=1&autoplay=1&controls=0&playlist=K8UfiTKVsK4"
        title="Yashahime: Princess Half-Demon Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="hero">
        <h1>How much do you like the InuYasha anime?</h1>
        <p>Merchandise a "click" away</p>
      </div>
    </Hero2>
  );
};

export default Hero;
