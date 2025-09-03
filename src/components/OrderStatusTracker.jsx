import React from "react";

export const OrderStatusTracker = ({ order }) => {
  const steps = ["Pending", "Processing", "Shipped", "Delivered"];

  return (
    <div className="bg-[#fdf6ec] p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
      {/* 🔹 Order Info */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-black">Order #{order.id}</h2>
        <p className="text-sm text-gray-600">
          Date: {order.date} | Total: ฿{order.total}
        </p>
      </div>

      {/* 🔹 Status Tracker */}
      <div className="relative w-full overflow-x-auto">
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
                  ${isActive ? "bg-black text-[#fdf6ec] border-black" : "bg-gray-200 border-gray-300"}`}
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

      {/* 🔹 Product Summary */}
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
            <span className="text-black">฿{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
