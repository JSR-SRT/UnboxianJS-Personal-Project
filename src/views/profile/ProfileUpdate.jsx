import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { getUserProfile, updateUserProfile } from "@/services/userApi";
import { toast } from "sonner";

export const ProfileUpdate = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    shippingAddress: "",
  });

  const [loading, setLoading] = useState(false); // loading state

  // Load current user data
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getUserProfile();
        
        if (data.error === false) {
          setForm({
            firstName: data.user.firstName || "",
            lastName: data.user.lastName || "",
            email: data.user.email || "",
            phoneNumber: data.user.phoneNumber || "",
            shippingAddress: data.user.shippingAddress || "",
          });
        }
      } catch (error) {
        console.error("Failed to load profile:", error);
        toast.error("Failed to load profile data");
      }
    };

    loadProfile();
  }, []);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // เรียก API เพื่อ update
      const data = await updateUserProfile({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phoneNumber: form.phoneNumber,
        shippingAddress: form.shippingAddress,
      });

      if (data.error === false) {
        toast.success("Profile updated successfully!");
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Update profile error:", error);
      toast.error(error.response?.data?.message || "Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full bg-[#fdf6ec] shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-lg md:text-xl font-bold mb-4 text-black">
        Change Your Info
      </h2>

      {/* แสดงข้อความยืนยันเมื่อ update สำเร็จ
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
      )} */}

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
          name="phoneNumber"
          type="tel"
          placeholder="Tel."
          value={form.phoneNumber}
          onChange={handleChange}
          className="border-black/30"
        />

        {/* Address */}
        <Textarea
          name="shippingAddress"
          placeholder="Address"
          value={form.shippingAddress}
          onChange={handleChange}
          className="border-black/30"
        />

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-black text-[#fdf6ec] hover:bg-stone-400 hover:text-black"
          disabled={loading}
        >
          {loading ? "Updating..." : "Submit Change"}
        </Button>
      </form>
    </Card>
  );
};
