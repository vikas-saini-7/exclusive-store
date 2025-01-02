import React from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { deleteProduct } from "@/store/actions/adminProductActions";
import { IconTrash } from "@tabler/icons-react";

const DeleteProduct = ({ productId }: { productId: number }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteProduct = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;
    dispatch(deleteProduct(productId));
  };
  return (
    <Button
      variant="ghost"
      className="hover:text-red-500"
      size={"icon"}
      onClick={handleDeleteProduct}
    >
      <IconTrash />
    </Button>
  );
};

export default DeleteProduct;
