import React from "react";

const Sample = () => {
  return (
    <section className="sub_section">
      <div className="col-lg-12 section_heading">
        <h2>Product Information</h2>
      </div>
      <div className="card-row">
        <div className="col-lg-3 card_wrapper">
          <div className="col-lg-4 card_label">
            <label htmlFor="">Sr. no :</label>
          </div>
          <div className="col-lg-6 card_input">
            <input
              type="text"
              placeholder="Enter Serial no"
              name="date"
              className="form-control-sm form-control"
            />
          </div>
        </div>

        <div className="col-lg-3 card_wrapper">
          <div className="col-lg-4 card_label">
            <label htmlFor="">Item Code :</label>
          </div>
          <div className="col-lg-6 card_input">
            <input
              type="text"
              placeholder="Enter Item Code"
              name="date"
              className="form-control-sm form-control"
            />
          </div>
        </div>

        <div className="col-lg-3 card_wrapper">
          <div className="col-lg-6 card_label">
            <label htmlFor="">Item Description :</label>
          </div>
          <div className="col-lg-6 card_input">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Item Description"
            />
          </div>
        </div>
        <div className="col-lg-3 card_wrapper">
          <div className="col-lg-4 card_label">
            <label htmlFor="">HSN Code :</label>
          </div>
          <div className="col-lg-6 card_input">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Enter HSN Code"
            />
          </div>
        </div>
      </div>

      <div className="card-row">
        <div className="col-lg-2 card_wrapper">
          <div className="col-lg-6 card_label">
            <label htmlFor="">Qty :</label>
          </div>
          <div className="col-lg-6 card_input">
            <input
              type="text"
              placeholder="Enter Quantity"
              name="date"
              className="form-control-sm form-control"
            />
          </div>
        </div>

        <div className="col-lg-3 card_wrapper">
          <div className="col-lg-6 card_label">
            <label htmlFor="">UOM :</label>
          </div>
          <div className="col-lg-6 card_input">
            <input
              type="text"
              placeholder="Enter nos/set"
              name="date"
              className="form-control-sm form-control"
            />
          </div>
        </div>

        <div className="col-lg-3 card_wrapper">
          <div className="col-lg-6 card_label">
            <label htmlFor="">Rate :</label>
          </div>
          <div className="col-lg-6 card_input">
            <input
              type="text"
              placeholder="Enter Rate"
              name="date"
              className="form-control-sm form-control"
            />
          </div>
        </div>

        <div className="col-lg-3 card_wrapper">
          <div className="col-lg-6 card_label">
            <label htmlFor="">Amount :</label>
          </div>
          <div className="col-lg-6 card_input">
            <input
              type="text"
              placeholder="Enter Amount"
              name="date"
              className="form-control-sm form-control"
            />
          </div>
        </div>
        <div className="col">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sample;
