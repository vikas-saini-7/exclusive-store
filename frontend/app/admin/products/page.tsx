"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { CreateNewProductModal } from "@/components/admin/CreateNewProductModal";
import { UpdateNewProductModal } from "@/components/admin/UpdateNewProductModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { getAllProducts } from "@/store/actions/adminProductActions";
import DeleteProduct from "@/components/admin/DeleteProduct";
import { ViewProductDetailsModal } from "@/components/admin/ViewProductDetailsModal";

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

const page: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector(
    (state: RootState) => state.adminProducts.products
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="flex">
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <Table className="min-w-full bg-white">
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 py-2">ID</TableHead>
              <TableHead className="px-4 py-2">Image</TableHead>
              <TableHead className="px-4 py-2">Name</TableHead>
              <TableHead className="px-4 py-2">Stock</TableHead>
              <TableHead className="px-4 py-2">IsActive</TableHead>
              <TableHead className="px-4 py-2">Price</TableHead>
              <TableHead className="px-4 py-2">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="border px-4 py-2">{product.id}</TableCell>
                <TableCell className="border px-4 py-2">
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="w-14 h-14 object-contain"
                  />
                </TableCell>
                <TableCell className="border px-4 py-2">
                  {product.name}
                </TableCell>
                <TableCell className="border px-4 py-2">
                  {product.stock}
                </TableCell>
                <TableCell className="border px-4 py-2">
                  <span
                    className={
                      product.isActive ? "text-green-500" : "text-gray-500"
                    }
                  >
                    {product.isActive ? "● Yes" : "● No"}
                  </span>
                </TableCell>
                <TableCell className="border px-4 py-2">
                  ₹{product.price}
                </TableCell>
                <TableCell className="border px-4 py-2">
                  <ViewProductDetailsModal product={product} />
                  <UpdateNewProductModal product={product} />
                  <DeleteProduct productId={product.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="w-1/4 p-4 space-y-4">
        {/* <h2 className="text-xl font-bold">Actions</h2> */}
        {/* Add action buttons or links here */}
        <CreateNewProductModal />
      </div>
    </div>
  );
};

export default page;
