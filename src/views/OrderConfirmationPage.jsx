import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

export const OrderConfirmationPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const orderData = location.state?.orderData

  if (!orderData) {
    return (
      <div className="p-6 bg-[#F8F6F2] min-h-screen flex items-center justify-center text-[#3F3C38]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">No order data found</h2>
          <Button className="mt-4 bg-[#3F3C38] text-[#F8F6F2]" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  const { orderId, customer, cart, subtotal, shipping, total, payment } = orderData

  return (
    <div className="p-6 bg-[#F8F6F2] min-h-screen text-[#3F3C38] flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">Checkout</h2>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full border-2 border-[#3F3C38] flex items-center justify-center">
              ✓
            </div>
            <p className="text-lg font-medium">
              Order #{orderId} – <span className="font-semibold">Thank you {customer.name}!</span>
            </p>
          </div>

          {/* Tips / Message */}
          <div className="p-4 border border-gray-200 rounded mb-4">
            <p className="font-medium">Want some additional tips?</p>
            <p className="text-sm text-gray-600">
              Join our Facebook group to get tips and resources from our community:{" "}
              <a href="#" className="text-blue-600 underline">Join the Group</a>
            </p>
          </div>

          {/* Customer Info */}
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold">Contact</p>
              <p>{customer.email}</p>
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p>
                {customer.name}<br />
                {customer.address}<br />
                {customer.city}, {customer.country} {customer.postcode}
              </p>
            </div>
            <div>
              <p className="font-semibold">Payment</p>
              <p>{payment}</p>
            </div>
          </div>

          <Button 
            className="mt-6 bg-[#3F3C38] text-[#F8F6F2] hover:bg-black"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </div>

        {/* Right Section - Order Summary */}
        <div className="border-l border-gray-200 pl-6">
          <h3 className="text-lg font-semibold mb-4">Your Order</h3>
          <div className="space-y-3">
            {cart.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <span>{item.name} × {item.quantity}</span>
                </div>
                <span>£{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="mt-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping}</span>
            </div>
            <div className="flex justify-between font-bold text-base border-t pt-2">
              <span>Total</span>
              <span>£{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


