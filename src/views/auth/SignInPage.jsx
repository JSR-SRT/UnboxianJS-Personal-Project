import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

export const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password, remember);
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* Login Form */}
      <section className="flex flex-1 items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-[#fdf6ec] w-full max-w-md shadow-lg rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-2 p-3 border rounded-lg"
            required
          />

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-stone-600">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-stone-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-[#fdf6ec] py-3 rounded-lg hover:bg-stone-400 hover:text-black"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="mt-4 text-center text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-black underline">
              Sign up
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default SignInPage;

