import React from "react";
import { Button } from "../ui/button";

const MusicBanner: React.FC = () => {
  return (
    <div className="container mx-auto flex  flex-col md:flex-row items-center justify-between bg-black text-white my-20 p-12">
      <div className="w-1/2 space-y-8">
        <p className="text-[#00FF66] font-bold text-lg">Categories</p>
        <p className="font-bold text-6xl">
          Enhance Your <br /> Music Experience
        </p>
        <div>TIMER HERE...</div>
        <Button>Shop Now</Button>
      </div>
      <div className="w-1/2 relative flex items-center justify-center">
        <div
          className="absolute w-[720px] h-[720px]"
          style={{
            background:
              "radial-gradient(circle, #FFFFFF70 0%, transparent 70%)",
          }}
        ></div>
        <img className="relative z-20" src="/images/music_banner.png" alt="" />
      </div>
    </div>
  );
};

export default MusicBanner;
