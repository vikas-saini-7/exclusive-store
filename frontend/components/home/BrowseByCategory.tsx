import React from "react";
import SectionTitle from "../common/SectionTitle";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

type ProductsListSectionProps = {
  title: string;
};

const Data = [
  { id: 1, name: "Phones", image: "category_phones.png" },
  { id: 2, name: "Computers", image: "category_computer.png" },
  { id: 3, name: "SmartWatch", image: "category_smartwatch.png" },
  { id: 4, name: "Camera", image: "category_camera.png" },
  { id: 5, name: "Hadphones", image: "category_headphones.png" },
  { id: 6, name: "Gaming", image: "category_gaming.png" },
];

const BrowseByCategory: React.FC<ProductsListSectionProps> = ({ title }) => {
  return (
    <div>
      <div className="flex items-center justify-between container mx-auto px-8">
        <SectionTitle title={title} />
        <div className="flex items-center space-x-4 mb-6">
          <div className="cursor-pointer p-2 bg-gray-100 rounded-full">
            <IconArrowLeft />
          </div>
          <div className="cursor-pointer p-2 bg-gray-100 rounded-full">
            <IconArrowRight />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center container mx-auto mt-8">
        {Data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center w-1/6 h-32 border border-gray-300 rounded mx-4 gap-2 hover:bg-red-500 cursor-pointer"
          >
            <img src={`images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
