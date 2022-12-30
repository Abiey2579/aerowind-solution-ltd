import * as React from "react";
import Banner from "./Banner";
import TopNavigation from "./TopNavigation";
import Header from "./Header";
import Services from "./Services";

const HomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <TopNavigation />
      <Header />
      <Services />
    </React.Fragment>
  );
};

export default HomePage;
