import "./navbar.scss";
import { Line } from "../line/Line";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineShoppingCart,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { BsPeople, BsCalendarDate, BsPencilSquare, BsPaintBucket } from "react-icons/bs";
import { GrTask } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { useState } from "react";

export const Navbar = ({ menuToggle, setMenuToggle }) => {
  const [toggle, setToggle] = useState("Dashboard");
  return (
    <div className={menuToggle ? "navbar open" : "navbar"}>
      <div className="container">
      <div className="overlay"></div>
        <div className="logo">
          <MdDashboard className="icon" />
          LUMINEX
        </div>
        <ul className="dashboard-contect">
          <li
            className={toggle === "Dashboard" ? "active" : ""}
            onClick={() => {
              setToggle("Dashboard"), setMenuToggle(!menuToggle);
            }}
          >
            <AiOutlineHome className="icon" /> Dashboard
          </li>
          <li
            className={toggle === "Account" ? "active" : ""}
            onClick={() => {
              setToggle("Account"), setMenuToggle(!menuToggle);
            }}
          >
            <AiOutlineSetting className="icon" />
            Account Settings
          </li>
          <Line txt="PAGES" />
          <li
            className={toggle === "Order" ? "active" : ""}
            onClick={() => {
              setToggle("Order"), setMenuToggle(!menuToggle);
            }}
          >
            <AiOutlineShoppingCart className="icon" />
            Order
          </li>
          <li
            className={toggle === "Employees" ? "active" : ""}
            onClick={() => {
              setToggle("Employees"), setMenuToggle(!menuToggle);
            }}
          >
            <BsPeople className="icon" />
            Employees
          </li>
          <li
            className={toggle === "Customers" ? "active" : ""}
            onClick={() => {
              setToggle("Customers"), setMenuToggle(!menuToggle);
            }}
          >
            <AiOutlineUsergroupAdd className="icon" />
            Customers
          </li>
          <Line txt="APPS" />
          <li
            className={toggle === "Calender" ? "active" : ""}
            onClick={() => {
              setToggle("Calender"), setMenuToggle(!menuToggle);
            }}
          >
            <BsCalendarDate className="icon" />
            Calender
          </li>
          <li className={toggle === "Kanban" ? "active" : ""} onClick={() => setToggle("Kanban")}>
            <GrTask className="icon" />
            Kanban
          </li>
          <li
            className={toggle === "Editor" ? "active" : ""}
            onClick={() => {
              setToggle("Editor"), setMenuToggle(!menuToggle);
            }}
          >
            <BsPencilSquare className="icon" />
            Editor
          </li>
          <li
            className={toggle === "Cpicker" ? "active" : ""}
            onClick={() => {
              setToggle("Cpicker"), setMenuToggle(!menuToggle);
            }}
          >
            <BsPaintBucket className="icon" />
            Color Picker
          </li>
        </ul>
      </div>
    </div>
  );
};
