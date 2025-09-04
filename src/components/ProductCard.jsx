import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card"; // Import Card components from ShadCN

// ✅ Named Export
export const ProductCard = ({ product, onSelect }) => {
  return (
    <Card
      onClick={() => onSelect(product)}
      className="relative cursor-pointer hover:shadow-lg transition-shadow duration-200 rounded-xl overflow-hidden bg-[#fdf6ec] h-full flex flex-col"
    >
       {/* 🔖 New / Used Tag */}
        <div className="absolute top-0 right-0 z-10 bg-black text-[#fdf6ec] text-xs font-semibold px-2 py-1 rounded-tr-xl">
          {product.condition}
        </div>

      {/* 🖼️ Product Image with New/Used Tag */}
      <CardContent className="relative p-0 h-56 flex items-center justify-center">

        {/* Image */}
        <img
          src={product.mainImage}
          alt={product.name}
          className="w-full h-full object-contain p-4"
        />
      </CardContent>

      {/* 📦 Name & Price Section */}
      <CardFooter className="flex p-0 mt-auto border-t border-gray-200">
        {/* Left: Product Name */}
        <div
          className="
      flex-1 text-black font-medium px-2 pt-0 pb-1
      text-xs md:text-sm
      border-gray-200
      line-clamp-5 sm:line-clamp-3 md:line-clamp-5
      min-h-[96px] sm:min-h-[96px] md:min-h-[48px] flex-grow
    "
        >
          {product.name}
        </div>

        {/* Right: Price */}
        <div className="absolute bottom-0 right-0 bg-black text-[#fdf6ec] text-xs md:text-sm font-semibold px-2 py-2 min-w-[60px] text-center rounded-br-xl">
          {`฿ ${Number(product.price).toLocaleString()}`}
        </div>
      </CardFooter>
    </Card>
  );
};
