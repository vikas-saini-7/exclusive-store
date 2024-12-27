import React from "react";
import SectionTitle from "../common/SectionTitle";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import ProductsListSwiper from "./ProductsListSwiper";
import ProductsListFixedSwiper from "./ProductsListFixedSwiper";

type ProductsListFixedSectionProps = {
  title: string;
};

const ProductsListFixedSection: React.FC<ProductsListFixedSectionProps> = ({
  title,
}) => {
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
      <ProductsListFixedSwiper />
      <div className="mb-8"></div>
      <ProductsListFixedSwiper />
    </div>
  );
};

export default ProductsListFixedSection;
