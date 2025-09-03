import React from "react";
import { Badge } from "@/components/ui/badge";

// Status theme mapping
const statusColors = {
  Preparing: "bg-yellow-500 text-black",
  Processing: "bg-orange-500 text-white",
  Shipped: "bg-blue-500 text-white",
  Delivered: "bg-green-600 text-white",
};

export const OrderStatusTracker = ({ order }) => {
  const steps = ["Preparing", "Processing", "Shipped", "Delivered"];
  const statusClassName =
    statusColors[order.status] || "bg-gray-300 text-black";
  return (
    <div className="bg-[#fdf6ec] p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
      {/* 🔹 Header with Status Badge */}
      <div className="flex items-start justify-end mb-4">
        <Badge
          className={`mt-2 px-3 py-1 text-xs rounded-full ${statusClassName}`}
        >
          {order.status}
        </Badge>
      </div>

      {/* 🔹 Order Info (ด้านล่าง Badge) */}
      <div className="text-black mb-6">
        <h2 className="text-lg font-bold"> #{order.id}</h2>
        <p className="text-sm text-gray-600">Date: {order.date}</p>
      </div>

      {/* 🔹 Status Tracker */}
      <div className="relative w-full overflow-x-auto mb-6">
        <div className="flex min-w-[400px] md:min-w-0 justify-between items-center">
          {steps.map((step, index) => {
            const isActive = index <= steps.indexOf(order.status);
            return (
              <div
                key={step}
                className="flex-1 flex flex-col items-center min-w-[80px]"
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full border-2
                    ${
                      isActive
                        ? "bg-black text-[#fdf6ec] border-black"
                        : "bg-gray-200 border-gray-300"
                    }`}
                >
                  {index + 1}
                </div>
                <p
                  className={`mt-2 text-xs font-medium text-center
                ${isActive ? "text-black" : "text-gray-400"}`}
                >
                  {step}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🔹 Product Summary and Total */}
      <div className="mt-6 border-t pt-4">
        <h3 className="font-semibold mb-2 text-black">Items</h3>
        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-2 text-sm"
          >
            <span className="text-black">
              {item.name} × {item.qty}
            </span>
            <span className="text-black">฿{Number(item.price).toLocaleString()}</span>
          </div>
        ))}
        {/* ✅ แสดง Total ที่ด้านล่างสุด */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-300">
          <p className="text-base font-semibold text-black">Total:</p>
          <p className="text-base font-semibold text-black">฿{order.total.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};