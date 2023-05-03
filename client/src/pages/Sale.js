import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidemenu";

const initialState = {
  date: "",
  invoice_no: "",
  eway: "",
  transport: "",
  po_no: "",
  po_date: "",
  challan_date: "",
  challan_no: "",
  name: "",
  gst_no: "",
  address: "",
  city: "",
  state: "",
  pin_code: "",
  sgst: "",
  cgst: "",
  igst: "",
  total_tax: "",
};

const Sale = () => {
  const [data, setData] = useState(initialState);
  const [
    date,
    invoice_no,
    eway,
    transport,
    po_no,
    po_date,
    challan_date,
    challan_no,
    name,
    gst_no,
    address,
    city,
    state,
    pin_code,
    sgst,
    cgst,
    igst,
    total_tax,
  ] = data;

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setData({...data, [name]: value})
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row header_wrap">
          <Header />
        </div>
        <div className="row">
          <Sidebar />
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
                        id="date"
                        onChange={handleChange}
                        value={date || ""}
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
                        name="invoice_no"
                        className="form-control-sm form-control"
                        id="invoice_no"
                        value={invoice_no || ""}
                        onChange={handleChange}
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
                        name="eway"
                        className="form-control-sm form-control"
                        id="eway"
                        value={eway || ""}
                        onChange={handleChange}
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
                        name="transport"
                        className="form-control-sm form-control"
                        id="transport"
                        value={transport || ""}
                        onChange={handleChange}
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
                        name="po_no"
                        className="form-control-sm form-control"
                        id="po_no"
                        value={po_no || ""}
                        onChange={handleChange}
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
                        name="po_date"
                        className="form-control-sm form-control"
                        id="po_date"
                        value={po_date || ""}
                        onChange={handleChange}
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
                        name="challan_no"
                        className="form-control-sm form-control"
                        id="challan_no"
                        value={challan_no || ""}
                        onChange={handleChange}
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
                        name="challan_date"
                        className="form-control-sm form-control"
                        id="challan_date"
                        value={challan_date || ""}
                        onChange={handleChange}
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
                      <label htmlFor="name">Name :</label>
                    </div>
                    <div className="col-lg-6 card_input">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        className="form-control-sm form-control"
                        id="name"
                        value={name || ""}
                        onChange={handleChange}
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
                        name="gst_no"
                        className="form-control-sm form-control"
                        id="gst_no"
                        value={gst_no || ""}
                        onChange={handleChange}
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
                        name="address"
                        id="address"
                        cols="5"
                        rows="5"
                        placeholder="Enter Address"
                        value={address || ""}
                        onChange={handleChange}
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
                        name="city"
                        className="form-control-sm form-control"
                        id="city"
                        value={city || ""}
                        onChange={handleChange}
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
                        name="state"
                        className="form-control-sm form-control"
                        id="state"
                        value={state || ""}
                        onChange={handleChange}
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
                        name="pin_code"
                        className="form-control-sm form-control"
                        id="pin_code"
                        value={pin_code || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="sub_section">
                <div className="col-lg-12 section_heading">
                  <h2>Product Information</h2>
                </div>
                <div className="card-row table-responsive">
                  <table className="table table_data">
                    <thead>
                      <tr>
                        <th>Sr. no.</th>
                        <th>Item Code</th>
                        <th>Item Description</th>
                        <th>HSN Code</th>
                        <th>Qty</th>
                        <th>UOM</th>
                        <th>Rate</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default Sale;
