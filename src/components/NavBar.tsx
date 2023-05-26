import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopMedical } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl" href="/home">
          PharmaZone{" "}
          <FontAwesomeIcon
            icon={faLaptopMedical}
            size="sm"
            style={{ color: "#fa000c", marginLeft: "5px" }}
          />
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
