import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { OrderStatusTracker } from "@/components/OrderStatusTracker";
import { getUserOrders } from "@/services/orderApi";

export const MyOrderStatus = () => {
  const [orders, setOrders] = useState([]); // เปลี่ยนเป็น state
  const [loading, setLoading] = useState(true); // loading

  // Fetch orders จาก Backend
  useEffect(() => {
    const loadOrders = async () => {
      setLoading(true);
      try {
        const data = await getUserOrders();

        if (data.error === false) {
          // แปลงข้อมูลให้ตรงกับ format ที่ component ต้องการ
          const formattedOrders = data.orders.map((order) => ({
            id: order.orderNumber,
            date: new Date(order.createdAt).toLocaleDateString(),
            status: order.status,
            items: order.basketItems.map((item) => ({
              id: item.productId,
              name: item.name,
              price: item.price,
              qty: item.quantity,
              image: item.mainImage,
            })),
            total: order.total,
          }));

          setOrders(formattedOrders);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen p-6 bg-[#fdf6ec] flex items-center justify-center text-black">
        <p className="text-xl">Loading orders...</p>
      </div>
    );
  }

  // ไม่มี order
  if (orders.length === 0) {
    return (
      <div className="min-h-screen p-6 bg-[#fdf6ec] flex items-center justify-center text-black">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            No order history found.
            <br />
            <br />
            Your next adventure starts here!
          </h2>
          <Button
            asChild
            className="mt-4 bg-black text-[#fdf6ec] hover:text-black hover:bg-stone-400"
          >
            <Link to="/products">Back to Browse</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf6ec] p-4 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-black">
        My Orders
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map((order) => (
          <Card
            key={order.id}
            className="bg-[#fdf6ec] shadow-md border border-gray-200 rounded-xl"
          >
            <CardContent className="p-6 space-y-6">
              <OrderStatusTracker order={order} />

              {/* Items */}
              <h2 className="text-lg font-bold mb-2 text-black">ITEMS</h2>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border-b pb-2 last:border-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-contain rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-black">
                        {item.name}{" "}
                        <span className="text-stone-400">x {item.qty}</span>
                      </p>
                      <p className="text-xs text-stone-600">
                        ฿ {Number(item.price).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t">
                <p className="text-base font-semibold text-black">
                  Total: ฿ {order.total.toLocaleString()}
                </p>
                <Button
                  variant="outline"
                  className="bg-black text-[#fdf6ec] hover:bg-stone-400 hover:text-black"
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};




// import React from "react";
// import { useLocation, Link } from "react-router-dom"; // เพิ่ม useLocation
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { OrderStatusTracker } from "@/components/OrderStatusTracker";

// export const MyOrderStatus = () => {
//   const location = useLocation();
//   const orderData = location.state?.orderData; // ดึง orderData ที่ส่งมา

//   if (!orderData) {
//     return (
//       <div className="min-h-screen p-6 bg-[#fdf6ec] flex items-center justify-center text-black">
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold">No order history found.<br></br><br></br> Your next adventure starts here!</h2>
//           <Button asChild className="mt-4 bg-black text-[#fdf6ec] hover:text-black hover:bg-stone-400">
//             <Link to="/products">Back to Browse</Link>
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   // สร้าง Array ของ orders โดยใช้ข้อมูลที่ได้รับมา
//   const ordersToDisplay = [{
//     id: orderData.id,
//     date: new Date().toLocaleDateString(),
//     status: "Preparing", // กำหนดสถานะเริ่มต้นเป็น "Preparing"
//     items: orderData.cart.map(item => ({
//       id: item._id,
//       name: item.name,
//       price: item.price,
//       qty: item.qty,
//       image: item.mainImage
//     })),
//     total: orderData.total,
//   }];;

//   return (
//     <div className="min-h-screen bg-[#fdf6ec] p-4 md:p-10">
//       <h1 className="text-2xl md:text-3xl font-bold mb-6 text-black">
//         My Orders
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {ordersToDisplay.map((order) => (
//           <Card
//             key={order.id}
//             className="bg-[#fdf6ec] shadow-md border border-gray-200 rounded-xl"
//           >
//             <CardContent className="p-6 space-y-6">
//               <OrderStatusTracker order={order} />
              
//               {/* Items */}
//               <h2 className="text-lg font-bold mb-2 text-black">ITEMS</h2>
//               <div className="space-y-3">
//                 {order.items.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center gap-3 border-b pb-2 last:border-0"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-14 h-14 object-contain rounded-lg"
//                     />
//                     <div className="flex-1">
//                       <p className="text-sm font-medium text-black">
//                         {item.name} <span className="text-stone-400">x {item.qty}</span>
//                       </p>
//                       <p className="text-xs text-stone-600">
//                         ฿ {Number(item.price).toLocaleString()}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Footer */}
//               <div className="flex items-center justify-between pt-4 border-t">
//                 <p className="text-base font-semibold text-black">
//                   Total: ฿ {order.total.toLocaleString()}
//                 </p>
//                 <Button
//                   variant="outline"
//                   className="bg-black text-[#fdf6ec] hover:bg-stone-400 hover:text-black"
//                 >
//                   View Details
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };