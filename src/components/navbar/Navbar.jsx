import "./navbar.scss";
import { Line } from "../line/Line";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

export const Navbar = ({ menuToggle, setMenuToggle }) => {
  const location = useLocation();
  const [toggle, setToggle] = useState("Dashboard");
  const { theme } = useContext(ThemeContext);

  const isLinkActive = (path) => location.pathname === path;

  return (
    <div className={menuToggle ? "navbar open" : "navbar"}>
      <div className="container">
        <div className="overlay"></div>
        <div className="logo">
          <MdDashboard className="icon" />
          MINIBOARD
        </div>
        <ul className={theme === "light" ? "dashboard-contect" : "dashboard-contect dark"}>
          <Line txt="HOME" />
          <Link
            to="/"
            className={isLinkActive("/") ? "active" : ""}
            onClick={() => {
              setToggle("Dashboard"), setMenuToggle(!menuToggle);
            }}
          >
            <AiOutlineHome className="icon" /> Dashboard
          </Link>
          <Link
            to="/settings"
            className={isLinkActive("/settings") ? "active" : ""}
            onClick={() => {
              setToggle("Account"), setMenuToggle(!menuToggle);
            }}
          >
            <AiOutlineSetting className="icon" />
            Account Settings
          </Link>
          <Line txt="APPS" />
          <Link
            to="/calendar"
            className={isLinkActive("/calendar") ? "active" : ""}
            onClick={() => {
              setToggle("Calendar"), setMenuToggle(!menuToggle);
            }}
          >
            <BsCalendarDate className="icon" />
            Calendar
          </Link>
        </ul>
      </div>
    </div>
  );
};
