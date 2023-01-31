import React from "react";
import Navbar from "../../Assets/Components/Navbar";
import ContactUs from "./../home/ContactUs";
import Footer from "./../../Assets/Components/Footer";
import ContactUsHero from "./ContactUsHero";
import ContactUsBody from "./ContactUsBody";

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />
      <ContactUsHero />
      <ContactUsBody />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
