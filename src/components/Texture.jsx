import React from "react";
import backgroundImage from "../assets/texture.png"; 

const Texture = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center  z-1 opacity-80"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default Texture;
