import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { deleteUserProfile } from "@/services/userApi";
import { toast } from "sonner";

export const ProfileDelete = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (!confirmDelete) return;

    setLoading(true);

    try {
      // เรียก API เพื่อลบ account
      const data = await deleteUserProfile();

      if (data.error === false) {
        toast.success("Account deleted successfully");
        navigate("/account-deleted");
      } else {
        toast.error(data.message || "Failed to delete account");
      }
    } catch (error) {
      console.error("Delete profile error:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to delete account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full bg-[#fdf6ec] shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-lg md:text-xl font-bold text-red-600 mb-3">
        DELETE PROFILE!!!
      </h2>
      <p className="text-sm text-stone-600 mb-4">
        This process
        <span className="text-red-600 font-semibold"> cannot be reversed</span>.
        Please confirm your email and password again.
      </p>

      <form onSubmit={handleDelete} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Email Address:
          </label>
          <Input
            name="email"
            type="email"
            placeholder="XXXX@gmail.com"
            value={form.email}
            onChange={handleChange}
            className="border-black/30"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Password:
          </label>
          <Input
            name="password"
            type="password"
            placeholder="******"
            value={form.password}
            onChange={handleChange}
            className="border-black/30"
          />
        </div>

        <div className="flex gap-3 pt-3">
          <Button
            type="button"
            variant="outline"
            className="flex-1 w-full bg-black text-[#fdf6ec] hover:bg-stone-400"
            onClick={() => navigate(-1)} // navigate(-1) เพื่อกลับไปหน้าก่อนหน้า
            disabled={loading}
          >
            Back
          </Button>
          <Button
            type="submit"
            className="flex-1 bg-red-600 text-[#fdf6ec] hover:bg-red-700"
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </form>
    </Card>
  );
};
