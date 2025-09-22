import React from "react"
import { ProductCard } from "./ProductCard"

export const ProductGallery = ({ products, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <div key={p._id} className="relative">

          {/* Product Card */}
          <ProductCard product={p} onSelect={onSelect} className="h-full" />
        </div>
      ))}
    </div>
  )
}
