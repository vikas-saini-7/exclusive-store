"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Button } from "../ui/button";

const categories = [
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Sports & Outdoors",
  "Books",
  "Toys & Games",
];

const colors = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
  { label: "Yellow", value: "yellow" },
  { label: "Black", value: "black" },
  { label: "White", value: "white" },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const ratings = [
  "5 Stars",
  "4 Stars & Up",
  "3 Stars & Up",
  "2 Stars & Up",
  "1 Star & Up",
];

export function ProductFiltersSidebar() {
  const [priceRange, setPriceRange] = React.useState([0, 1000]);

  return (
    <div>
      <div className="relative m-4">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
        <Input
          type="search"
          placeholder="Search products..."
          className="w-full pl-8"
        />
      </div>
      <div className="px-4">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="categories">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={category} />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <Slider
                min={0}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mt-2"
              />
              <div className="mt-2 flex items-center justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="color">
            <AccordionTrigger>Color</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <div
                    key={color.value}
                    className={cn(
                      "h-8 w-8 rounded-full border border-gray-300 cursor-pointer",
                      `bg-${color.value}-500`
                    )}
                    title={color.label}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="size">
            <AccordionTrigger>Size</AccordionTrigger>
            <AccordionContent>
              <RadioGroup defaultValue="M">
                {sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem value={size} id={`size-${size}`} />
                    <Label htmlFor={`size-${size}`}>{size}</Label>
                  </div>
                ))}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rating">
            <AccordionTrigger>Rating</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2">
                {ratings.map((rating) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <Checkbox id={rating} />
                    <Label htmlFor={rating}>{rating}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="px-4 my-8">
        <Button className="w-full">Apply Filter</Button>
      </div>
    </div>
  );
}
