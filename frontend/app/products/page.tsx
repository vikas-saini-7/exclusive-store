"use client";
import ProductCard from "@/components/common/ProductCard";
import { ProductFiltersSidebar } from "@/components/products/ProductFiltersSidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  category: {
    name: string;
  };
}

const page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/products`);
      console.log("res", res.data);
      setProducts(res.data);
    } catch (error) {
      console.log("Error in get products by category", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container mx-auto px-8 flex">
      <div className="w-1/4 relative bg-gray-100 my-8 rounded">
        <ProductFiltersSidebar />
      </div>
      <div className="w-3/4 p-4 mt-4 grid grid-cols-4 gap-4 pl-8">
        {products?.map((product, index) => (
          <div key={index}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
