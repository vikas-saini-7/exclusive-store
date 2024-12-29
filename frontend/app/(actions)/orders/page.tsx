"use client";
import { useEffect, useState } from "react";
// import axios from "axios";

interface Order {
  id: string;
  status: string;
  paymentMethod: string;
  createdAt: string;
}

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "1",
      status: "Delivered",
      paymentMethod: "Credit Card",
      createdAt: "2023-01-01T00:00:00Z",
    },
    {
      id: "2",
      status: "Processing",
      paymentMethod: "PayPal",
      createdAt: "2023-02-01T00:00:00Z",
    },
  ]);
  const [error, setError] = useState<string | null>(null);

  const renderOrders = () => {
    if (error) {
      return <p>{error}</p>;
    }

    if (orders.length === 0) {
      return <p>No orders found.</p>;
    }

    return (
      <ul>
        {orders.map((order) => (
          <li key={order.id} className="mb-4">
            <div className="border p-4 rounded">
              <p>Order ID: {order.id}</p>
              <p>Status: {order.status}</p>
              <p>Payment Method: {order.paymentMethod}</p>
              <p>
                Created At: {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container mx-auto px-8 py-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      {renderOrders()}
    </div>
  );
};

export default OrdersPage;
