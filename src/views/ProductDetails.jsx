import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Array of dummy images for the product
const dummyImages = [
  "/images/product-detail-1.png",
  "/images/product-detail-2.png",
  "/images/product-detail-3.png",
];

export const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Get product data from state
  const [currentImage, setCurrentImage] = useState(product ? product.image : dummyImages[0]);

  if (!product) {
    return (
      <div className="text-center text-xl text-gray-600 mt-10">
        Product not found. <br />
        <Link to="/products" className="text-black underline">Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add logic to add the product to the cart here
    console.log("Adding to cart:", product.name);
    toast.success(`${product.name} has been added to your cart.`);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-10 min-h-screen">
      
      {/* Product Image Gallery */}
      <div className="w-full lg:w-1/2 flex flex-col items-center mb-8 lg:mb-0">
        <Card className="w-full max-w-lg mb-4 rounded-xl">
          <CardContent className="p-4 flex items-center justify-center">
            <img 
              src={currentImage} 
              alt={product.name} 
              className="w-full h-auto object-contain max-h-96"
            />
          </CardContent>
        </Card>
        
        {/* Small image thumbnails */}
        <div className="flex space-x-2">
          {dummyImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} ${index + 1}`}
              className={`w-20 h-20 object-cover cursor-pointer rounded-md border-2 ${
                currentImage === image ? 'border-black' : 'border-transparent'
              }`}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Product Details and Add to Cart Section */}
      <div className="w-full lg:w-1/2 lg:pl-10">
        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl font-semibold text-black mb-6">{product.price}</p>
        
        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Add to Cart Button */}
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-6 rounded-lg hover:bg-gray-800 text-lg font-semibold"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};