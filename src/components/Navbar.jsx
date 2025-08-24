import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = false; // mock state, ต่อไปใช้ context/auth

  return (
    <nav className="w-full bg-[#fdf6ec] border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-black">
          <img src="images/unboxianJS-logo.png" alt="BrandLogo"/>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/shop" className="hover:text-gray-700">Shop</NavLink>
          <NavLink to="/about" className="hover:text-gray-700">About Us</NavLink>
          <NavLink to="/contact" className="hover:text-gray-700">Contact</NavLink>

          <SearchBar />

          <NavLink to="/cart" className="hover:text-gray-700">Cart</NavLink>
          <NavLink to="/profile" className="hover:text-gray-700">Profile</NavLink>

          {isAuthenticated ? (
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Logout
            </button>
          ) : (
            <Link to="/signin" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
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
        <div className="md:hidden bg-cream-100 px-4 py-3 space-y-2">
          <NavLink to="/shop" className="block">Shop</NavLink>
          <NavLink to="/about" className="block">About Us</NavLink>
          <NavLink to="/contact" className="block">Contact</NavLink>
          <SearchBar />
          <NavLink to="/cart" className="block">Cart</NavLink>
          <NavLink to="/profile" className="block">Profile</NavLink>

          {isAuthenticated ? (
            <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Logout
            </button>
          ) : (
            <Link to="/signin" className="block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Get Started
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

