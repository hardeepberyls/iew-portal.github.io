import React from "react";
import Header from "../components/Header";
import Sidemenu from "../components/Sidemenu";

const Performa = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row header_wrap">
          <Header />
        </div>
        <div className="row">
          <Sidemenu />
          <div className="col-lg-10 main_content">
            <h2>Performa Invoice</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performa;
