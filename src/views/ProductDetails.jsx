// views/ProductDetails.jsx
import { useLocation, Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

export const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="text-center text-xl text-gray-600 mt-10">
        Product not found. <br />
        <Link to="/products" className="text-black underline">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    console.log("Adding to cart:", product.name);
    toast.success(`${product.name} has been added to your cart.`);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-10 min-h-screen">
      {/* Product Image Gallery */}
      <div className="w-full lg:w-1/2 flex flex-col items-center mb-8 lg:mb-0">
        <Card className="w-full max-w-lg mb-4 rounded-xl">
          <CardContent className="p-4 flex items-center justify-center">
            {/* Main + Gallery Scroll */}
            <div className="w-full flex overflow-x-scroll snap-x snap-mandatory space-x-4 scrollbar-hide">
              {[product.mainImage, ...(product.gallery || [])].map(
                (image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} ${index}`}
                    className="w-full h-auto object-contain max-h-96 flex-shrink-0 snap-center"
                  />
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 lg:pl-10">
        {/* Condition Tag */}
        <div className="mb-4">
          <span className="px-3 py-1 bg-black text-[#fdf6ec] text-sm rounded">
            {product.condition}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl font-semibold text-black mb-6">
          ฿ {Number(product.price).toLocaleString()}
        </p>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p className="text-gray-700">{product.description}</p>
        </div>

        <div className="flex flex-col space-y-4">
          {/* ปุ่ม Add to Cart */}
          <Button
            onClick={handleAddToCart}
            className="w-full bg-black text-[#fdf6ec] rounded-lg hover:bg-stone-400 hover:text-black text-lg font-semibold h-10"
          >
            Add to Cart
          </Button>

          {/* ปุ่ม Back to Continue Shopping */}
          <Button
            asChild
            className="w-full bg-black text-[#fdf6ec] rounded-lg hover:bg-stone-400 hover:text-black text-lg font-semibold h-10"
          >
            <Link to="/products">Back to Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
