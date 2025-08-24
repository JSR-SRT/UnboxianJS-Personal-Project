import { useState } from "react";

export const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg"
          required
        />
        <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Don’t have an account? <a href="/register" className="text-black underline">Sign up</a>
        </p>
      </form>
    </section>
  );
};

