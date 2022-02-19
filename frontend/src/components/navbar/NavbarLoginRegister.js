import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="/">Startseite</a>
      <a href="/register">Register</a>
      <a href="/login">Login</a>
    </div>
  );
}

export default Navbar;
