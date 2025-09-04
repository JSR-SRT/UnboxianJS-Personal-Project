import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { CartProvider } from "@/contexts/CartContext";

// Import views (ใช้ named export)
import { HomePage } from "./views/HomePage";
import { AboutPage } from "./views/AboutPage";
import { ContactPage } from "./views/ContactPage";
import { ThankYouPage } from "./views/ThankYouPage";
import { SignInPage } from "./views/auth/SignInPage";
import { RegisterPage } from "./views/auth/RegisterPage";
import { ForgotPasswordPage } from "./views/auth/ForgotPasswordPage";
import { ProfilePage } from "./views/profile/ProfilePage";
import { ProfilePrivacy } from "./views/profile/ProfilePrivacy";
import { ProfileDelete } from "./views/profile/ProfileDelete";
import { AccountDeletedPage } from "./views/profile/AccountDeletedPage";
import { ProfileUpdate } from "./views/profile/ProfileUpdate";
import { MyOrderStatus } from "./views/profile/MyOrderStatus";
import { ProductPage } from "./views/ProductPage";
import { ProductDetails } from "./views/ProductDetails";
import { CartPage } from "./views/CartPage";
import { CheckoutPage } from "./views/CheckoutPage";
import { OrderConfirmationPage } from "./views/OrderConfirmationPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h1 className="text-2xl md:text-4xl font-bold text-red-600">
          404 - Page Not Found
        </h1>
        <p className="mt-2 text-gray-600">
          The page you are looking for does not exist.
        </p>
      </div>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "contact/thank-you", element: <ThankYouPage /> },

      // Auth
      { path: "signin", element: <SignInPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },

      // Profile
      { path: "profile", element: <ProfilePage /> },
      { path: "profile/privacy", element: <ProfilePrivacy /> },
      { path: "profile/delete", element: <ProfileDelete /> },
      { path: "account-deleted", element: <AccountDeletedPage /> },
      { path: "profile/update", element: <ProfileUpdate /> },
      { path: "profile/my-orders", element: <MyOrderStatus /> },

      // Others
      { path: "products", element: <ProductPage /> },
      { path: "products/:id", element: <ProductDetails /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "order-confirmation", element: <OrderConfirmationPage /> },
    ],
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
