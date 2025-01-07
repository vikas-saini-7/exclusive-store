"use client";
import { Button } from "@/components/ui/button";
import { AppDispatch, RootState } from "@/store";
import { addToCart } from "@/store/actions/cartActions";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  stock: number;
  sku: string;
  imageUrl: string;
  imageGallery: string[];
  isActive: boolean;
  categoryId: number;
  rating: number;
  reviews: number;
  specifications: Record<string, string>;
}

const Page: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fetchProductDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/products/${id}`);
      setProduct(res.data);
      setSelectedImage(res.data.imageUrl);
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

  const handleAddToCart = () => {
    if (userId) {
      const productId = id ? parseInt(id.toString(), 10) : null;
      if (productId) {
        dispatch(addToCart({ userId, productId }));
      }
    }
  };

  const imageGallery = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
      id: 2,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSaeeuATs2HHkPixz7joKH-Y3OFQozZa6Yg&s",
    },
    {
      id: 3,
      imageUrl:
        "https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-8 py-12">
      {product && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-co items-center">
            <div className="flex flex-col gap-4 w-1/6 p-4">
              {imageGallery?.map((img, index) => (
                <img
                  key={index}
                  src={img.imageUrl}
                  alt={`${product.name} ${index}`}
                  className="w-full aspect-square object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-500"
                  onClick={() => setSelectedImage(img.imageUrl)}
                />
              ))}
            </div>
            <div className="w-5/6">
              <img
                src={selectedImage || product.imageUrl}
                alt={product.name}
                className="w-full h-auto aspect-square object-cover border rounded-lg mb-4"
              />
            </div>
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
                <span className="text-3xl font-semibold">₹{product.price}</span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-4">SKU: {product.sku}</p>
            <p className="text-lg mb-4">
              Rating: {product.rating} ⭐ ({product.reviews} reviews)
            </p>
            <p
              className={`text-lg mb-4 ${
                product.stock > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.stock > 0
                ? `In Stock (${product.stock})`
                : "Out of Stock"}
            </p>
            <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
            {/* <ul className="list-disc list-inside mb-6">
              {Object?.entries(product.specifications)?.map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul> */}
            <div className="space-x-4">
              <Button
                className={`mt-6 px-8 py-4 text-white rounded-lg shadow-lg ${
                  product.stock > 0 ? "" : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={product.stock <= 0}
                onClick={handleAddToCart}
              >
                {product.stock > 0 ? "Add to Cart" : "Unavailable"}
              </Button>
              <Button>Buy Now</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
