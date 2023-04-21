import React from "react";

const Form = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 form-row" style={{ display: "flex" }}>
            <div className="col-lg-3">
              <input
                type="text"
                className="btn form-control-sm"
                placeholder="First Name"
              />
            </div>
            <div className="col-lg-3">
              <input
                type="text"
                className="btn form-control-sm"
                placeholder="Last Name"
              />
            </div>
            <div className="col-lg-3">
              <input
                type="text"
                className="btn form-control-sm"
                placeholder="Gender"
              />
            </div>
            <div className="col-lg-3">
              <input
                type="number"
                className="btn form-control-sm"
                placeholder="Mobile No."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
