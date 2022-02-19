import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="/library">Bücherei</a>
      <a href="/profile">Profil</a>
      <a href="/">Logout</a>
    </div>
  );
}

export default Navbar;
