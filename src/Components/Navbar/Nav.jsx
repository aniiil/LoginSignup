import React from "react";
import "./nav.css";
import Na from "../assets/navlg.png";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <nav className="nav-con">
          <NavLink className="nav-brand" to="/">
            <img src={Na} className="nav-img" alt="logo.img" />
            Employee Management System
          </NavLink>
          <div className="r-link">
          <NavLink className="nav-link " to="/login">
           Log In
          </NavLink> <NavLink className="nav-link " to="/">

           / Sign Up
          </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
