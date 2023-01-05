import * as React from "react";
import Banner from "./Banner";
import TopNavigation from "./TopNavigation";
import Header from "./Header";
import Services from "./Services";
import ShopOnline from "./ShopOnline";
import ContactUs from "./ContactUs";

const HomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <TopNavigation />
      <Header />
      <Services />
      <ShopOnline />
      <ContactUs />
    </React.Fragment>
  );
};

export default HomePage;
