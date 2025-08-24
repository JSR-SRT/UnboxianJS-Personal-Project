// src/components/landingpage/Footer.jsx
// 🔹 Footer component (Default export)

// src/components/landingpage/Footer.jsx
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-[#fdf6ec] py-8 mt-10">
      <div className="container mx-auto px-4">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Logo + Brand */}
          <div>
            <h2 className="text-xl font-bold">UnboxianJS</h2>
            <p className="mt-2 text-sm">
              Exclusive Art Toys & Collectibles for true street culture lovers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/shop" className="hover:text-white">Shop</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/shipping" className="hover:text-white">Shipping</a></li>
              <li><a href="/returns" className="hover:text-white">Returns</a></li>
              <li><a href="/policy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} UnboxianJS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;