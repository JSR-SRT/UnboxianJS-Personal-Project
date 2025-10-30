import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaSearch,
} from "react-icons/fa";
import { useCart } from "../contexts/CartContext"; // import useCart hook
import { getAuthStatus, logoutUser } from "@/services/authService";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart(); // ดึงค่า totalItems จาก Context

  // ตรวจสอบสถานะ authentication จาก Backend
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await getAuthStatus();
        setIsAuthenticated(data.isLoggedIn || false);
      } catch (error) {
        console.error("Auth check error:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [location.pathname]); // ตรวจสอบทุกครั้งที่เปลี่ยนหน้า

  const isAuthPage = ["/signin", "/register", "/forgot-password"].includes(
    location.pathname
  );
  const isHomePage = location.pathname === "/";

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logoutUser(); // ✅ เรียก API logout
      setIsAuthenticated(false);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // ถ้ายัง loading ไม่แสดงอะไร
  if (loading) {
    return (
      <nav className="w-full bg-[#fdf6ec] border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="flex justify-between items-center px-6 py-2">
          <Link to="/" className="flex items-center">
            <img
              src="/images/0-unboxianJS-logo.png"
              alt="BrandLogo"
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </nav>
    );
  }

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
            {/* Tablet & Desktop Menu */}
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
              {/* แสดงจำนวนสินค้าบน Desktop/tablet */}
              <NavLink
                to="/cart"
                className="relative hover:text-stone-700 text-xl"
              >
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

              {isHomePage && !isAuthenticated ? (
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

            {/* Mobile/Tablet Menu Button & Icons */}
            <div className="md:hidden flex items-center space-x-4">
              + {/* Icon Search (Mobile/Tablet) */}
              <button
                className="text-xl text-black"
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                aria-label="Toggle search"
              >
                <FaSearch />
              </button>
              {/* แสดงจำนวนสินค้าบน Mobile/Tablet */}
              <NavLink
                to="/cart"
                className="relative text-xl"
                onClick={handleLinkClick}
              >
                <FaShoppingCart />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-stone-400 text-black rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </NavLink>
              <NavLink
                to="/profile"
                onClick={handleLinkClick}
                className="text-xl"
              >
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

      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#fdf6ec] border-t border-gray-300 p-4 z-40">
          <SearchBar />
          <button
            className="w-full mt-3 py-2 bg-black text-[#fdf6ec] rounded-lg hover:bg-stone-400 hover:text-black text-sm"
            onClick={() => setShowMobileSearch(false)}
          >
            Close Search
          </button>
        </div>
      )}

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

          {isHomePage && !isAuthenticated ? (
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
