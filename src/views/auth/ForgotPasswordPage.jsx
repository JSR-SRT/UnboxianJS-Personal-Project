// src/views/ForgotPasswordPage.jsx
import React from "react"
import { useNavigate } from "react-router-dom"

export function ForgotPasswordPage() {
  const navigate = useNavigate()

  return (
    <div className="bg-[url('/bg-register.jpg')] bg-cover bg-center flex items-center justify-center min-h-screen">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative bg-[#F8F6F2] text-[#3F3C38] p-8 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-3">Reset Your Password</h2>
        <p className="text-center mb-6 text-base text-gray-600">
          Forgot your password? <br />
          Enter your email to reset. <br />
          We’ll send you a reset link.
        </p>

        {/* Form */}
        <form>
          <div className="mb-5">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A69C8E]"
            />
          </div>

          <div className="flex gap-4">
            {/* Back button → link ไปหน้า SignInPage */}
            <button
              type="button"
              className="w-1/3 bg-[#3F3C38] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#2e2b28] transition"
              onClick={() => navigate("/signin")}
            >
              Back
            </button>

            {/* Submit button */}
            <button
              type="submit"
              className="w-2/3 bg-[#D4A475] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#b47d49] transition"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

