import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl" href="/home">
          PharmaZone
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
