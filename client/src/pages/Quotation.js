import React from "react";
import Header from "../components/Header";
import Sidemenu from "../components/Sidemenu";
import "../components/Title.css";

const Quotation = (props) => {
  const HeaderTitle = props.HeaderTitle;
  return (
    <>
      <div className="container-fluid">
        <div className="row header_wrap">
          <Header />
        </div>
        <div className="row">
          <Sidemenu />
          <div className="col-lg-10 main_content">
            <div className="col-lg-12 outer_wrap">
              <section className="sub_section">
                <div className="col-lg-12 section_heading">
                  <h2>General Information</h2>
                </div>
                <div className="card-row">
                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-4 card_label">
                      <label htmlFor="">Date :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter Date"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-4 card_label">
                      <label htmlFor="">Invoice no. :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter Invoice"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-6 card_label">
                      <label htmlFor="">E-way Bill :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter eway no."
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-6 card_label">
                      <label htmlFor="">Transportation :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter Transport mode"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="card-row">
                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-4 card_label">
                      <label htmlFor="">PO Number :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter PO number"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-4 card_label">
                      <label htmlFor="">PO Date :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter PO date"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-6 card_label">
                      <label htmlFor="">Challan Number:</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter Challan no"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-6 card_label">
                      <label htmlFor="">Challan Date :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter Challan date"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="sub_section">
                <div className="col-lg-12 section_heading">
                  <h2>Consignee Information</h2>
                </div>
                <div className="card-row">
                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-4 card_label">
                      <label htmlFor="">Name :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-4 card_label">
                      <label htmlFor="">GST no. :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter GST no"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 card_wrapper">
                    <div className="col-lg-4 card_label">
                      <label htmlFor="">Address :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <textarea
                        className="form-control form-control-sm"
                        name=""
                        id=""
                        cols="5"
                        rows="5"
                        placeholder="Enter Address"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="card-row">
                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-4 card_label">
                      <label htmlFor="">City :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter City"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-4 card_label">
                      <label htmlFor="">State :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter State"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-6 card_label">
                      <label htmlFor="">Pin Code :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter Pin Code"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>
                </div>
              </section>

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

              <section className="sub_section">
                <div className="col-lg-12 section_heading">
                  <h2>GST Taxes</h2>
                </div>

                <div className="card-row">
                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-4 card_label">
                      <label htmlFor="">SGST :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter SGST"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-4 card_label">
                      <label htmlFor="">CGST :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter CGST"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-2 card_wrapper">
                    <div className="col-lg-6 card_label">
                      <label htmlFor="">IGST :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter IGST"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 card_wrapper">
                    <div className="col-lg-6 card_label">
                      <label htmlFor="">Total Tax :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter Total Tax"
                        name="date"
                        className="form-control-sm form-control"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <div className="col-lg-12 submit_btns">
                <div className="col-lg-3 text-right">
                  <button type="button" className="btn btn-success">
                    Save
                  </button>
                </div>
                <div className="col-lg-3">
                  <button type="button" className="btn btn-primary">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotation;
