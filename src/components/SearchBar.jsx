import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchProducts } from "@/services/productApi";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const delaySearch = setTimeout(async () => {
      setLoading(true);
      try {
        // ใช้ service
        const data = await searchProducts(query);
        
        if (data.error === false) {
          setResults(data.products);
          setShowDropdown(data.products.length > 0);
        }
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleItemClick = () => {
    setShowDropdown(false);
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDropdown(false);
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

      {loading && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-2 text-center text-sm text-gray-500">
          Searching...
        </div>
      )}

      {showDropdown && results.length > 0 && !loading && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {results.map((item) => (
            <Link
              key={item._id}
              to={`/products/${item._id}`}
              state={{ product: item }}
              onClick={handleItemClick}
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-black"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {showDropdown && results.length === 0 && !loading && query.trim() !== "" && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-2 text-center text-sm text-gray-500">
          No products found
        </div>
      )}
    </div>
  );
};

export default SearchBar;




// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [results, setResults] = useState([]); 
//   const [loading, setLoading] = useState(false);

//   // Debounce search (รอ 300ms หลังจาก user หยุดพิมพ์)
//   useEffect(() => {
//     if (query.trim() === "") {
//       setResults([]);
//       setShowDropdown(false);
//       return;
//     }

//     const delaySearch = setTimeout(async () => {
//       setLoading(true);
//       try {
//         // เรียก Backend API
//         const response = await fetch(
//           `http://localhost:3030/products/search?q=${encodeURIComponent(query)}`
//         );
//         const data = await response.json();
        
//         if (data.error === false) {
//           setResults(data.products);
//           setShowDropdown(data.products.length > 0);
//         }
//       } catch (error) {
//         console.error("Search error:", error);
//         setResults([]);
//       } finally {
//         setLoading(false);
//       }
//     }, 300); // รอ 300ms

//     return () => clearTimeout(delaySearch);
//   }, [query]);

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleItemClick = () => {
//     setShowDropdown(false);
//     setQuery(""); // ล้างช่อง search หลัง click
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowDropdown(false);
//   };

//   return (
//     <div className="relative">
//       <form onSubmit={handleSubmit} className="flex items-center border rounded-lg overflow-hidden">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={query}
//           onChange={handleInputChange}
//           className="px-3 py-2 text-sm outline-none flex-1"
//         />
//         <button type="submit" className="px-3 py-2 bg-black text-white text-sm">
//           Search
//         </button>
//       </form>

//       {/* แสดง Loading state */}
//       {loading && (
//         <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-2 text-center text-sm text-gray-500">
//           Searching...
//         </div>
//       )}

//       {/* แสดงผลลัพธ์จาก Backend */}
//       {showDropdown && results.length > 0 && !loading && (
//         <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//           {results.map((item) => (
//             <Link
//               key={item._id}
//               to={`/products/${item._id}`}
//               state={{ product: item }} // ส่ง product data ไปด้วย
//               onClick={handleItemClick}
//               className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-black"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       )}

//       {/* แสดงเมื่อไม่มีผลลัพธ์ */}
//       {showDropdown && results.length === 0 && !loading && query.trim() !== "" && (
//         <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-2 text-center text-sm text-gray-500">
//           No products found
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;