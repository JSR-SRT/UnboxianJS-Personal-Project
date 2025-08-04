import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Layout หลัก// 
import { Layout } from './components/Layout';

// Views/Pages ต่างๆ ที่มีใน Web App//
import { HomePage } from './views/HomePage';
import { BrowsePage } from './views/BrowsePage';
import { AboutPage } from './views/AboutPage';
import { ContactPage } from './views/ContactPage';
import { SignInPage } from './views/SignInPage';
import { RegisterPage } from './views/RegisterPage';
import { UserProfilePage } from './views/UserProfilePage';
import { ShopPage } from './views/ShopPage';
import { CartPage } from './views/CartPage';
import { CheckoutPage } from './views/CheckoutPage';
import { OrderConfirmationPage } from './views/OrderConfirmationPage';

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* layout ที่เป็น wrapper ที่คุมทุก Page อยู่ */}
      <Route path="/" element={<Layout />}>
      <Route index={true} element={<HomePage />} />
      <Route path="browse" element={<BrowsePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="profile" element={<UserProfilePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="confirmation" element={<OrderConfirmationPage />} />
      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}


