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
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/invoice"
                className="nav-link"
              >
                All Invoices
              </NavLink>
            </li>
            <li
              className="nav-item"
            >
              <NavLink to="/sale" className="nav-link">New Sales</NavLink>
            </li>
            <li
              className="nav-item"
            >
              <NavLink to="/quotation" className="nav-link">New Quotation</NavLink>
            </li>
            <li
              className="nav-item"
            >
              <NavLink to="/purchase" className="nav-link">New Purchase</NavLink>
            </li>
            <li
              className="nav-item"
            >
              <NavLink to="/pi" className="nav-link">Performa Invoice</NavLink>
            </li>
            <li
              className="nav-item"
            >
              <NavLink to="/eway" className="nav-link">E-Way</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidemenu;
