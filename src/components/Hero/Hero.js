import React from "react";
import { Hero2 } from "./Styled";

const Hero = () => {
  return (
    <Hero2>
      <iframe
        width="1481"
        height="593"
        src="https://www.youtube.com/embed/yc3356aM6gI?mute=1&loop=1&autoplay=1&controls=0&playlist=yc3356aM6gI"
        title="Yashahime: Princess Half-Demon Opening 1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="hero">
        <h1>How much do you like the InuYasha anime?</h1>
        <p>Merchandise a "click" away</p>
      </div>
    </Hero2>
  );
};

export default Hero;
