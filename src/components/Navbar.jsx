import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // mock: ให้ถือว่าล็อกอินแล้ว
  const location = useLocation();
  const navigate = useNavigate();

  // check ว่าหน้าไหนเป็น auth page
  const isAuthPage = ["/signin", "/register", "/forgot-password"].includes(
    location.pathname
  );

  // check ว่าอยู่หน้า Home ไหม
  const isHomePage = location.pathname === "/";

  // Function Logout
  const handleLogout = () => {
    setIsAuthenticated(false); // ล้าง state
    localStorage.removeItem("token"); // ถ้าเก็บ token ไว้ ก็ลบออกด้วย
    navigate("/"); // redirect ไปหน้า Home
  };

  return (
    <nav className="w-full bg-[#fdf6ec] border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* ใช้ px-6 + flex justify-between → content ชิดซ้าย/ขวา */}
      <div className="flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/0-unboxianJS-logo.png"
            alt="BrandLogo"
            className="h-10 w-auto"
          />
        </Link>

        {/* ถ้าเป็น auth page → แสดงเมนู Login / Signup */}
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
            {/* ✅ Tablet & Desktop เมนูหลัก */}
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

              {/* SearchBar (เฉพาะ desktop) */}
              <div className="hidden xl:block">
                <SearchBar />
              </div>

              {/* Cart & Profile */}
              <NavLink to="/cart" className="hover:text-stone-700 text-xl">
                <FaShoppingCart />
              </NavLink>
              <NavLink to="/profile" className="hover:text-stone-700 text-xl">
                <FaUser />
              </NavLink>

              {/* Home = Get Started | หน้าอื่น = Logout */}
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu (ถ้าไม่ใช่ auth page) */}
      {!isAuthPage && isMenuOpen && (
        <div className="md:hidden bg-[#fdf6ec] px-6 py-5 flex flex-col items-center space-y-4">
          <NavLink to="/products" className="block">
            Shop
          </NavLink>
          <NavLink to="/about" className="block">
            About Us
          </NavLink>
          <NavLink to="/contact" className="block">
            Contact
          </NavLink>
          <NavLink to="/cart" className="block">
            Cart
          </NavLink>
          <NavLink to="/profile" className="block">
            Profile
          </NavLink>

          {/* Mobile: Home = Get Started | หน้าอื่น = Logout */}
          {isHomePage ? (
            <Link
              to="/signin"
              className="w-full px-4 py-2 text-center rounded-lg bg-black text-[#fdf6ec] hover:text-black hover:bg-stone-400"
            >
              Get Started
            </Link>
          ) : (
            <button
              onClick={handleLogout}
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
