"use client";
import { Button } from "@/components/ui/button";
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
}

const Page: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProductDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching product details", error);
      setError("Failed to fetch product details.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto px-8 py-12">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto px-8 py-12 text-red-500">{error}</div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-12">
      {product && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            <div className="flex items-center mb-6">
              {product.discount > 0 ? (
                <>
                  <span className="text-3xl font-semibold text-gray-500 mr-4">
                    ₹{product.price - (product.price * product.discount) / 100}
                  </span>
                  <span className="text-xl line-through text-gray-500">
                    ₹{product.price}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-semibold">${product.price}</span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-4">SKU: {product.sku}</p>
            <p
              className={`text-lg ${
                product.stock > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.stock > 0
                ? `In Stock (${product.stock})`
                : "Out of Stock"}
            </p>
            <Button
              className={`mt-6 px-8 py-4 text-white rounded-lg shadow-lg ${
                product.stock > 0 ? "" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={product.stock <= 0}
            >
              {product.stock > 0 ? "Add to Cart" : "Unavailable"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
