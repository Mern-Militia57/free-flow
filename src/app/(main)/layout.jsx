import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

const MainpageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="outlineSpace">
      {children}
      </div>
      <Footer />
    
    </>
  );
};

export default MainpageLayout;
