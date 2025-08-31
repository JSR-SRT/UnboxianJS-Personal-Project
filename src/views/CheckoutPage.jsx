import React, { useState } from "react";

export const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", zip: "", payment: "card"
  });

  const cartItems = [
    { id: 1, name: "ASICS X TEMPTATION VACATION GEL-DS TRAINER 14", price: 169, qty: 1, image: "https://via.placeholder.com/60" },
    { id: 2, name: "NEW BALANCE 2002R", price: 116, qty: 1, image: "https://via.placeholder.com/60" },
    { id: 3, name: "A.P.C. MARTY SHERPA FLEECE GILET", price: 285, qty: 1, image: "https://via.placeholder.com/60" },
    { id: 4, name: "AESOP HWYL EAU DE PARFUM", price: 150, qty: 1, image: "https://via.placeholder.com/60" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-black px-4 py-6 md:px-10 lg:px-20">
      <h1 className="text-2xl font-bold mb-6">CHECKOUT</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ฟอร์ม checkout */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-2">CONTACT INFORMATION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="border p-3 w-full" />
              <input type="text" placeholder="Last name" className="border p-3 w-full" />
              <input type="email" placeholder="E-mail" className="border p-3 w-full md:col-span-2" />
              <input type="text" placeholder="Phone" className="border p-3 w-full md:col-span-2" />
            </div>
          </div>

          {/* Delivery */}
          <div>
            <h2 className="font-semibold mb-2">DELIVERY</h2>
            <input type="text" placeholder="Address" className="border p-3 w-full mb-3" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" placeholder="City" className="border p-3 w-full" />
              <input type="text" placeholder="Zip" className="border p-3 w-full" />
              <select className="border p-3 w-full">
                <option>Country</option>
                <option>USA</option>
                <option>Thailand</option>
              </select>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="font-semibold mb-2">PAYMENT</h2>
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" defaultChecked /> <span>Credit Card</span>
              </label>
              <input type="text" placeholder="Card number" className="border p-3 w-full" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className="border p-3 w-full" />
                <input type="text" placeholder="CVC" className="border p-3 w-full" />
              </div>
              <input type="text" placeholder="Name on card" className="border p-3 w-full" />
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" /> <span>PayPal</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="payment" /> <span>AfterPay</span>
              </label>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800">
            PAY NOW
          </button>
        </div>

        {/* สรุปรายการ */}
        <div className="bg-white border p-6 space-y-4">
          <h2 className="font-semibold mb-3">YOUR CART ({cartItems.length})</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-3">
                <img src={item.image} alt={item.name} className="w-14 h-14 object-cover border" />
                <div>
                  <p className="text-sm">{item.name}</p>
                  <p className="text-gray-600">Qty: {item.qty}</p>
                </div>
              </div>
              <p className="font-semibold">USD {item.price}</p>
            </div>
          ))}

          <div className="space-y-1 pt-2">
            <p className="flex justify-between"><span>Subtotal</span><span>USD {subtotal}</span></p>
            <p className="flex justify-between"><span>Shipping</span><span>USD {shipping}</span></p>
            <p className="flex justify-between font-bold"><span>Total</span><span>USD {total}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};



