import React from "react";
import { useSelector } from "react-redux";
import "./Menu.css";

function Menu() {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <div
      className="navbars"
      style={{ background: theme == "light" ? "#fff" : "#2E3840" }}
    >
      <ul className="navbarWrappers">
        <li
          className="nav-elements"
          style={{
            color: theme == "light" ? "#000" : "#fff",
          }}
        >
          CATEGORIES
        </li>
        <li
          className="nav-elements"
          style={{
            color: theme == "light" ? "#000" : "#fff",
          }}
        >
          GUIDES
        </li>
        <li
          className="nav-elements"
          style={{
            color: theme == "light" ? "#000" : "#fff",
          }}
        >
          WORDPRESS HOSTING
        </li>
        <li
          className="nav-elements"
          style={{
            color: theme == "light" ? "#000" : "#fff",
          }}
        >
          MANAGED HOSTING
        </li>
        <li
          className="nav-elements"
          style={{
            color: theme == "light" ? "#000" : "#fff",
          }}
        >
          COUPONS
        </li>
      </ul>
    </div>
  );
}

export default Menu;
