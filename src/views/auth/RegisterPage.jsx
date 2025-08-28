import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Simulate API call for user registration
    console.log("Registering user:", formData);

    // Show a success message
    toast.success("Registration successful!");
    
    // Redirect to login page after successful registration
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex flex-1 items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-[#fdf6ec] w-full max-w-2xl shadow-lg rounded-xl p-8 my-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          {/* Firstname & Lastname */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={formData.lastname}
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
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full h-24 mb-4 p-3 border rounded-lg resize-none"
            required
          ></textarea>

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
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
            placeholder="Enter your password"
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
              className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-black text-[#fdf6ec] py-3 rounded-lg hover:bg-gray-800"
            >
              Register
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
