import React from "react";
// import outlet เข้ามาเพื่อแสดง Content ของเราในแต่ละ Route
import { Outlet } from "react-router-dom";
// Navbar components ที่อยู่บนสุด จะเอามาใช้กับทุก Page
import { Navbar } from "./Navbar"
// Footer components ที่อยู่ล่างสุด จะเอามาใช้กับทุก Page
import { Footer } from "./Footer";


export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

{/* จุดที่จะแสดง Content ของเราในแต่ละ Page */}
      <main className="flex-1 container mx-auto p-4">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};
