import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout หลัก//
import { Layout } from "./components/Layout";

// Views/Pages ต่างๆ ที่มีใน Web App//
import { HomePage } from "./views/HomePage";
import { BrowsePage } from "./views/BrowsePage";
import { AboutPage } from "./views/AboutPage";
import { ContactPage } from "./views/ContactPage";
import { SignInPage } from "./views/SignInPage";
import { RegisterPage } from "./views/RegisterPage";
import { UserProfilePage } from "./views/UserProfilePage";
import { ShopPage } from "./views/ShopPage";
import { CartPage } from "./views/CartPage";
import { CheckoutPage } from "./views/CheckoutPage";
import { OrderConfirmationPage } from "./views/OrderConfirmationPage";

// สร้าง router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout เป็น wrapper หลัก
    children: [
      { index: true, element: <HomePage /> },
      { path: "browse", element: <BrowsePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "signin", element: <SignInPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "profile", element: <UserProfilePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "confirmation", element: <OrderConfirmationPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
