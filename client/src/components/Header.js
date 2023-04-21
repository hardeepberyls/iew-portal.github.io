import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <>
      <div className="col-lg-2 header_logo">
        <img src={logo} alt="logo" className="img-fluid" />
      </div>
      <div className="col-lg-10"></div>
    </>
  );
};

export default Header;
