import React from "react";
import { useSelector } from "react-redux";
import "./Menu.css";

function Menu() {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <div className={`${theme == "light" ? "navbars" : "navbars darkNavbars"}`}>
      <ul className="navbarWrappers">
        <li className="nav-elements">CATEGORIES</li>
        <li className="nav-elements">GUIDES</li>
        <li className="nav-elements">WORDPRESS HOSTING</li>
        <li className="nav-elements">MANAGED HOSTING</li>
        <li className="nav-elements">COUPONS</li>
      </ul>
    </div>
  );
}

export default Menu;
