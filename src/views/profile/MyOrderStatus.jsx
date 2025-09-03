import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OrderStatusTracker } from "@/components/OrderStatusTracker"; // ✅ import tracker

// Mock data ตัวอย่าง
const orders = [
  {
    id: "ORD-1001",
    date: "2025-09-01",
    status: "Shipped",
    items: [
      { id: 1, name: "BE@RBRICK Cookie Monster", price: 2999, qty: 1, image: "/images/b1.png" },
      { id: 2, name: "BE@RBRICK Minions Dave", price: 3999, qty: 1, image: "/images/b2.png" },
    ],
    total: 6998,
  },
  {
    id: "ORD-1002",
    date: "2025-08-28",
    status: "Delivered",
    items: [
      { id: 3, name: "BE@RBRICK Tom and Jerry", price: 4999, qty: 1, image: "/images/b3.png" },
    ],
    total: 4999,
  },
];

// Status theme mapping
const statusColors = {
  Pending: "bg-yellow-500 text-black",
  Processing: "bg-orange-500 text-white",
  Shipped: "bg-blue-500 text-white",
  Delivered: "bg-green-600 text-white",
  Cancelled: "bg-red-600 text-white",
};

export const MyOrderStatus = () => {
  return (
    <div className="min-h-screen bg-[#fdf6ec] p-4 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-black">
        My Orders
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map((order) => (
          <Card
            key={order.id}
            className="bg-white shadow-md border border-gray-200 rounded-xl"
          >
            <CardContent className="p-6 space-y-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="text-base font-semibold text-black">
                    {order.id}
                  </p>
                  <p className="text-sm text-gray-500">Date: {order.date}</p>
                </div>
                <Badge
                  className={`mt-2 md:mt-0 px-3 py-1 text-xs rounded-full ${
                    statusColors[order.status] || "bg-gray-300 text-black"
                  }`}
                >
                  {order.status}
                </Badge>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border-b pb-2 last:border-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-black">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        ฿ {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ Order Tracker */}
              <OrderStatusTracker order={order} />

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t">
                <p className="text-base font-semibold text-black">
                  Total: ฿ {order.total.toLocaleString()}
                </p>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-[#fdf6ec]"
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};