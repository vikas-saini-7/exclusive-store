import React from "react";
import SectionTitle from "../common/SectionTitle";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import ProductsListSwiper from "./ProductsListSwiper";
import ProductsListFixedSwiper from "./ProductsListFixedSwiper";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  stock: number;
  sku: string;
  imageUrl: string;
  isActive: boolean;
  categoryId: number;
}

type ProductsListFixedSectionProps = {
  title: string;
  products: Product[];
};

const ProductsListFixedSection: React.FC<ProductsListFixedSectionProps> = ({
  title,
  products,
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
      <ProductsListFixedSwiper products={products} />
      <div className="mb-8"></div>
      <ProductsListFixedSwiper products={products} />
    </div>
  );
};

export default ProductsListFixedSection;
