import React from "react";
import SectionTitleTop from "../common/SectionTitleTop";
import ProductsListFixedSection from "./ProductsListFixedSection";
import SectionTitle from "../common/SectionTitle";

const FeaturedSection: React.FC = () => {
  return (
    <div>
      <SectionTitleTop title="Featured" />
      <div className=" container mx-auto px-8">
        <SectionTitle title="New Arrival" />
      </div>
      <section className="container mx-auto px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* PlayStation 5 Card */}
          <div className="relative group overflow-hidden rounded-lg h-full">
            <img
              src="/images/playstation.jpg"
              alt="PlayStation 5 Black and White versions"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 transition-opacity">
              <div className="absolute bottom-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  PlayStation 5
                </h2>
                <p className="text-gray-200 mb-4">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="inline-flex items-center text-white hover:underline">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="grid grid-cols-1 gap-4">
            {/* Women's Collections Card */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="/images/women-coll.jpg"
                alt="Women's Collections"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 transition-opacity">
                <div className="absolute bottom-0 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Women's Collections
                  </h2>
                  <p className="text-gray-200 mb-4">
                    Featured woman collections that give you another vibe.
                  </p>
                  <button className="inline-flex items-center text-white hover:underline">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Speakers Card */}
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="/images/speakers-coll.jpg"
                  alt="Amazon Wireless Speakers"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 transition-opacity">
                  <div className="absolute bottom-0 p-4">
                    <h2 className="text-xl font-bold text-white mb-2">
                      Speakers
                    </h2>
                    <p className="text-gray-200 mb-4 text-sm">
                      Amazon wireless speakers
                    </p>
                    <button className="inline-flex items-center text-white hover:underline text-sm">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Perfume Card */}
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="/images/perfumes-coll.avif"
                  alt="Gucci Intense Oud Perfume"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 transition-opacity">
                  <div className="absolute bottom-0 p-4">
                    <h2 className="text-xl font-bold text-white mb-2">
                      Perfume
                    </h2>
                    <p className="text-gray-200 mb-4 text-sm">
                      GUCCI INTENSE OUD EDP
                    </p>
                    <button className="inline-flex items-center text-white hover:underline text-sm">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedSection;
