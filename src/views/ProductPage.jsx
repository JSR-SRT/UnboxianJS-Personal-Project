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
      price: "7950", // format ให้เป็น "฿ 7,999" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/b1-atmos-coke-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/b1-atmos-coke-own-1.png",
        "/images/b1-atmos-coke-own-2.jpg",
      ],
    },
    {
      _id: "b2", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "bearbrick", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "BE@RBRICK COOKIE MONSTER Costume Ver. 400%",
      description:
        "A collectible figure by Medicom Toy. It stands approximately 28 cm tall and represents the iconic Sesame Street character Cookie Monster in a costume version design. This figure features a detailed and textured blue appearance that resembles Cookie Monster's fuzzy look from the show. The Costume Ver. emphasizes the playful and nostalgic nature of the character, making it a premium collectible item.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "8950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
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
      price: "5950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
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
      price: "14950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
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
      price: "7950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
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
      price: "5950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
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
      price: "3450", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
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
      price: "8950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/b8-elmo-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/b8-elmo-own-1.png",
        "/images/b8-elmo-own-2.png",
      ],
    },
    {
      _id: "b9", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "bearbrick", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "BE@RBRICK Cheer Bear Costume Ver. 400% ",
      description: "A collectible figure from Medicom Toy inspired by the classic Care Bears character, Cheer Bear. This figure stands approximately 28 cm tall. It features a soft, plush-like costume texture that resembles Cheer Bear’s iconic pink fur and rainbow belly badge. The figure includes articulation for posing and comes in carefully designed packaging. As a limited edition release, it is a popular item among collectors who appreciate the blend of nostalgic pop culture and designer toys", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "4950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/b9-cheer-bear-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/b9-cheer-bear-own-1.png",
        "/images/b9-cheer-bear-own-2.png",
      ],
    },
    {
      _id: "b10", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "bearbrick", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "BE@RBRICK Liberty Walk 100% & 400% Red Stripe Ver.",
      description:
        "A collaboration collectible by Medicom Toy with Liberty Walk, a well-known car tuning brand. The 100% Bearbrick stands approximately 7 cm tall, while the 400% size is about 28 cm tall. These figures often feature designs inspired by the iconic Liberty Walk aesthetic, including automotive themes and urban street style influences. The set is sought after by collectors who appreciate the fusion of designer toy culture with automotive customization.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "7950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/b10-liberty-walk-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/b10-liberty-walk-own-1.png",
        "/images/b10-liberty-walk-own-2.png",
      ],
    },


    // Popmart Products (10 items p1-p10)
    {
      _id: "p1", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "POP MART The MONSTERS - FALL IN WILD SERIES Vinyl Plush Doll",
      description:
        "A detailed collectible designer plush featuring the character Labubu. The doll measures approximately 20 cm by 15 cm by 40 cm. The stuffing consists of 90% polyester fiber and 10% PE particles. This gives the plush a soft but durable texture. The design captures the whimsical and charming style of the Monsters series, making it highly appealing for collectors and fans of artistic collectible toys.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "3950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
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
      name: "POP MART The MONSTERS - Let's Checkmate Series Vinyl Plush Doll",
      description: "A detailed collectible designer plush featuring the character Labubu. The doll stands approximately 37 cm tall in a standing posture and 33 cm when sitting. It is made from a combination of materials including polyester, PVC, and ABS for the shell, while the stuffing consists of polyester and PP particles. The doll comes with a ring box made from PS, polyester, and hardware materials. The design features detailed craftsmanship typical of the Monsters series, making it a sought-after collectible item for fans and collectors of Pop Mart art toys.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "3950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p2-labubu-lets-checkmate-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p2-labubu-lets-checkmate-own-1.png",
        "/images/p2-labubu-lets-checkmate-own-2.png",
      ],
    },
    {
      _id: "p3", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "POP MART MEGA ROYAL MOLLY 400% Childishness",
      description: "A large collectible figure standing about 382mm tall. It is made primarily from ABS material, designed for collectors. This figure is part of the MOLLY series by POP MART, featuring a playful and childlike design theme in the Childishness edition. The toy emphasizes vibrant colors and charming aesthetic typical of POP MART's designer toys.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "8950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p3-molly-childishness-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p3-molly-childishness-own-1.png",
        "/images/p3-molly-childishness-own-2.png",
      ],
    },
    {
      _id: "p4", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "POP MART MEGA SPACE MOLLY 400% Mango Sticky Rice",
      description: "A collectible figure about 300 mm tall. It is made from PVC, ABS, and PC materials. This figure is part of a Thailand Limited collection that blends fashion, art, and Thai culture into a charming design inspired by the iconic Thai dessert, mango sticky rice. The figure features detailed craftsmanship with sweet mango elements and vibrant colors, making it a highly appealing item for collectors. It represents a unique fusion of cultural symbolism and contemporary art toy design.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "7950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p4-molly-mango-sticky-rice-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p4-molly-mango-sticky-rice-own-1.png",
        "/images/p4-molly-mango-sticky-rice-own-2.png",
      ],
    },
    {
      _id: "p5", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "POP MART MEGA SPACE MOLLY 400% PANDA",
      description: "A large collectible figure standing about 300 mm tall. It is made from a combination of PVC, ABS, and polyester fiber. The character features a cute panda theme combined with space elements, reflecting a playful and charming design typical of POP MART's art toys. The figure's design includes Molly holding a panda's favorite snack and a backpack filled with small apples, inviting collectors to chill out and explore a bamboo forest with this collectible.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "7950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p5-molly-panda-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p5-molly-panda-own-1.png",
        "/images/p5-molly-panda-own-2.png",
      ],
    },
    {
      _id: "p6", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "POP MART MEGA SPACE MOLLY 400% GARFIELD",
      description: "A collectible figure standing about 320 mm tall, made from PVC and ABS materials.  The design features the character Molly combined with Garfield’s playful and charming aesthetic, often portrayed with accessories like pom-poms, buttons, and a toy phone cord, representing a space-themed suit ready for adventure.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "10950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p6-molly-garfield-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p6-molly-garfield-own-1.png",
        "/images/p6-molly-garfield-own-2.png",
      ],
    },
    {
      _id: "p7", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "POP MART MOLLY Hello, Moon 1/8 Action Figure",
      description: "A collectible figure by POP MART with an approximate height of 20 cm. Made from materials including PVC, ABS, metal parts, polyester fiber, PU, and TPU, this figure features fine craftsmanship and articulated joints for posing. The design presents Molly in a charming space-themed outfit, complete with accessories like pom-poms, buttons, and a toy phone cord, giving her the ready-for-adventure look as it says hello to the moon and beyond. It is a part of POP MART's popular MOLLY series and is aimed at collectors looking for detailed and artistic figures.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "2950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p7-molly-hello-moon-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p7-molly-hello-moon-own-1.png",
        "/images/p7-molly-hello-moon-own-2.png",
      ],
    },
    {
      _id: "p8", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "POP MART MEGA CRYBABY 400% The Queen of Broken Heart",
      description: "A limited edition collectible figure by POP MART.  The figure is about 380 mm tall and made from high-quality materials such as PVC, ABS, and polyester. This version  represents the character CRYBABY with a special theme called The Queen of Broken Heart. The figure comes in a limited quantity, making it a rare and sought-after item among fans of POP MART's art toys.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "8950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p8-crybaby-queen-broken-heart-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p8-crybaby-queen-broken-heart-own-1.png",
        "/images/p8-crybaby-queen-broken-heart-own-2.png",
      ],
    },
    {
      _id: "p9", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "POP MART CRYBABY HELLO THAILAND SERIES-Plush Doll",
      description: "A collectible plush figure with a size of approximately 21x21x26 cm. It is made mostly from polyester (98%) with a small amount of ABS (2%) for durability. This plush doll features the CRYBABY character themed around Thailand, showcasing cultural elements and charming design, making it a unique and adorable item for fans and collectors. It is part of POP MART's popular CRYBABY series, known for artistic and endearing collectible toys.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "1950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p9-crybaby-hello-thailand-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p9-crybaby-hello-thailand-own-1.png",
        "/images/p9-crybaby-hello-thailand-own-2.png",
      ],
    },
    {
      _id: "p10", // ไม่ show ที่หน้า UI ให้ user เห็น
      category: "popmart", // ไม่ show ที่หน้า UI ให้ user เห็น
      name: "POP MART MEGA ROYAL MOLLY 400% Snow White",
      description: "A collectible figure measuring approximately 380 mm tall. It is made primarily from durable ABS material. This figure is part of the MEGA COLLECTION series and features Molly in a Snow White-themed design, showcasing intricate and elegant details. It is sold in limited quantities to maintain exclusivity. The figure embodies the artistic and charming style typical of POP MART's designer toys.", //show ให้ user เห็นบนหน้า ProductDetails.jsx
      price: "8950", // format ให้เป็น "฿ x,xxx" ทำตอน render ใน frontend
      condition: "New", // tag มุมขวาบน มี 3 แบบ (New / New-Unboxed / Displayed, Like New)
      mainImage: "/images/p10-molly-snow-white-show.png", //show ให้ user เห็นบนหน้า UI ProductPage.jsx และ ProductDetails.jsx
      gallery: [
        //show ให้ user เห็นบนหน้า ProductDetails.jsx แบบ swipe เลื่อนได้ใน mobile
        "/images/p10-molly-snow-white-own-1.png",
        "/images/p10-molly-snow-white-2.png",
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
