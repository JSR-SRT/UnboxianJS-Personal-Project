import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export const ProfileUpdate = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    address: "",
  });
  const [status, setStatus] = useState(null); // ✅ เพิ่ม state สำหรับจัดการสถานะ

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null); // ล้างสถานะเก่า

    console.log("Updating Profile:", form);

    // ✅ ในชีวิตจริง จะเรียก API เพื่ออัปเดตข้อมูล
    // ตัวอย่าง: simulate API call
    setTimeout(() => {
      // สมมติว่าการอัปเดตสำเร็จ
      setStatus({ type: "success", message: "Profile updated successfully!" });
    }, 1000);
  };

  return (
    <Card className="w-full bg-stone-100 shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-lg md:text-xl font-bold mb-4 text-black">
        Change Your Info
      </h2>

      {/* ✅ แสดงข้อความยืนยันเมื่ออัปเดตสำเร็จ */}
      {status && (
        <div
          className={`p-3 mb-4 rounded-lg text-sm font-medium ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="border-black/30"
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="border-black/30"
          />
        </div>

        {/* Email */}
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border-black/30"
        />

        {/* Tel */}
        <Input
          name="tel"
          type="tel"
          placeholder="Tel."
          value={form.tel}
          onChange={handleChange}
          className="border-black/30"
        />

        {/* Address */}
        <Textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border-black/30"
        />

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-black text-[#fdf6ec] hover:bg-stone-400 hover:text-black"
        >
          Submit Change
        </Button>
      </form>
    </Card>
  );
};
