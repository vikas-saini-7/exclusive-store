"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

const page = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <Table className="min-w-full bg-white">
        <TableHeader>
          <TableRow>
            <TableHead className="px-4 py-2">ID</TableHead>
            <TableHead className="px-4 py-2">Name</TableHead>
            <TableHead className="px-4 py-2">Email</TableHead>
            <TableHead className="px-4 py-2">Phone</TableHead>
            <TableHead className="px-4 py-2">Created At</TableHead>
            <TableHead className="px-4 py-2">Updated At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="border px-4 py-2">{user.id}</TableCell>
              <TableCell className="border px-4 py-2">{user.name}</TableCell>
              <TableCell className="border px-4 py-2">{user.email}</TableCell>
              <TableCell className="border px-4 py-2">{user.phone}</TableCell>
              <TableCell className="border px-4 py-2">
                {new Date(user.createdAt).toLocaleString()}
              </TableCell>
              <TableCell className="border px-4 py-2">
                {new Date(user.updatedAt).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
