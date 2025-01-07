"use client";
import ProductCard from "@/components/common/ProductCard";
import axios from "axios";
import { useParams } from "next/navigation";
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
  const { categoryId } = useParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<any>({});

  const fecthCategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/categories/${categoryId}`
      );
      setCategory(res.data);
    } catch (error) {
      console.log("Error in get products by category", error);
    }
  };

  const fecthProductsByCategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/products/category/${categoryId}`
      );
      console.log("res", res.data);
      setProducts(res.data.products);
    } catch (error) {
      console.log("Error in get products by category", error);
    }
  };

  useEffect(() => {
    fecthCategory();
    fecthProductsByCategory();
  }, []);

  return (
    <div className="container mx-auto px-8">
      <h1 className="font-bold mt-8 p-2 px-3 bg-gray-100 w-fit rounded">
        Category: {category?.name}
      </h1>
      {products.length === 0 && (
        <div className="text-center my-12">No products found</div>
      )}
      <div className="grid grid-cols-4 gap-4 py-8">
        {products.map((product, index) => (
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
