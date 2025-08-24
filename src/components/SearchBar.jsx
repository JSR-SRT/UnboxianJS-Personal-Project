import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-3 py-2 text-sm outline-none flex-1"
      />
      <button type="submit" className="px-3 py-2 bg-black text-white text-sm">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
