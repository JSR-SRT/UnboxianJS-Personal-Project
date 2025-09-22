import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const CheckoutPage = () => {
  const { cartItems: initialCartItems } = useCart();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Mock user profile data
  const userProfile = {
    firstName: "Arm",
    lastName: "JS",
    email: "arm.js@gmail.com",
    phone: "0812345678",
    address: "88/88 Unboxian Rd, Bang Na Nuea, Bang Na, Bangkok 00000",
  };

  const [formData, setFormData] = useState({
    firstName: userProfile.firstName,
    lastName: userProfile.lastName,
    email: userProfile.email,
    phone: userProfile.phone,
    contactOption: "saved", // Default contact option
    deliveryAddress: userProfile.address,
    addressOption: "saved",
    paymentMethod: "card",
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0
  );
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  const generateOrderId = () => {
    return "ORD-" + Math.floor(10000 + Math.random() * 90000);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleContactOptionChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      contactOption: value,
      firstName: value === "saved" ? userProfile.firstName : "",
      lastName: value === "saved" ? userProfile.lastName : "",
      email: value === "saved" ? userProfile.email : "",
      phone: value === "saved" ? userProfile.phone : "",
    }));
  };

  const handleDeliveryOptionChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      addressOption: value,
      deliveryAddress: value === "saved" ? userProfile.address : "",
    }));
  };

  const handlePaymentMethodChange = (value) => {
    setFormData((prevState) => ({ ...prevState, paymentMethod: value }));
  };

  // ฟังก์ชันลบสินค้าออกจาก cartItems state
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // Link to OrderConfirmation page
    const orderData = {
      id: generateOrderId(),
      customer: formData,
      cart: cartItems,
      subtotal,
      shipping,
      total,
    };
    navigate("/order-confirmation", { state: { orderData } });
  };

  return (
    <div className="min-h-screen p-4 md:p-10 text-black">
      <h1 className="text-4xl font-bold mb-8 text-center">CHECKOUT</h1>

      <form
        onSubmit={handleCheckout}
        className="grid grid-cols-1 lg:grid-cols-5 gap-4"
      >
        {/* ฟอร์ม checkout */}
        <div className="lg:col-span-3 space-y-8">
          <Card className="p-6 bg-[#fdf6ec]">
            <h2 className="text-xl font-bold mb-4">CONTACT INFORMATION</h2>
            <RadioGroup
              onValueChange={handleContactOptionChange}
              defaultValue="saved"
              className="space-y-4 mb-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="saved" id="saved-info" />
                <Label htmlFor="saved-info">Use saved info</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new" id="new-info" />
                <Label htmlFor="new-info">Add new info</Label>
              </div>
            </RadioGroup>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={formData.contactOption === "saved"}
              />
              <Input
                type="text"
                placeholder="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={formData.contactOption === "saved"}
              />
              <Input
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="md:col-span-2"
                disabled={formData.contactOption === "saved"}
              />
              <Input
                type="text"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="md:col-span-2"
                disabled={formData.contactOption === "saved"}
              />
            </div>
          </Card>

          <Card className="p-6 bg-[#fdf6ec]">
            <h2 className="text-xl font-bold mb-4">DELIVERY</h2>
            <RadioGroup
              onValueChange={handleDeliveryOptionChange}
              defaultValue="saved"
              className="space-y-4 mb-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="saved" id="saved-address" />
                <Label htmlFor="saved-address">Use saved address</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new" id="new-address" />
                <Label htmlFor="new-address">Add new address</Label>
              </div>
            </RadioGroup>
            <Textarea
              placeholder="Address"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleInputChange}
              className="w-full h-32 resize-none"
              disabled={formData.addressOption === "saved"}
            />
          </Card>

          <Card className="p-6 bg-[#fdf6ec]">
            <h2 className="text-xl font-bold mb-4">PAYMENT METHOD</h2>
            <RadioGroup
              onValueChange={handlePaymentMethodChange}
              defaultValue="card"
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Credit Card</Label>
              </div>
              {formData.paymentMethod === "card" && (
                <div className="space-y-4 pl-6">
                  <Input
                    type="text"
                    placeholder="Card number"
                    className="w-full"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="text" placeholder="MM/YY" />
                    <Input type="text" placeholder="CVC" />
                  </div>
                  <Input type="text" placeholder="Name on card" />
                </div>
              )}
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank">Bank Transfer</Label>
              </div>
              {formData.paymentMethod === "bank" && (
                <div className="space-y-2 pl-6">
                  <p>
                    Account Name:{" "}
                    <span className="font-semibold">Jittawee</span>
                  </p>
                  <p>
                    Account Number:{" "}
                    <span className="font-semibold">929-9-03434-9</span>
                  </p>
                  <p>
                    Bank: <span className="font-semibold">Bangkok</span>
                  </p>
                </div>
              )}
            </RadioGroup>
          </Card>
        </div>

        {/* สรุปรายการ */}
        <div className="bg-[#fdf6ec] rounded-xl shadow-lg p-6 space-y-4 lg:col-span-2">
          <h2 className="text-xl font-bold mb-3">
            YOUR ORDER ({cartItems.length})
          </h2>
          <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-start justify-between border-b pb-4">
              <div className="flex space-x-5">
                <img
                  src={item.mainImage}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded-md"
                />

                {/* กล่องด้านขวา */}
                <div className="flex flex-col space-x-5">
                  {/* ชื่อสินค้า */}
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-stone-500 mt-1">Qty: {item.qty}</p>
                  </div>
                </div>
                  {/* Qty + ปุ่มลบ อยู่แถวเดียวกัน */}
                  <div className="flex flex-col text-right items-end w-1/3 md:w-1/3">
        <p className="text-sm md:text-base font-semibold">฿{Number(item.price).toLocaleString()}</p>
        <button
          onClick={() => handleRemoveItem(item._id)}
          className="text-stone-400 hover:text-stone-700 mt-2"
          aria-label="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                  </div>
    ))}
    </div>

          <div className="space-y-2 pt-2 text-sm">
            <p className="flex justify-between">
              <span className="text-stone-600">Subtotal</span>
              <span className="font-medium">฿{subtotal.toLocaleString()}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-stone-600">Shipping</span>
              <span className="font-medium">฿{shipping.toLocaleString()}</span>
            </p>
            <Separator className="bg-black my-2" />
            <p className="flex justify-between text-base font-bold">
              <span>TOTAL</span>
              <span>฿{total.toLocaleString()}</span>
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-[#fdf6ec] py-3 font-semibold hover:bg-stone-400 hover:text-black"
          >
            PAY NOW
          </Button>
        </div>
      </form>
    </div>
  );
};
