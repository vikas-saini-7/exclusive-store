"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import AddressesComponent from "@/components/checkout/AddressesComponent";

export default function page() {
  const [paymentMethod, setPaymentMethod] = useState("bank");

  return (
    <div className="container mx-auto px-8 py-8 lg:px-24 lg:py-12">
      <h1 className="font-bold text-3xl mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-16">
        <AddressesComponent />

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
