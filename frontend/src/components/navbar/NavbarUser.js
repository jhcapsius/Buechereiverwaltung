import React from "react";
import "./Navbar.css";

function Navbar() {
  const logout = () => {
    sessionStorage.clear();
  }

  return (
    <div className="Navbar">
      <a onClick={logout} href="/">Logout</a>
    </div>
  );
}

export default Navbar;
