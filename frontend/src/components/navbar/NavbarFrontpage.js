import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Content-Container">
      <div className="Content-Right">
      <a href="/database">Datenbank</a>
      </div>
      <div className="Content-Left">
        <a href="/">Login</a>
        <a href="/register">Registrierung</a>
      </div>
    </div>
  );
}

export default Navbar;
