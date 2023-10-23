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

export const Navbar = () => {
  const [toggle, setToggle] = useState("Dashboard");
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <MdDashboard className="icon" />
          LUMINEX
        </div>
        <ul className="dashboard-contect">
          <li
            className={toggle === "Dashboard" ? "active" : ""}
            onClick={() => setToggle("Dashboard")}
          >
            <AiOutlineHome className="icon" /> Dashboard
          </li>
          <li className={toggle === "Account" ? "active" : ""} onClick={() => setToggle("Account")}>
            <AiOutlineSetting className="icon" />
            Account Settings
          </li>
          <Line txt="PAGES" />
          <li className={toggle === "Order" ? "active" : ""} onClick={() => setToggle("Order")}>
            <AiOutlineShoppingCart className="icon" />
            Order
          </li>
          <li
            className={toggle === "Employees" ? "active" : ""}
            onClick={() => setToggle("Employees")}
          >
            <BsPeople className="icon" />
            Employees
          </li>
          <li
            className={toggle === "Customers" ? "active" : ""}
            onClick={() => setToggle("Customers")}
          >
            <AiOutlineUsergroupAdd className="icon" />
            Customers
          </li>
          <Line txt="APPS" />
          <li
            className={toggle === "Calender" ? "active" : ""}
            onClick={() => setToggle("Calender")}
          >
            <BsCalendarDate className="icon" />
            Calender
          </li>
          <li className={toggle === "Kanban" ? "active" : ""} onClick={() => setToggle("Kanban")}>
            <GrTask className="icon" />
            Kanban
          </li>
          <li className={toggle === "Editor" ? "active" : ""} onClick={() => setToggle("Editor")}>
            <BsPencilSquare className="icon" />
            Editor
          </li>
          <li className={toggle === "Cpicker" ? "active" : ""} onClick={() => setToggle("Cpicker")}>
            <BsPaintBucket className="icon" />
            Color Picker
          </li>
        </ul>
      </div>
    </div>
  );
};
