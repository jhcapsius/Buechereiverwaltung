import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="/bookshelf">Bücherei</a>
      <a href="/">Logout</a>
    </div>
  );
}

export default Navbar;
