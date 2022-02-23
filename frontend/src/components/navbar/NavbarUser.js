import React from "react";
import "./Navbar.css";

function Navbar() {
  const logout = () => {
    sessionStorage.clear();
  };

  return (
    <div className="Content-Container">
      <div className="Content-Left">
        <a href="/library">Bücherei</a>
        <a href="/profile">Profil</a>
        <a onClick={logout} href="/">
          Logout
        </a>
      </div>
    </div>
  );
}

export default Navbar;
