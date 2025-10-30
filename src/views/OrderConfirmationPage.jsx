import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const OrderConfirmationPage = () => {
  const location = useLocation();
  const orderData = location.state?.orderData;

  if (!orderData) {
    return (
      <div className="p-6 bg-[#fdf6ec] min-h-screen flex items-center justify-center text-black">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">No order data found.</h2>
          <Button asChild className="mt-4 bg-black text-[#fdf6ec]">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const { customer, cart, subtotal, shipping, total, id } = orderData;

  return (
    <div className="min-h-screen p-4 md:p-10 text-black flex justify-center bg-[#fdf6ec]">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black">
            Thank You!
          </h1>
          <br></br>
          <p className="text-lg md:text-xl text-stone-800 mt-2">
            Your order has been successfully placed. We appreciate your purchase
            and hope you love your new collectibles.
          </p>
          <p className="text-sm text-stone-700 mt-1">
            An order confirmation has been sent to your email.
          </p>
          <br></br>
          <p className="font-bold text-xl text-stone-800">ORDER ID</p>
          <p className="font-bold text-xl text-stone-800">#{id}</p>
        </div>

        <Card className="p-6 bg-cream rounded-xl shadow-lg">
          <CardContent className="p-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer and Shipping Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-bold">CUSTOMER INFORMATION</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm text-stone-600">
                      FULL NAME
                    </p>
                    <p className="text-black">
                      {customer.firstName} {customer.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-stone-600">
                      PHONE
                    </p>
                    <p className="text-black">{customer.phoneNumber}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold text-sm text-stone-600">
                      EMAIL
                    </p>
                    <p className="text-black">{customer.email}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold text-sm text-stone-600">
                      SHIPPING ADDRESS
                    </p>
                    <p className="text-black">{customer.shippingAddress}</p>
                  </div>
                </div>
              </div>

              <Separator className="bg-gray-300" />

              <div className="space-y-2">
                <h2 className="text-xl font-bold">PAYMENT DETAILS</h2>
                <p>
                  <span className="font-semibold">Payment Method:</span>{" "}
                  {customer.paymentMethod === "card"
                    ? "Credit Card"
                    : customer.paymentMethod === "bank"
                    ? "Bank Transfer"
                    : customer.paymentMethod}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  className="w-full bg-black text-[#fdf6ec] py-3 font-semibold hover:bg-stone-400 hover:text-black"
                >
                  <Link to="/profile/my-orders" state={{ orderData }}>
                    TRACK YOUR ORDER
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full border border-black bg-[#fdf6ec] text-black py-3 font-semibold hover:bg-stone-400"
                >
                  <Link to="/products">CONTINUE SHOPPING</Link>
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:border-l lg:border-gray-200 lg:pl-8 space-y-4">
              <h2 className="text-xl font-bold mb-4">ORDER SUMMARY</h2>
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex items-start justify-between border-b pb-4"
                >
                  <div className="flex space-x-4">
                    <img
                      src={item.mainImage}
                      alt={item.name}
                      className="w-20 h-20 object-contain rounded-md"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-stone-500">Qty: {item.qty}</p>
                    </div>
                  </div>
                  <p className="font-semibold">
                    ฿{Number(item.price).toLocaleString()}
                  </p>
                </div>
              ))}

              <div className="space-y-2 pt-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-600">Subtotal</span>
                  <span className="font-medium">
                    ฿{subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Shipping</span>
                  <span className="font-medium">
                    ฿{shipping.toLocaleString()}
                  </span>
                </div>
                <Separator className="bg-black my-2" />
                <div className="flex justify-between text-base font-bold">
                  <span>TOTAL</span>
                  <span>฿{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
