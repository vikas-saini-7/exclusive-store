"use client";
import { useEffect, useState } from "react";
import SectionTitleTop from "@/components/common/SectionTitleTop";
import BrowseByCategory from "@/components/home/BrowseByCategory";
import FeaturedSection from "@/components/home/FeaturedSection";
import Hero from "@/components/home/Hero";
import Information from "@/components/home/Information";
import MusicBanner from "@/components/home/MusicBanner";
import ProductsListFixedSection from "@/components/home/ProductsListFixedSection";
import ProductsListSection from "@/components/home/ProductsListSection";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

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

export default function Home() {
  const [flashProducts, setFlashProducts] = useState<Product[]>([]);
  const [bestSellingProducts, setbestSellingProducts] = useState<Product[]>([]);

  // get flash products
  const fetchFlashProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products");
      setFlashProducts(res.data);
    } catch (error) {
      console.log("Error in get flash product", error);
    }
  };

  // get best selling products
  const fetchbestSellingProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products");
      setbestSellingProducts(res.data);
    } catch (error) {
      console.log("Error in get best selling product", error);
    }
  };

  // init data
  useEffect(() => {
    fetchFlashProducts();
    fetchbestSellingProducts();
  }, []);

  return (
    <div>
      <Hero />

      {/* Todays Flash Sales  */}
      <section className="mb-20">
        <SectionTitleTop title="Today's" />
        <ProductsListSection products={flashProducts} title="Flash Sales" />
        <div className="flex justify-center w-full items-center">
          <Link href="/products">
            <Button size="lg" className="mt-12 bg-red-500 font-bold">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      <div className="w-full container mx-auto border-b"></div>

      {/* Categories  */}
      <section className="my-20">
        <SectionTitleTop title="Categories" />
        <BrowseByCategory title={"Browse By Category"} />
      </section>

      <div className="w-full container mx-auto border-b"></div>

      {/* Best Selling Products  */}
      <section className="my-20">
        <SectionTitleTop title="This month" />
        <ProductsListSection
          products={bestSellingProducts}
          title="Best Selling Product"
        />
        <div className="flex justify-center w-full items-center">
          <Link href="/products">
            <Button size="lg" className="mt-12 bg-red-500 font-bold">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* music banner  */}
      <MusicBanner />

      {/* Explore Our Products  */}
      <section className="my-20">
        <SectionTitleTop title="Our Products" />
        <ProductsListFixedSection
          products={flashProducts}
          title="Explore Our Products"
        />
        <div className="flex justify-center w-full items-center">
          <Link href="/products">
            <Button size="lg" className="mt-12 bg-red-500 font-bold">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products  */}
      <section className="my-20">
        <FeaturedSection />
      </section>

      {/* information  */}
      <section className="my-24">
        <Information />
      </section>
    </div>
  );
}
