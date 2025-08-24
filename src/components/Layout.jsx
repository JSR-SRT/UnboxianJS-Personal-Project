// Layout.jsx
// ✅ Default export

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "sonner"; // ใช้ sonner เป็น toast notification

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar ด้านบน */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>

      {/* Footer ด้านล่าง */}
      <Footer />

      {/* Global Toaster (แจ้งเตือน) */}
      <Toaster richColors position="top-right" />
    </div>
  );
};

export default Layout;
