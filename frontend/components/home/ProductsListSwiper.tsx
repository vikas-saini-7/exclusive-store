"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ProductCard from "../common/ProductCard";

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

interface ProductsListSwiperProps {
  products: Product[];
}

const ProductsListSwiper: React.FC<ProductsListSwiperProps> = ({
  products,
}) => {
  return (
    <div className="container mx-auto px-8">
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx}>
            <ProductCard
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              discount={product.discount}
              stock={product.stock}
              sku={product.sku}
              imageUrl={product.imageUrl}
              isActive={product.isActive}
              categoryId={product.categoryId}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsListSwiper;
