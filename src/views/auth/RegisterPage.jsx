import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { signupUser } from "@/services/authService";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    shippingAddress: "",
    phoneNumber: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false); // loading state

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // เพิ่ม password validation function
  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }
    return null; // Valid password
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true); // เริ่ม loading

    try {
      // เรียก API
      const data = await signupUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        username: formData.username,
        password: formData.password,
        shippingAddress: formData.shippingAddress,
      });

      if (data.error === false) {
        toast.success("Registration successful!");
        navigate("/signin");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false); // หยุด loading
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex flex-1 items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-[#fdf6ec] w-full max-w-2xl shadow-lg rounded-xl p-8 my-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="Firstname"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Lastname"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />

          {/* Address */}
          <textarea
            name="shippingAddress"
            placeholder="Address"
            value={formData.shippingAddress}
            onChange={handleChange}
            className="w-full h-24 mb-4 p-3 border rounded-lg resize-none"
            required
          ></textarea>

          {/* Phone */}
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />

          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Enter your password (min 8 chars, include uppercase, lowercase, number)"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate("/signin")}
              className="flex-1 bg-stone-400 text-black py-3 rounded-lg hover:bg-black hover:text-[#fdf6ec]"
              disabled={loading}
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-black text-[#fdf6ec] py-3 rounded-lg hover:bg-stone-400 hover:text-black"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-4 text-center text-sm">
            Already registered?{" "}
            <Link to="/signin" className="text-black underline">
              Login
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};
