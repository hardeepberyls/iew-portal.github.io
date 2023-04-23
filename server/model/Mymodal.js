const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const dbase = require("../config/database");

app.get("/api/get", (req, res) => {
  const dataget = "select * from sale";
  dbase.query(dataget, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/post", (req, res) => {
  const {
    invoice_no,
    date,
    e_way,
    transport,
    po_number,
    po_date,
    challan_no,
    challan_date,
    name,
    gst_no,
    address,
    city,
    state,
    pincode,
    sr_no,
    item_code,
    item_description,
    hsn_code,
    quantity,
    uom,
    rate,
    amount,
    sgst,
    cgst,
    igst,
    total_tax,
  } = req.body;
  const datapost =
    "insert into sale(invoice_no,date,e_way,transport,po_number,po_date,challan_no,challan_date,name,gst_no,address,city,state,pincode,sr_no,item_code,item_description,hsn_code,quantity,uom,rate,amount,sgst,cgst,igst,total_tax) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  dbase.query(
    datapost,
    [
      invoice_no,
      date,
      e_way,
      transport,
      po_number,
      po_date,
      challan_no,
      challan_date,
      name,
      gst_no,
      address,
      city,
      state,
      pincode,
      sr_no,
      item_code,
      item_description,
      hsn_code,
      quantity,
      uom,
      rate,
      amount,
      sgst,
      cgst,
      igst,
      total_tax,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.delete("/api/delete/:id", (req, res) => {
  const { invoice_no } = req.params;
  const dataremove = "delete from sale where invoice_no=?";
  dbase.query(dataremove, invoice_no, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.get("/api/get/:id", (req, res) => {
  const { invoice_no } = req.params;
  const dataget = "select * from sale where invoice_no=?";
  dbase.query(dataget, invoice_no, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.put("/api/update/:id", (req, res) => {
  const { invoice_no } = req.params;
  const dataupdate =
    "update sale SET date=?, e_way=?,transport=?,po_number=?,po_date=?,challan_no=?,challan_date=?,name=?,gst_no=?,address=?,city=?,state=?,pincode=?,sr_no=?,item_code=?,item_description=?,hsn_code=?,quantity=?,uom=?,rate=?,amount=?,sgst=?,cgst=?,igst=?,total_tax=? where invoice_no=?";
  dbase.query(
    dataupdate,
    [
      invoice_no,
      date,
      e_way,
      transport,
      po_number,
      po_date,
      challan_no,
      challan_date,
      name,
      gst_no,
      address,
      city,
      state,
      pincode,
      sr_no,
      item_code,
      item_description,
      hsn_code,
      quantity,
      uom,
      rate,
      amount,
      sgst,
      cgst,
      igst,
      total_tax,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});
