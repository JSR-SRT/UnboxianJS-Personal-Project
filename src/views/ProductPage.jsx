import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductGallery } from "../components/ProductGallery";
import { Button } from "@/components/ui/button";
import { fetchProducts } from "@/services/productApi"; // import service

export const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();

        if (data.error === false) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleProductSelect = (product) => {
    navigate(`/products/${product._id}`, { state: { product } });
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  });

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Explore</h1>
        <div className="flex justify-center items-center py-20">
          <p className="text-xl text-gray-500">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore</h1>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 gap-4">
        <div className="flex space-x-2">
          <Button
            onClick={() => setSelectedCategory("all")}
            className={`${
              selectedCategory === "all"
                ? "bg-black text-[#fdf6ec]"
                : "bg-transparent text-stone-700 hover:bg-stone-200"
            }`}
          >
            All
          </Button>
          <Button
            onClick={() => setSelectedCategory("bearbrick")}
            className={`${
              selectedCategory === "bearbrick"
                ? "bg-black text-[#fdf6ec]"
                : "bg-transparent text-stone-700 hover:bg-stone-200"
            }`}
          >
            Bearbrick
          </Button>
          <Button
            onClick={() => setSelectedCategory("popmart")}
            className={`${
              selectedCategory === "popmart"
                ? "bg-black text-[#fdf6ec]"
                : "bg-transparent text-stone-700 hover:bg-stone-200"
            }`}
          >
            Popmart
          </Button>
        </div>
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
