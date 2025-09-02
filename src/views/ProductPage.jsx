import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductGallery } from "../components/ProductGallery";
import { Button } from "@/components/ui/button";

export const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const dummyProducts = [
    // Bearbrick Products (8 items)
    {
      _id: "b1", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "bearbrick", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "BE@RBRICK atmos × Coca-Cola Tokyo 100% & 400%",
      description:
        "A collaborative collectible figure made by Medicom Toy in partnership with atmos and Coca-Cola. This edition features a distinctive checkerboard pattern with alternating classic white-on-red Coca-Cola logos and Japanese characters representing Tokyo. The figure prominently displays the atmos logo on the chest. The 100% figure stands approximately 7 cm tall, while the 400% figure is roughly 28 cm tall. The set combines iconic branding from Coca-Cola with the stylish flair of atmos, creating a limited edition collectible.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "7999", // format ให้เป็น "฿ 7,999" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/b1-atmos-coke-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/b1-atmos-coke-own-1.png",
        "/images/b1-atmos-coke-own-2.png",
      ],
    },
    {
      _id: "b2", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "bearbrick", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "BE@RBRICK COOKIE MONSTER Costume Ver. 400%",
      description:
        "A collectible figure by Medicom Toy. It stands approximately 28 cm tall and represents the iconic Sesame Street character Cookie Monster in a costume version design. This figure features a detailed and textured blue appearance that resembles Cookie Monster's fuzzy look from the show. The Costume Ver. emphasizes the playful and nostalgic nature of the character, making it a premium collectible item.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "8999", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/b2-cookie-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/b2-cookie-own-1.png",
        "/images/b2-cookie-own-2.png",
      ],
    },
    {
      _id: "b3", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "bearbrick", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "BE@RBRICK MINIONS DAVE CHROME Ver. 100% & 400%",
      description:
        "A collectible figure set by Medicom Toy featuring Dave, a popular character from the Minions series. This special version showcases a shiny chrome finish, giving the figures a sleek, reflective metallic look. The 100% figure stands about 7 cm tall, while the 400% figure is approximately 28 cm tall. Both figures have articulated limbs and are made of high-quality painted plastic. This set is a unique collectible that combines the playful charm of the Minions with the iconic BE@RBRICK bear shape, making it a prized piece for fans and collectors.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "5999", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/b3-minion-dave-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/b3-minion-dave-own 1.png",
        "/images/b3-minion-dave-own-2.png",
      ],
    },
    {
      _id: "b4", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "bearbrick", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "BE@RBRICK Tom and Jerry Flocky Ver. 100% & 400%",
      description:
        "A collectible figure set by Medicom Toy featuring the character from the classic Tom and Jerry cartoon with a special flocked texture that mimics fur. The 100% figure stands about 7 cm tall, while the 400% figure is approximately 28 cm tall. These figures have articulated limbs and detailed paintwork to capture Tom & Jerry’s iconic look with a fuzzy, soft surface finish. This special edition offers fans a tactile and visually distinct version of Tom & Jerry, combining collectible art with a nostalgic character.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "14999", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New-Unboxed", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/b4-tom-jerry-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/b4-tomjerry-own-1.png",
        "/images/b4-tomjerry-own-2.png",
      ],
    },
    {
      _id: "b5", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "bearbrick", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "BE@RBRICK Carnival Futro 100% & 400%",
      description:
        "A collectible figure series from Medicom Toy featuring a carnival-inspired design. The 100% figure stands about 7 cm tall, and the 400% figure is approximately 28 cm tall. These figures showcase vibrant colors and artistic patterns that evoke the festive spirit of a carnival. Made with high-quality materials and articulated limbs, they are designed for collectors who prefer unique and colorful design.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "7999", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "Displayed, Like New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/b5-carnival-futro-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/b5-carnival-futro-own-1.png",
        "/images/b5-carnival-futro-own-2.png",
      ],
    },
    {
      _id: "b6", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "bearbrick", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "BE@RBRICK Shaun the Sheep 100% & 400%",
      description:
        "A collectible figure set by Medicom Toy features the character Shaun from the popular television film series, Shaun the Sheep. The 100% figure is approximately 7 cm tall, and the 400% figure is approximately 28 cm tall. The design faithfully recreates Shaun’s appearance, including his distinctive facial features. Come as a limited edition collectible perfect for fans of the animated series and BE@RBRICK collectors.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "6999", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/b6-shaun-sheep-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/b6-shaun-sheep-own-1.png",
        "/images/b6-shaun-sheep-own-2.png",
      ],
    },
    {
      _id: "b7", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "bearbrick", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "BE@RBRICK Andy Warhol x Jean-Michel Basquiat 400%",
      description:
        "A collectible figure by Medicom Toy and part of a special collaboration featuring the artwork of two iconic artists, Andy Warhol and Jean-Michel Basquiat. The figure is approximately 28 cm tall. It combines elements of pop art and Basquiat's unique graffiti style, resulting in a visually striking figure. This collectible is made of plastic, with detailed printed artwork reflecting the distinctive styles of both artists.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "3499", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/b7-jean-michel-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/b7-jean-michel-own-1.png",
        "/images/b7-jean-michel-own-2.png",
      ],
    },
    {
      _id: "b8", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "bearbrick", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "BE@RBRICK Elmo Costume Ver.2.0 400%",
      description:
        "A collectible figure from Medicom Toy, themed after the beloved Sesame Street character Elmo. This figure stands approximately 28 cm tall. It features a plush, fuzzy texture that mimics Elmo's iconic red fur in a detailed costume version. It is a popular item for fans of Sesame Street and BE@RBRICK collectors. The design focuses on high-quality materials and a faithful representation of Elmo's playful character.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "8999", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/b8-elmo-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/b8-elmo-own-1.png",
        "/images/b8-elmo-own-2.png",
      ],
    },

    // Popmart Products (8 items)
    {
      _id: "p1", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "POP MART The Monsters FALL IN WILD SERIES Vinyl Plush Doll",
      description:
        "A collectible toy featuring Labubu, a cute monster character designed by Molly.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "6999", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p1-labubu-fall-in-wild-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p1-labubu-fall-in-wild-own-1.png",
        "/images/p1-labubu-fall-in-wild-2.png",
      ],
    },
    {
      _id: "p2", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "popmart name",
      description: "A collaborative collectible xxxxxxxxxxxxxx.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "xxxx", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "xxx", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p2-product-name-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p2-product-name-own-1.png",
        "/images/p2-product-name-own-2.png",
      ],
    },
    {
      _id: "p3", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "popmart name",
      description: "A collaborative collectible xxxxxxxxxxxxxx.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "xxxx", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "xxx", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p3-product-name-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p3-product-name-own-1.png",
        "/images/p3-product-name-own-2.png",
      ],
    },
    {
      _id: "p4", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "popmart name",
      description: "A collaborative collectible xxxxxxxxxxxxxx.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "xxxx", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "xxx", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p4-product-name-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p4-product-name-own-1.png",
        "/images/p4-product-name-own-2.png",
      ],
    },
    {
      _id: "p5", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "popmart name",
      description: "A collaborative collectible xxxxxxxxxxxxxx.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "xxxx", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "xxx", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p5-product-name-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p5-product-name-own-1.png",
        "/images/p5-product-name-own-2.png",
      ],
    },
    {
      _id: "p6", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "popmart name",
      description: "A collaborative collectible xxxxxxxxxxxxxx.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "xxxx", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "xxx", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p6-product-name-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p6-product-name-own-1.png",
        "/images/p6-product-name-own-2.png",
      ],
    },
    {
      _id: "p7", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "popmart name",
      description: "A collaborative collectible xxxxxxxxxxxxxx.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "xxxx", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "xxx", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p7-product-name-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p7-product-name-own-1.png",
        "/images/p7-product-name-own-2.png",
      ],
    },
    {
      _id: "p8", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "popmart name",
      description: "A collaborative collectible xxxxxxxxxxxxxx.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "xxxx", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "xxx", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p8-product-name-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p8-product-name-own-1.png",
        "/images/p8-product-name-own-2.png",
      ],
    },
  ];

  const handleProductSelect = (product) => {
    navigate(`/products/${product._id}`, { state: { product } });
  };

  const filteredProducts = dummyProducts.filter((product) => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  });

  return (
    <div className="flex flex-col min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore</h1>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-6 gap-4">
        <div className="flex space-x-2">
          <Button
            onClick={() => setSelectedCategory("all")}
            className={`${
              selectedCategory === "all"
                ? "bg-black text-[#fdf6ec]"
                : "bg-transparent text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </Button>
          <Button
            onClick={() => setSelectedCategory("bearbrick")}
            className={`${
              selectedCategory === "bearbrick"
                ? "bg-black text-[#fdf6ec]"
                : "bg-transparent text-gray-700 hover:bg-gray-200"
            }`}
          >
            Bearbrick
          </Button>
          <Button
            onClick={() => setSelectedCategory("popmart")}
            className={`${
              selectedCategory === "popmart"
                ? "bg-black text-[#fdf6ec]"
                : "bg-transparent text-gray-700 hover:bg-gray-200"
            }`}
          >
            Popmart
          </Button>
        </div>
      </div>

      {/* Product List */}
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
