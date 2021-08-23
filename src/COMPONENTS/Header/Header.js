import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";

export default function Header() {
  return (
    <section className="header, transparent-bg">
      {/* <Link to="/">Home</Link>
      <a
        href="https://github.com/Felipevillajr/Felipevillajr"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <Link to="/about">About me</Link>
      <Link to="/portfolio">Portfolio</Link> */}
      <h1>Felipe Villa</h1>
      <div className="dropdown">
        <button className="dropbtn">MENU</button>
        <div className="dropdown-content">
          <Link to="/">Home</Link>
          <a
            href="https://github.com/Felipevillajr/Felipevillajr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link to="/about">About me</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </div>
    </section>
  );
}
