import React from "react";

type SectionTitleTopProps = {
  title: string;
};

const SectionTitleTop: React.FC<SectionTitleTopProps> = ({ title }) => {
  return (
    <div className="container mx-auto px-8 flex items-center mb-6">
      <span className="h-10 w-4 bg-red-500 rounded"></span>
      <div className="pl-4 font-bold text-red-500">{title}</div>
    </div>
  );
};

export default SectionTitleTop;
