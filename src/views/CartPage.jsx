import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CartPage = () => {
  // mock data ของสินค้าใน cart
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "ASICS X TEMPTATION VACATION GEL-DS TRAINER 14", price: 169, qty: 1, image: "https://via.placeholder.com/80" },
    { id: 2, name: "NEW BALANCE 2002R", price: 116, qty: 1, image: "https://via.placeholder.com/80" },
    { id: 3, name: "A.P.C. MARTY SHERPA FLEECE GILET", price: 285, qty: 1, image: "https://via.placeholder.com/80" },
    { id: 4, name: "AESOP HWYL EAU DE PARFUM", price: 150, qty: 1, image: "https://via.placeholder.com/80" },
  ]);

  // ฟังก์ชันเพิ่ม/ลดจำนวน
  const updateQty = (id, action) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: action === "increase" ? item.qty + 1 : Math.max(item.qty - 1, 1) }
          : item
      )
    );
  };

  const grandTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-black px-4 py-6 md:px-10 lg:px-20">
      <h1 className="text-2xl font-bold mb-6">YOUR CART ({cartItems.length})</h1>

      {/* รายการสินค้า */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b border-gray-300 pb-4">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover border" />
              <div>
                <p className="text-sm md:text-base font-semibold">{item.name}</p>
                <p className="text-gray-600">USD {item.price}</p>
              </div>
            </div>

            {/* ปุ่มเพิ่ม-ลด */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQty(item.id, "decrease")}
                className="w-8 h-8 border border-gray-400 flex items-center justify-center hover:bg-gray-200"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, "increase")}
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
        <p className="font-semibold text-lg">GRAND TOTAL: USD {grandTotal}</p>

        <Link to="/checkout">
          <button className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800">
            PROCEED TO CHECKOUT
          </button>
        </Link>

        <Link to="/shop">
          <button className="w-full border border-black py-3 font-semibold hover:bg-gray-100">
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>
    </div>
  );
};


