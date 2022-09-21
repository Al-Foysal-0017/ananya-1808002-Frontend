import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGOUT } from "../../store/types/UserTypes";
import Logo from "../../assets/prj_images/LOGO.png";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const logout = () => {
    localStorage.removeItem("myToken");
    dispatch({ type: LOGOUT });
  };
  return (
    <div>
      <header>
        <div id="headbg" className="navContainer">
          <ul>
            <li>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/">
                <h2 style={{ color: "#fff" }} class="h-primary">
                  Locaport
                </h2>
              </Link>
            </li>

            {/* <span class="open-slide">
              <a href="#" onclick="openSlideMenu()">
              <svg width="30" height="30">
                <path d="M0,5,30,5" stroke="#000" stroke-width="5" />
                <path d="M0,14,30,14" stroke="#000" stroke-width="5" />
                <path d="M0,23,30,23" stroke="#000" stroke-width="5" />
              </svg>
              </a>
            </span> */}
          </ul>
          {!user ? (
            <Link style={{ textDecoration: "none" }} to="/login">
              <div className="navSwapBtn">Login</div>
            </Link>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              {user?.role === "admin" && (
                <Link style={{ textDecoration: "none" }} to="/admin">
                  <div className="navSwapBtn">Admin</div>
                </Link>
              )}

              <div onClick={logout} className="logoutBtn">
                Logout
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
