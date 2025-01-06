import { Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { removeItemFromWishlist } from "@/store/actions/wishlistActions";

interface WishlistProductCardProps {
  id: number;
  name: string;
  price: number;
  discount: number;
  imageUrl: string;
}

const WishlistProductCard: React.FC<WishlistProductCardProps> = ({
  id,
  name,
  price,
  discount,
  imageUrl,
}) => {
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = () => {
    if (userId) {
      dispatch(removeItemFromWishlist({ userId, productId: id }));
    }
  };

  return (
    <Card className="w-full max-w-[300px] border-0 bg-gray-100">
      <div className="relative">
        {/* Discount Badge */}
        <div className="absolute left-2 top-2 z-10">
          <span className="rounded bg-red-500 px-2 py-1 text-xs font-medium text-white">
            -{discount}%
          </span>
        </div>

        {/* Delete Button */}
        <div className="absolute right-2 top-2 z-10">
          <Button
            onClick={handleRemove}
            variant="ghost"
            size="icon"
            className="h-8 w-8"
          >
            <Trash2 className="h-4 w-4 text-gray-500" />
          </Button>
        </div>

        {/* Product Image */}
        <div className="relative aspect-square">
          <img
            src={imageUrl}
            alt="Gucci duffle bag"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-medium">{name}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-bold text-red-500">
            ${(price - (price * discount) / 100).toFixed(2)}
          </span>
          <span className="text-sm text-gray-500 line-through">${price}</span>
        </div>
      </CardContent>

      <CardFooter className="p-0">
        <Button
          className="w-full rounded-none rounded-b-lg bg-black hover:bg-black/90"
          size="lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WishlistProductCard;
