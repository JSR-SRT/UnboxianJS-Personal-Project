// src/components/ProductGallery.jsx
import React from "react"
import { ProductCard } from "./ProductCard"

export const ProductGallery = ({ products, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <div key={p._id} className="relative">
          {/* ✅ ถ้ามี tag จะแสดงที่มุมขวาบน */}
          {p.tag && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
              {p.tag}
            </span>
          )}

          {/* ✅ Product Card */}
          <ProductCard product={p} onSelect={onSelect} />
        </div>
      ))}
    </div>
  )
}
