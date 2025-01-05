import { Heart, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface ProductCardProps {
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
  rating?: 5;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  discount,
  stock,
  sku,
  imageUrl,
  isActive,
  categoryId,
  rating = 5,
}: ProductCardProps) {
  return (
    <Card className="relative w-full max-w-sm overflow-hidden border-0">
      {/* Discount Badge */}
      <Badge
        variant="destructive"
        className="absolute left-3 top-3 z-10 rounded"
      >
        -{discount}%
      </Badge>

      {/* Action Buttons */}
      <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm"
        >
          <Eye className="h-4 w-4" />
        </Button>
      </div>

      {/* Product Image */}
      <Link href={`/products/${id}`}>
        <div className="aspect-square overflow-hidden bg-white">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-contain bg-gray-100 rounded"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-2 py-4">
        <h3 className="font-medium">{name}</h3>

        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-red-500">
            ${(price - (price * discount) / 100).toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            ${price}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "text-yellow-400" : "text-gray-200"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          {/* <span className="text-sm text-muted-foreground">({reviews})</span> */}
        </div>
      </div>
    </Card>
  );
}
