import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MyOrderStatus } from "./MyOrderStatus";
import { ProfilePrivacy } from "./ProfilePrivacy";
import { getUserProfile } from "@/services/userApi";
import { toast } from "sonner";

export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data จาก Backend
  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      try {
        const data = await getUserProfile();

        if (data.error === false) {
          setUser(data.user);
        } else {
          toast.error("Failed to load profile");
        }
      } catch (error) {
        console.error("Profile fetch error:", error);
        toast.error("Failed to load profile. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen p-6 bg-[#fdf6ec] flex items-center justify-center text-black">
        <p className="text-xl">Loading profile...</p>
      </div>
    );
  }

  // ถ้าไม่มี user data
  if (!user) {
    return (
      <div className="min-h-screen p-6 bg-[#fdf6ec] flex items-center justify-center text-black">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            Please login to view your profile
          </h2>
          <Button asChild className="mt-4 bg-black text-[#fdf6ec]">
            <Link to="/signin">Login</Link>
          </Button>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">BASIC INFO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-stone-500">
                  FIRST NAME
                </label>
                <p className="text-base text-stone-800">{user.firstName}</p>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-stone-500">
                  LAST NAME
                </label>
                <p className="text-base text-stone-800">{user.lastName}</p>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-stone-500">
                  EMAIL
                </label>
                <p className="text-base text-gray-800">{user.email}</p>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-stone-500">
                  TEL
                </label>
                <p className="text-base text-gray-800">{user.phoneNumber}</p>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-stone-500">
                  ADDRESS
                </label>
                <p className="text-base text-stone-800">
                  {user.shippingAddress || "No address provided"}
                </p>
              </div>
            </div>
          </div>
        );
      case "notification":
        return <MyOrderStatus />;
      case "privacy":
        return <ProfilePrivacy />;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 md:p-10">
      {/* Sidebar / Tabs */}
      <Card className="w-full md:w-1/4 p-6 bg-[#fdf6ec] rounded-xl shadow-lg mb-6 md:mb-0">
        {/* User info */}
        <div className="flex flex-col items-center text-center mb-6">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src={user.avatar} alt="User Avatar" />
            <AvatarFallback>Cool Profile</AvatarFallback>
          </Avatar>
          <p className="text-lg font-semibold text-black">
            {user.firstname} {user.lastname}
          </p>
          <Button
            variant="ghost"
            className="mt-4 w-full sm:w-auto hover:bg-black hover:text-[#fdf6ec] bg-stone-400 text-black"
          >
            ADD YOUR PIC
          </Button>
        </div>

        <Separator className="my-4 hidden md:block" />

        {/* Tabs */}
        <nav className="flex md:flex-col justify-around md:justify-start gap-2">
          {[
            { key: "info", label: "Info" },
            { key: "notification", label: "My Orders" },
            { key: "privacy", label: "Privacy" },
          ].map((tab) => (
            <Button
              key={tab.key}
              variant="ghost"
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 md:w-full justify-center md:justify-start text-sm ${
                activeTab === tab.key
                  ? "bg-black text-[#fdf6ec]"
                  : "hover:bg-stone-300"
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </nav>
      </Card>

      {/* Main Content */}
      <Card className="flex-1 p-6 md:ml-6 bg-[#fdf6ec] rounded-xl shadow-lg">
        <CardContent className="p-0">{renderContent()}</CardContent>
      </Card>
    </div>
  );
};
