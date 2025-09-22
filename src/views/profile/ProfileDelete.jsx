import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export const ProfileDelete = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("Delete Profile:", form);
    // logic ในการลบโปรไฟล์จริง ๆ
    // เช่น: call API to delete the user account
    // เมื่อลบสำเร็จแล้วให้ navigate ไปยังหน้า login หรือหน้าแรก
    
    const isSuccess = true; 

    if (isSuccess) {
        navigate("/account-deleted"); // link ไปยังหน้า AccountDeletedPage
    }
  };

  return (
    <Card className="w-full bg-[#fdf6ec] shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-lg md:text-xl font-bold text-red-600 mb-3">
        DELETE PROFILE!!!
      </h2>
      <p className="text-sm text-stone-600 mb-4">
        This process <span className="text-red-600 font-semibold">cannot be reversed</span>.
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
          >
            Back
          </Button>
          <Button
            type="submit"
            className="flex-1 bg-red-600 text-[#fdf6ec] hover:bg-red-700"
          >
            Delete
          </Button>
        </div>
      </form>
    </Card>
  );
};
