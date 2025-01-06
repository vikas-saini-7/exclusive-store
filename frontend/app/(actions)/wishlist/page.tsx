"use client";
import React, { useEffect } from "react";
import SectionTitleTop from "@/components/common/SectionTitleTop";
import WishlistProductCard from "@/components/common/WishlistProductCard";
import { Button } from "@/components/ui/button";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "@/store/actions/wishlistActions";

const page: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userId) {
      dispatch(getWishlist(userId));
    }
  }, [userId]);

  return (
    <div className="py-12">
      {/* wishlist  */}
      <div className="mb-20 container mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl ">Wishlist ({wishlist.length})</h1>
          <Button variant="outline">Move All To Bag</Button>
        </div>
        <div className="flex items-center gap-8">
          {wishlist.map((item) => (
            <div key={item.id} className="w-">
              <WishlistProductCard
                id={item?.product?.id}
                name={item?.product?.name}
                price={item?.product?.price}
                discount={item?.product?.discount}
                imageUrl={item?.product?.imageUrl}
                // description={item.product.description}
              />
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
          {/* {wishlistItems.map((item) => (
            <div key={item.id} className="w-full">
              <WishlistProductCard />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default page;
