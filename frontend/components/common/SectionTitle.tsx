import React from "react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h1 className="text-3xl font-bold mb-6">{title}</h1>;
};

export default SectionTitle;
