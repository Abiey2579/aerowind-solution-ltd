import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import ContactUsPage from "./pages/contact_us/ContactUs";
import ShopOnline from "./pages/shop_online/shopOnline";

const Aerowind = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/shop" element={<ShopOnline />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Aerowind;
