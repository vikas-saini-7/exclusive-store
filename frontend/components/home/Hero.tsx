import React from "react";
import HeroSwiper from "./HeroSwiper";

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-8 flex mb-24">
      <div className="w-1/5 border-r pt-12">cateories.map</div>
      <div className="w-4/5 pt-12 pl-12">
        <HeroSwiper />
      </div>
    </div>
  );
};

export default Hero;
