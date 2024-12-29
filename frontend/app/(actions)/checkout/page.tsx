"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function page() {
  const [paymentMethod, setPaymentMethod] = useState("bank");

  return (
    <div className="container mx-auto px-8 py-8 lg:px-24 lg:py-24">
      <div className="mb-8 text-sm text-muted-foreground">
        <Link href="/account" className="hover:text-primary">
          Account
        </Link>
        <span className="mx-2">/</span>
        <Link href="/my-account" className="hover:text-primary">
          My Account
        </Link>
        <span className="mx-2">/</span>
        <Link href="/product" className="hover:text-primary">
          Product
        </Link>
        <span className="mx-2">/</span>
        <Link href="/view-cart" className="hover:text-primary">
          View Cart
        </Link>
        <span className="mx-2">/</span>
        <span>Checkout</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Billing Details Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Billing Details</h2>

          <div className="space-y-4">
            <div>
              <Label htmlFor="firstName">
                First Name<span className="text-red-500">*</span>
              </Label>
              <Input id="firstName" required className="w-full" />
            </div>

            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" className="w-full" />
            </div>

            <div>
              <Label htmlFor="streetAddress">
                Street Address<span className="text-red-500">*</span>
              </Label>
              <Input id="streetAddress" required className="w-full" />
            </div>

            <div>
              <Label htmlFor="apartment">
                Apartment, floor, etc. (optional)
              </Label>
              <Input id="apartment" className="w-full" />
            </div>

            <div>
              <Label htmlFor="townCity">
                Town/City<span className="text-red-500">*</span>
              </Label>
              <Input id="townCity" required className="w-full" />
            </div>

            <div>
              <Label htmlFor="phone">
                Phone Number<span className="text-red-500">*</span>
              </Label>
              <Input id="phone" type="tel" required className="w-full" />
            </div>

            <div>
              <Label htmlFor="email">
                Email Address<span className="text-red-500">*</span>
              </Label>
              <Input id="email" type="email" required className="w-full" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="saveInfo" />
              <Label htmlFor="saveInfo">
                Save this information for faster check-out next time
              </Label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="space-y-4">
            {/* Order Items */}
            <div className="space-y-4">
              <div className="flex items-center justify-between py-4 border-b">
                <div className="flex items-center space-x-4">
                  <Image
                    src="https://png.pngtree.com/png-vector/20240815/ourmid/pngtree-black-wireless-earbuds-in-charging-case---clipart-illustration-png-image_13492239.png"
                    alt="LCD Monitor"
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                  <span>LCD Monitor</span>
                </div>
                <span className="font-medium">${650}</span>
              </div>

              <div className="flex items-center justify-between py-4 border-b">
                <div className="flex items-center space-x-4">
                  <Image
                    src="https://png.pngtree.com/png-vector/20240815/ourmid/pngtree-black-wireless-earbuds-in-charging-case---clipart-illustration-png-image_13492239.png"
                    alt="H1 Gamepad"
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                  <span>H1 Gamepad</span>
                </div>
                <span className="font-medium">${1100}</span>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-2">
              <div className="flex justify-between py-2">
                <span>Subtotal:</span>
                <span>${1750}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between py-2 font-medium">
                <span>Total:</span>
                <span>${1750}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank">Bank</Label>
                  <div className="ml-auto flex items-center space-x-2">
                    <Image
                      src="/placeholder.svg"
                      alt="Klarna"
                      width={40}
                      height={24}
                      className="h-6 w-auto"
                    />
                    <Image
                      src="/placeholder.svg"
                      alt="Visa"
                      width={40}
                      height={24}
                      className="h-6 w-auto"
                    />
                    <Image
                      src="/placeholder.svg"
                      alt="Mastercard"
                      width={40}
                      height={24}
                      className="h-6 w-auto"
                    />
                    <Image
                      src="/placeholder.svg"
                      alt="Other"
                      width={40}
                      height={24}
                      className="h-6 w-auto"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash">Cash on delivery</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Coupon Code */}
            <div className="flex gap-4">
              <Input
                placeholder="Coupon Code"
                className="w-full max-w-[300px]"
              />
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Apply Coupon
              </Button>
            </div>

            {/* Place Order Button */}
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
