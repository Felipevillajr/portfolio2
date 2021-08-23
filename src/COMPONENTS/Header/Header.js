import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";

export default function Header() {
  return (
    <section className="header">
      {/* <div className="logo">Image</div> */}
      <div className="dropdown">
        <div className="homer dropbtn"></div>

        <div className="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/about">About-Me</Link>
          <Link to="/Portfolio">Portfolio</Link>
        </div>
      </div>
    </section>
  );
}
