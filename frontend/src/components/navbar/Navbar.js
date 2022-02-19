import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="/">Startseite</a>
      <a href="/library">Bücherei</a>
      <a href="/administration">Bücher und Regalverwaltung</a>
    </div>
  );
}

export default Navbar;
