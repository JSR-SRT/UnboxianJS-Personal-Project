import { useState } from "react";
import { Link } from "react-router-dom"; // ต้อง import Link ถ้าจะใช้

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Mock data สำหรับแสดงผลใน Dropdown
  const mockResults = [
    { id: 1, name: "BE@RBRICK Cookie Monster", path: "/products/1" },
    { id: 2, name: "BE@RBRICK Minions Dave", path: "/products/2" },
    { id: 3, name: "BE@RBRICK Tom and Jerry", path: "/products/3" },
  ];

  const filteredResults = mockResults.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(e.target.value.length > 0);
  };
  
  const handleItemClick = () => {
    setShowDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    setShowDropdown(false); // ปิด dropdown เมื่อกดค้นหา
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center border rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="px-3 py-2 text-sm outline-none flex-1"
        />
        <button type="submit" className="px-3 py-2 bg-black text-white text-sm">
          Search
        </button>
      </form>
      
      {showDropdown && filteredResults.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {filteredResults.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={handleItemClick}
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-black"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
