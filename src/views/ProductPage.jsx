import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductGallery } from "../components/ProductGallery";
import { Button } from "@/components/ui/button";

const dummyProducts = [
  // Bearbrick Products (8 items)
  {
    id: "b1",
    name: "Be@rbrick Atmos Coke",
    price: "120$",
    condition: "New-Unboxed",
    image: "/images/b1-atmos-coke-show.png",
    category: "bearbrick",
  },
  {
    id: "b2",
    name: "Be@rbrick Cookie Monster",
    price: "115$",
    condition: "New",
    image: "/images/b2-cookie-show.png",
    category: "bearbrick",
  },
  {
    id: "b3",
    name: "Be@rbrick Minion Dave",
    price: "150$",
    condition: "Used",
    image: "/images/b3-minion-show.png",
    category: "bearbrick",
  },
  {
    id: "b4",
    name: "Be@rbrick Tom & Jerry",
    price: "145$",
    condition: "Displayed, Like New",
    image: "/images/b4-tomjerry-show.png",
    category: "bearbrick",
  },
  {
    id: "b5",
    name: "Be@rbrick Camo",
    price: "130$",
    condition: "New",
    image: "/images/bearbrick-camo.png",
    category: "bearbrick",
  },
  {
    id: "b6",
    name: "Be@rbrick Clear",
    price: "125$",
    condition: "Used",
    image: "/images/bearbrick-clear.png",
    category: "bearbrick",
  },
  {
    id: "b7",
    name: "Be@rbrick Red",
    price: "120$",
    condition: "New",
    image: "/images/bearbrick-red.png",
    category: "bearbrick",
  },
  {
    id: "b8",
    name: "Be@rbrick Blue",
    price: "115$",
    condition: "New",
    image: "/images/bearbrick-blue.png",
    category: "bearbrick",
  },

  // Popmart Products (8 items)
  {
    id: "p1",
    name: "Popmart Molly",
    price: "80$",
    condition: "New",
    image: "/images/popmart-molly.png",
    category: "popmart",
  },
  {
    id: "p2",
    name: "Popmart Skullpanda",
    price: "85$",
    condition: "New",
    image: "/images/popmart-skullpanda.png",
    category: "popmart",
  },
  {
    id: "p3",
    name: "Popmart Labubu",
    price: "90$",
    condition: "Used",
    image: "/images/popmart-labubu.png",
    category: "popmart",
  },
  {
    id: "p4",
    name: "Popmart Crybaby",
    price: "95$",
    condition: "Used",
    image: "/images/popmart-crybaby.png",
    category: "popmart",
  },
  {
    id: "p5",
    name: "Popmart Dimoo",
    price: "75$",
    condition: "New",
    image: "/images/popmart-dimoo.png",
    category: "popmart",
  },
  {
    id: "p6",
    name: "Popmart Pucky",
    price: "88$",
    condition: "New",
    image: "/images/popmart-pucky.png",
    category: "popmart",
  },
  {
    id: "p7",
    name: "Popmart Sweet Bean",
    price: "82$",
    condition: "Used",
    image: "/images/popmart-sweet-bean.png",
    category: "popmart",
  },
  {
    id: "p8",
    name: "Popmart The Monsters",
    price: "93$",
    condition: "Used",
    image: "/images/popmart-the-monsters.png",
    category: "popmart",
  },
];

export const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const handleProductSelect = (product) => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  const filteredProducts = dummyProducts.filter((product) => {
    if (selectedCategory === "all") {
      return true;
    }
    return product.category === selectedCategory;
  });

  return (
    <div className="flex flex-col min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore</h1>

      {/* Filter and Sort Section */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 gap-4">
        <div className="flex space-x-2">
          <Button
            onClick={() => setSelectedCategory("all")}
            variant={selectedCategory === "all" ? "default" : "outline"}
            className={`${
              selectedCategory === "all"
                ? "bg-black text-white"
                : "bg-transparent text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </Button>
          <Button
            onClick={() => setSelectedCategory("bearbrick")}
            variant={selectedCategory === "bearbrick" ? "default" : "outline"}
            className={`${
              selectedCategory === "bearbrick"
                ? "bg-black text-white"
                : "bg-transparent text-gray-700 hover:bg-gray-200"
            }`}
          >
            Bearbrick
          </Button>
          <Button
            onClick={() => setSelectedCategory("popmart")}
            variant={selectedCategory === "popmart" ? "default" : "outline"}
            className={`${
              selectedCategory === "popmart"
                ? "bg-black text-white"
                : "bg-transparent text-gray-700 hover:bg-gray-200"
            }`}
          >
            Popmart
          </Button>
        </div>
        {/* You can add a sort dropdown here if needed */}
      </div>

      <div className="flex-1">
        {filteredProducts.length > 0 ? (
          <ProductGallery
            products={filteredProducts}
            onSelect={handleProductSelect}
          />
        ) : (
          <p className="text-center text-gray-500">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};
