const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const dbase= require("../config/database")

dbase.query("insert into sale where 'invoice_no','date','e_way','transport','po_number','po_date','challan_no','challan_date','name','gst_no','address','city','state','pincode','serial_number','item_code','item_description','hsn_code','quantity','uom','rate','amount','sgst','cgst','igst','amount' values ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?")


