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
    <div className="bg-orange-100 p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
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
                        : "bg-stone-200 border-stone-400"
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
    </div>
  );
};