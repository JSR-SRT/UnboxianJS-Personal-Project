import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Notification } from "./Notification"; // Import Notification component

export const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("info");

  // Mock user data
  const user = {
    avatar: "/images/bear-opening-box.png",
    name: "Obsidian Sipper",
    info: {
      firstname: "Peter",
      lastname: "Parker",
      email: "xxxx99@gmail.com",
      tel: "123456789",
      address: "98/99 Datanarun Rd, Bang Na Nuea, Bang Na, Bangkok 10260"
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">BASIC INFO</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500">FIRST NAME</label>
                <p className="text-base text-gray-800">{user.info.firstname}</p>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500">LAST NAME</label>
                <p className="text-base text-gray-800">{user.info.lastname}</p>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-gray-500">EMAIL</label>
                <p className="text-base text-gray-800">{user.info.email}</p>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-gray-500">TEL</label>
                <p className="text-base text-gray-800">{user.info.tel}</p>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-gray-500">ADDRESS</label>
                <p className="text-base text-gray-800">{user.info.address}</p>
              </div>
            </div>
          </div>
        );
      case "notification":
        return <Notification />;
      case "privacy":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">PRIVACY</h2>
            <Button asChild className="w-full bg-gray-200 text-black hover:bg-gray-300">
              <Link to="/profile/update">UPDATE PROFILE</Link>
            </Button>
            <Button asChild className="w-full bg-gray-200 text-black hover:bg-gray-300">
              <Link to="/profile/update">RESET PASSWORD</Link>
            </Button>
            <Button asChild className="w-full bg-gray-200 text-black hover:bg-gray-300">
              <Link to="/profile/privacy">CHANGE PAYMENT METHOD</Link>
            </Button>
            <Button asChild className="w-full bg-gray-200 text-black hover:bg-gray-300">
              <Link to="/profile/delete">DELETE PROFILE</Link>
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 md:p-10">
      
      {/* Sidebar for Profile Info and Navigation */}
      <Card className="w-full md:w-1/4 p-6 flex flex-col items-center bg-[#fdf6ec] rounded-xl shadow-lg mb-6 md:mb-0">
        <Avatar className="w-32 h-32 mb-4">
          <AvatarImage src={user.avatar} alt="User Avatar" />
          <AvatarFallback>OS</AvatarFallback>
        </Avatar>
        <p className="text-lg font-semibold text-black">{user.name}</p>
        <Button variant="ghost" className="mt-4 w-full">
          UPLOAD NEW AVATAR
        </Button>
        <Separator className="my-4" />
        <nav className="w-full flex md:flex-col justify-around md:justify-start gap-2">
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("info")} 
            className={`w-full justify-start ${activeTab === "info" ? 'bg-gray-200' : ''}`}
          >
            Info
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("notification")} 
            className={`w-full justify-start ${activeTab === "notification" ? 'bg-gray-200' : ''}`}
          >
            Notification
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab("privacy")} 
            className={`w-full justify-start ${activeTab === "privacy" ? 'bg-gray-200' : ''}`}
          >
            Privacy
          </Button>
        </nav>
      </Card>
      
      {/* Main Content */}
      <Card className="flex-1 p-6 md:ml-6 bg-[#fdf6ec] rounded-xl shadow-lg">
        <CardContent className="p-0">
          {renderContent()}
        </CardContent>
      </Card>
    </div>
  );
};

