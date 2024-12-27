import SectionTitle from "@/components/common/SectionTitle";
import SectionTitleTop from "@/components/common/SectionTitleTop";
import BrowseByCategory from "@/components/home/BrowseByCategory";
import FeaturedSection from "@/components/home/FeaturedSection";
import Hero from "@/components/home/Hero";
import Information from "@/components/home/Information";
import MusicBanner from "@/components/home/MusicBanner";
import ProductsListFixedSection from "@/components/home/ProductsListFixedSection";
import ProductsListSection from "@/components/home/ProductsListSection";
import ProductsList from "@/components/home/ProductsListSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Todays Flash Sales  */}
      <section className="mb-20">
        <SectionTitleTop title="Today's" />
        <ProductsListSection title="Flash Sales" />
        <div className="flex justify-center w-full items-center">
          <Button size="lg" className="mt-12 bg-red-500 font-bold">
            View All Products
          </Button>
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
        <ProductsListSection title="Best Selling Product" />
        <div className="flex justify-center w-full items-center">
          <Button size="lg" className="mt-12 bg-red-500 font-bold">
            View All Products
          </Button>
        </div>
      </section>

      {/* music banner  */}
      <MusicBanner />

      {/* Explore Our Products  */}
      <section className="my-20">
        <SectionTitleTop title="Our Products" />
        <ProductsListFixedSection title="Explore Our Products" />
        <div className="flex justify-center w-full items-center">
          <Button size="lg" className="mt-12 bg-red-500 font-bold">
            View All Products
          </Button>
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
