import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

export const CartPage = () => {
  const { cartItems, updateQty, removeFromCart } = useCart();
  const grandTotal = cartItems.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-black px-4 py-6 md:px-10 lg:px-20">
      <h1 className="text-2xl font-bold mb-6">YOUR CART ({cartItems.length})</h1>

      {/* รายการสินค้า */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item._id} className="flex items-center justify-between border-b border-gray-300 pb-4">
            <div className="flex items-center space-x-4">
              {/* ✅ ใช้ mainImage แทน image */}
              <img src={item.mainImage} alt={item.name} className="w-20 h-20 object-contain border" />
              <div>
                <p className="text-sm md:text-base font-semibold">{item.name}</p>
                {/* 💰 แสดงราคาที่ถูกต้อง */}
                <p className="text-gray-600">฿ {Number(item.price).toLocaleString()}</p>
              </div>
            </div>

            {/* ปุ่มเพิ่ม-ลด */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQty(item._id, "decrease")}
                className="w-8 h-8 border border-gray-400 flex items-center justify-center hover:bg-gray-200"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => updateQty(item._id, "increase")}
                className="w-8 h-8 border border-gray-400 flex items-center justify-center hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total + ปุ่ม */}
      <div className="mt-6 space-y-4">
        <p className="font-semibold text-lg">GRAND TOTAL: ฿ {grandTotal.toLocaleString()}</p>
        
        {/*
          ปุ่ม PROCEED TO CHECKOUT จะถูก disabled หากไม่มีสินค้าในตะกร้า
        */}
        <Link to="/checkout"
          className={cartItems.length === 0 ? "pointer-events-none opacity-50" : ""}
        >
          <button
            className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800"
            disabled={cartItems.length === 0}
          >
            PROCEED TO CHECKOUT
          </button>
        </Link>
        
        <Link to="/products">
          <button className="w-full border border-black py-3 font-semibold hover:bg-gray-100">
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>
    </div>
  );
};


