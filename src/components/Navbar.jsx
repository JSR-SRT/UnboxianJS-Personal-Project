import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = false; // mock state, ต่อไปใช้ context/auth

  return (
    <nav className="w-full bg-[#fdf6ec] border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/unboxianJS-logo.png"
            alt="BrandLogo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Tablet (md but below lg) */}
        <div className="hidden md:flex lg:hidden items-center space-x-10">
          <NavLink to="/shop" className="hover:text-gray-700">
            Shop
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-700">
            About Us
          </NavLink>
          <NavLink to="/contact" className="hover:text-gray-700">
            Contact
          </NavLink>

          {/* Cart & Profile */}
          <NavLink to="/cart" className="hover:text-gray-700 text-xl">
            <FaShoppingCart />
          </NavLink>
          <NavLink to="/profile" className="hover:text-gray-700 text-xl">
            <FaUser />
          </NavLink>

          {/* Auth Button */}
          {isAuthenticated ? (
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Logout
            </button>
          ) : (
            <Link
              to="/signin"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Get Started
            </Link>
          )}
        </div>

        {/* Desktop (lg and up) */}
        <div className="hidden xl:flex items-center space-x-12">
          <NavLink to="/shop" className="hover:text-gray-700">
            Shop
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-700">
            About Us
          </NavLink>
          <NavLink to="/contact" className="hover:text-gray-700">
            Contact
          </NavLink>

          {/* ✅ SearchBar only on Desktop */}
          <SearchBar />

          {/* Cart & Profile */}
          <NavLink to="/cart" className="hover:text-gray-700 text-xl">
            <FaShoppingCart />
          </NavLink>
          <NavLink to="/profile" className="hover:text-gray-700 text-xl">
            <FaUser />
          </NavLink>

          {/* Auth Button */}
          {isAuthenticated ? (
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Logout
            </button>
          ) : (
            <Link
              to="/signin"
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Get Started
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#fdf6ec] px-4 py-5 flex flex-col items-center space-y-4">
          <NavLink to="/shop" className="block">
            Shop
          </NavLink>
          <NavLink to="/about" className="block">
            About Us
          </NavLink>
          <NavLink to="/contact" className="block">
            Contact
          </NavLink>

          {isAuthenticated ? (
            <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Logout
            </button>
          ) : (
            <Link
              to="/signin"
              className="block w-full text-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Get Started
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

