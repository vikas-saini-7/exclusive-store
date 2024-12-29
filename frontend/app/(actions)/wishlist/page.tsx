import SectionTitleTop from "@/components/common/SectionTitleTop";
import WishlistProductCard from "@/components/common/WishlistProductCard";
import { Button } from "@/components/ui/button";
import React from "react";

const wishlistItems = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
];

const page: React.FC = () => {
  return (
    <div className="py-12">
      {/* wishlist  */}
      <div className="mb-20 container mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl ">Wishlist (4)</h1>
          <Button variant="outline">Move All To Bag</Button>
        </div>
        <div className="flex items-center gap-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="w-full">
              <WishlistProductCard />
            </div>
          ))}
        </div>
      </div>

      {/* just for you  */}
      <div className="py-8 mb-12">
        <div className="flex items-center justify-between mb-8 pr-8">
          <SectionTitleTop title="Just For You" />
          <Button variant="outline">See All</Button>
        </div>
        <div className="flex items-center gap-4 container mx-auto px-8">
          {wishlistItems.map((item) => (
            <div key={item.id} className="w-full">
              <WishlistProductCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
