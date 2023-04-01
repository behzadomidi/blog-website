import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTheme } from "../../store/actions/action";
import "./Navbar.css";

const Navbar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.themeReducer);

  const handlerToggle = () => {
    setIsOpen(!isOpen);
  };

  const changeTheme = (e) => {
    if (e.target.checked) {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  };

  return (
    <div
      className="nav"
      style={{ background: theme == "light" ? "#fff" : "#182434" }}
    >
      <ul className="navbarWrapper">
        <li>
          <div className="nav-logo" onClick={() => navigate("/")}>
            <img
              src="https://www.wpkube.com/wp-content/themes/wpkube4/images/logo.png"
              width="130"
              height="49"
              alt="logo"
            />
          </div>
        </li>
        <li
          className="nav-element"
          style={{
            color: theme == "light" ? "#000" : "#fff",
          }}
        >
          CATEGORIES
        </li>
        <li
          className="nav-element"
          style={{
            color: theme == "light" ? "#000" : "#fff",
          }}
        >
          GUIDES
        </li>
        <li
          className="nav-element"
          style={{
            color: theme == "light" ? "#000" : "#fff",
          }}
        >
          WORDPRESS HOSTING
        </li>
        <li
          className="nav-element"
          style={{
            color: theme == "light" ? "#000" : "#fff",
          }}
        >
          MANAGED HOSTING
        </li>
        <li
          className="nav-element"
          style={{
            color: theme == "light" ? "#000" : "#fff",
          }}
        >
          COUPONS
        </li>
        <li className="nav-icon">
          <label className="switch">
            <input type="checkbox" onChange={changeTheme} />
            <span className="slider round"></span>
          </label>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={handlerToggle}>
        <i className="fa-solid fa-bars "></i>
      </div>
    </div>
  );
};

export default Navbar;
