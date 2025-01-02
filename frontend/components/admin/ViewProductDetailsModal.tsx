"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconEye, IconPlus } from "@tabler/icons-react";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { createProduct } from "@/store/actions/adminProductActions";

interface Product {
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
}

export function ViewProductDetailsModal({ product }: { product: Product }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <IconEye />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-center flex items-center justify-center">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full max-w-sm h-auto rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Name</Label>
              <p>{product.name}</p>
            </div>
            <div>
              <Label>Price</Label>
              <p>${product.price}</p>
            </div>
            <div>
              <Label>Discount</Label>
              <p>{product.discount}%</p>
            </div>
            <div>
              <Label>Stock</Label>
              <p>{product.stock}</p>
            </div>
            <div>
              <Label>SKU</Label>
              <p>{product.sku}</p>
            </div>
            <div>
              <Label>Active</Label>
              <p>{product.isActive ? "Yes" : "No"}</p>
            </div>
            <div className="col-span-2">
              <Label>Description</Label>
              <p>{product.description}</p>
            </div>
            <div className="col-span-2">
              <Label>Category ID</Label>
              <p>{product.categoryId}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
