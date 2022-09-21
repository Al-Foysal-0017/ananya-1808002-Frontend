import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <div>
      <div className="adminNavbarContainer">
        <Link className="adminNavLink" to="/admin/all/places">
          All Plaeces
        </Link>
        <Link className="adminNavLink" to="/admin">
          Add Plaeces
        </Link>
        <Link className="adminNavLink" to="/admin/all/transports">
          All Transport
        </Link>
        <Link className="adminNavLink" to="/admin/add/transport">
          Add Transport
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
