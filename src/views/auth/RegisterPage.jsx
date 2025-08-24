import { useState } from "react";

export const RegisterPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (pw) => {
    if (pw.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(pw)) return "Password must include at least one uppercase letter";
    if (!/[a-z]/.test(pw)) return "Password must include at least one lowercase letter";
    if (!/[0-9]/.test(pw)) return "Password must include at least one number";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validatePassword(password);
    if (err) {
      setError(err);
    } else {
      setError("");
      console.log("Register success");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input type="text" placeholder="Full Name" className="w-full mb-4 p-3 border rounded-lg" required />
        <input type="email" placeholder="Email Address" className="w-full mb-4 p-3 border rounded-lg" required />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-3 border rounded-lg"
          required
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Register
        </button>
      </form>
    </section>
  );
};

