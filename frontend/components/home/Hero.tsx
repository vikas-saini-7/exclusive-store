"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroSwiper from "./HeroSwiper";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const Hero: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto px-8 flex mb-24">
      <div className="w-1/5 border-r pt-12 space-y-3">
        {categories.slice(0, 10).map((category, index) => (
          <Link href={`/products/category/${category.id}`} className="block" key={index}>
            <div
              key={index}
              className="text-lg hover:text-red-500 cursor-pointer"
            >
              {category.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="w-4/5 pt-12 pl-12">
        <HeroSwiper />
      </div>
    </div>
  );
};

export default Hero;
