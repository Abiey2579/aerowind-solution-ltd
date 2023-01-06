import * as React from "react";
import Banner from "./Banner";
import TopNavigation from "./TopNavigation";
import Header from "./Header";
import Services from "./Services";
import ShopOnline from "./ShopOnline";
import ContactUs from "./ContactUs";
import OurStory from "./OurStory";

const HomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <TopNavigation />
      <Header />
      <Services />
      <ShopOnline />
      <OurStory />
      <ContactUs />
    </React.Fragment>
  );
};

export default HomePage;
