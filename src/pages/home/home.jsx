import * as React from "react";
import Banner from "./Banner";
import Navbar from "./../../Assets/Components/Navbar";
import Footer from "./../../Assets/Components/Footer";
import Header from "./Header";
import Services from "./Services";
import ShopOnline from "./ShopOnline";
import Quote from "./Quote";
import OurStory from "./OurStory";

const HomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <Navbar />
      <Header />
      <Services />
      <ShopOnline />
      <OurStory />
      <Quote />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
