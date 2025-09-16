import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import { useCart } from '../contexts/CartContext'; // ✅ line 8: เพิ่ม import useCart hook

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart(); // ✅ line 16: ดึงค่า totalItems จาก Context

  const isAuthPage = ["/signin", "/register", "/forgot-password"].includes(
    location.pathname
  );
  const isHomePage = location.pathname === "/";

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="w-full bg-[#fdf6ec] border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/0-unboxianJS-logo.png"
            alt="BrandLogo"
            className="h-10 w-auto"
          />
        </Link>

        {isAuthPage ? (
          <div className="flex items-center space-x-4">
            <Link
              to="/signin"
              className="flex items-center text-sm hover:text-stone-700"
            >
              <FaSignInAlt className="mr-1" /> Login
            </Link>
            <Link
              to="/register"
              className="flex items-center text-sm hover:text-stone-700"
            >
              <FaUserPlus className="mr-1" /> Signup
            </Link>
          </div>
        ) : (
          <>
            {/* ✅ Tablet & Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <NavLink to="/products" className="hover:text-stone-700">
                Shop
              </NavLink>
              <NavLink to="/about" className="hover:text-stone-700">
                About Us
              </NavLink>
              <NavLink to="/contact" className="hover:text-stone-700">
                Contact
              </NavLink>

              <div className="hidden xl:block">
                <SearchBar />
              </div>

              {/* Cart & Profile */}
              {/* แสดงจำนวนสินค้าบน Desktop/Tablet */}
              <NavLink to="/cart" className="relative hover:text-stone-700 text-xl">
                <FaShoppingCart />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-stone-400 text-black rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </NavLink>
              <NavLink to="/profile" className="hover:text-stone-700 text-xl">
                <FaUser />
              </NavLink>

              {isHomePage ? (
                <Link
                  to="/signin"
                  className="px-4 py-2 rounded-lg bg-black text-[#fdf6ec] hover:text-black hover:bg-stone-400"
                >
                  Get Started
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-black text-[#fdf6ec] hover:text-black hover:bg-stone-400"
                >
                  Logout
                </button>
              )}
            </div>

            {/* ✅ Mobile/Tablet Menu Button & Icons */}
            <div className="md:hidden flex items-center space-x-4"> 
                {/* ✅ line 95-101: แก้ไขโค้ดส่วนนี้เพื่อแสดงจำนวนสินค้าบน Mobile/Tablet */}
                <NavLink to="/cart" className="relative text-xl" onClick={handleLinkClick}>
                    <FaShoppingCart />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-stone-400 text-black rounded-full h-5 w-5 flex items-center justify-center text-xs">
                            {totalItems}
                        </span>
                    )}
                </NavLink>
                <NavLink to="/profile" onClick={handleLinkClick} className="text-xl">
                    <FaUser />
                </NavLink>
                <button
                    className="p-2 text-black"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>
          </>
        )}
      </div>

      {/* Mobile Menu (ถ้าไม่ใช่ auth page) */}
      {!isAuthPage && isMenuOpen && (
        <div className="md:hidden bg-[#fdf6ec] px-6 py-5 flex flex-col items-center space-y-4">
          <NavLink to="/products" className="block" onClick={handleLinkClick}>
            Shop
          </NavLink>
          <NavLink to="/about" className="block" onClick={handleLinkClick}>
            About Us
          </NavLink>
          <NavLink to="/contact" className="block" onClick={handleLinkClick}>
            Contact
          </NavLink>

          {isHomePage ? (
            <Link
              to="/signin"
              onClick={handleLinkClick}
              className="w-full px-4 py-2 text-center rounded-lg bg-black text-[#fdf6ec] hover:text-black hover:bg-stone-400"
            >
              Get Started
            </Link>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                handleLinkClick();
              }}
              className="w-full px-4 py-2 rounded-lg bg-black text-[#fdf6ec] hover:text-black hover:bg-stone-400"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;