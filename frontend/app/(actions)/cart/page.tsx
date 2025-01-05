"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, Trash } from "lucide-react";

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
import { getCart } from "@/store/actions/cartActions";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function page() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);
  const cart = useSelector((state: RootState) => state.cart.products);

  useEffect(() => {
    if (user) {
      dispatch(getCart(user.id));
    }
  }, [user]);

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
          {/* <TableBody>
            {cart &&
              cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <p className="text-sm text-muted-foreground">
                          Product ID: {item.id}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">${item.price}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end">
                      <div className="flex flex-col items-stretch border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-none border-b"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <ChevronUp className="h-4 w-4" />
                        </Button>
                        <div className="px-3 py-1 text-center min-w-[40px]">
                          {item.quantity}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-none border-t"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    ${item.price * item.quantity}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody> */}
        </Table>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <Link href="/shop" className="inline-block">
            <Button variant="outline">Return To Shop</Button>
          </Link>
          <Button variant="outline">Update Cart</Button>
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
            {/* <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between py-2 font-medium">
                <span>Total:</span>
                <span>${subtotal}</span>
              </div>
            </div> */}
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
