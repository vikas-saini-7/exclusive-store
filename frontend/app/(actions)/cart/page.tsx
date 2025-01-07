"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect } from "react";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  getCart,
  removeCartItem,
} from "@/store/actions/cartActions";
import { IconChevronDown, IconChevronUp, IconTrash } from "@tabler/icons-react";

export default function page() {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const cart = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    if (userId) {
      dispatch(getCart(userId));
    }
  }, [userId]);

  const handleAddToCart = (productId: number) => {
    if (userId) {
      dispatch(addToCart({ userId, productId }));
    }
  };

  const handleRemoveCartItem = (cartItemId: number) => {
    if (userId) {
      dispatch(removeCartItem({ userId, cartItemId }));
    }
  };

  const handleClearCart = () => {
    if (userId) {
      dispatch(clearCart(userId));
    }
  };

  const subtotal = cart.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto px-8 py-8 lg:px-24 lg:py-12">
      <div className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Cart</span>
      </div>

      <div className="space-y-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart &&
              cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <div>
                        <span className="font-medium">{item.product.name}</span>
                        <p className="text-sm text-muted-foreground">
                          SKU: {item.product.sku}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    ₹{item.product.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end">
                      <div className="flex flex-col items-stretch border rounded-lg shadow-sm hover:shadow transition-shadow duration-200">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-full rounded-t-md border-b hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => handleAddToCart(item.product.id)}
                        >
                          <IconChevronUp className="h-4 w-4 text-gray-600 hover:text-gray-800" />
                        </Button>
                        <div className="px-4 py-2 text-center min-w-[48px] font-medium">
                          {item.quantity}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-full rounded-b-md border-t hover:bg-gray-50 transition-colors duration-200"
                          // onClick={() => updateQuantity(item.id, -1)}
                        >
                          <IconChevronDown className="h-4 w-4 text-gray-600 hover:text-gray-800" />
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => handleRemoveCartItem(item.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <Link href="/" className="inline-block">
            <Button variant="outline">Return To Shop</Button>
          </Link>
          <Button
            variant="outline"
            className="bg-red-100 text-red-500 font-bold"
            onClick={handleClearCart}
          >
            <IconTrash /> Clear Cart
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <Input placeholder="Coupon Code" className="max-w-[200px]" />
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Apply Coupon
            </Button>
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold">Cart Total</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between py-2 font-medium">
                <span>Total:</span>
                <span> ₹{subtotal.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full text-white">Proceed to checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
