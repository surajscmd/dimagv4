"use client";
import React from "react";
import Button from "./Button";
import "./componentcss/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/image.png" alt="Logo" className="navbar-logo-img" />
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <a href="#" className="navbar-link">
          About
        </a>
        <a href="#" className="navbar-link">
          Service
        </a>
        <a href="#" className="navbar-link">
          Contact
        </a>
      </div>

      {/* CTA Button */}
      <div className="navbar-cta">
        <Button
          onClick={() => console.log("✅ this is click navbar")}
          classname="hero-btn"
          content="Request a growth"
        />
      </div>
    </nav>
  );
};

export default Navbar;
