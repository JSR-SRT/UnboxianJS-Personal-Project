// src/views/ForgotPasswordPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sending a password reset email goes here
    console.log("Password reset link requested for:", email);

    // Show a success message to the user
    toast.success("Password reset link sent to your email!");

    // Clear the email field
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Forgot Password Form */}
      <section className="flex flex-1 items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-[#fdf6ec] w-full max-w-md shadow-lg rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password?</h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-[#fdf6ec] py-3 rounded-lg hover:bg-stone-400 hover:text-black"
          >
            Send Reset Link
          </button>

          {/* Back to Login Link */}
          <p className="mt-4 text-center text-sm">
            Remember your password?{" "}
            <Link to="/signin" className="text-black underline">
              Login
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

