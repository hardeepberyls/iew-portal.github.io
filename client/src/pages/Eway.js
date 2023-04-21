import React from "react";
import Header from "../components/Header";
import Sidemenu from "../components/Sidemenu";

const Eway = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row header_wrap">
          <Header />
        </div>
        <div className="row">
          <Sidemenu />
          <div className="col-lg-10 main_content">
            <h2>Eway</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eway;
