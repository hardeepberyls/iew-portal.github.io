import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidemenu = () => {
  const [activeClass, setactiveClass] = useState("dashboard");

  const handleItemClick = (itemName) => {
    setactiveClass(itemName);
  };
  return (
    <>
      <div className="col-lg-2 sidebar px-0">
        <nav className="navbar-nav">
          <ul className="sidebar_nav">
            <li className={activeClass === "dashboard" ? "active" : ""}>
              <NavLink to="/" onClick={() => handleItemClick("dashboard")}>
                Dashboard
              </NavLink>
            </li>
            <li className={activeClass === "invoice" ? "active" : ""}>
              <NavLink
                to="/invoice"
                onClick={() => {
                  handleItemClick("invoice");
                }}
              >
                All Invoices
              </NavLink>
            </li>
            <li
              className={activeClass === "sale" ? "active" : ""}
              onClick={() => handleItemClick("sale")}
            >
              <NavLink to="/sale">New Sales</NavLink>
            </li>
            <li
              className={activeClass === "quotation" ? "active" : ""}
              onClick={() => {
                handleItemClick("quotation");
              }}
            >
              <NavLink to="/quotation">New Quotation</NavLink>
            </li>
            <li
              className={activeClass === "purchase" ? "active" : ""}
              onClick={() => {
                handleItemClick("purchase");
              }}
            >
              <NavLink to="/purchase">New Purchase</NavLink>
            </li>
            <li
              className={activeClass === "pi" ? "active" : ""}
              onClick={() => {
                handleItemClick("pi");
              }}
            >
              <NavLink to="/pi">Performa Invoice</NavLink>
            </li>
            <li
              className={activeClass === "eway" ? "active" : ""}
              onClick={() => {
                handleItemClick("eway");
              }}
            >
              <NavLink to="/eway">E-Way</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidemenu;
