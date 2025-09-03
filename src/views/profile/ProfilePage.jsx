import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MyOrderStatus } from "./MyOrderStatus"; // สมมติว่าคุณมี component นี้แล้ว
import { ProfilePrivacy } from "./ProfilePrivacy";

export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("info");

  // Mock user data
  const user = {
    avatar: "/images/user-profile.png",
    name: "Hello World",
    info: {
      firstname: "Arm",
      lastname: "JS",
      email: "arm.js@gmail.com",
      tel: "0812345678",
      address: "88/88 Unboxian Rd, Bang Na Nuea, Bang Na, Bangkok 00000",
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">BASIC INFO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500">
                  FIRST NAME
                </label>
                <p className="text-base text-gray-800">{user.info.firstname}</p>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500">
                  LAST NAME
                </label>
                <p className="text-base text-gray-800">{user.info.lastname}</p>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-gray-500">
                  EMAIL
                </label>
                <p className="text-base text-gray-800">{user.info.email}</p>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-gray-500">TEL</label>
                <p className="text-base text-gray-800">{user.info.tel}</p>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-gray-500">
                  ADDRESS
                </label>
                <p className="text-base text-gray-800">{user.info.address}</p>
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
          <p className="text-lg font-semibold text-black">{user.name}</p>
          <Button variant="ghost" className="mt-4 w-full md:w-auto">
            UPLOAD NEW AVATAR
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
