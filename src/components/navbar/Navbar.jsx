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

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">LUMINEX</div>
        <ul className="dashboard-contect">
          <li className="active">
            <AiOutlineHome className="icon" /> Dashboard
          </li>
          <li>
            <AiOutlineSetting className="icon" />
            Account Settings
          </li>
          <Line txt="PAGES" />
          <li>
            <AiOutlineShoppingCart className="icon" />
            Order
          </li>
          <li>
            <BsPeople className="icon" />
            Employees
          </li>
          <li>
            <AiOutlineUsergroupAdd className="icon" />
            Customers
          </li>
          <Line txt="APPS" />
          <li>
            <BsCalendarDate className="icon" />
            Calender
          </li>
          <li>
            <GrTask className="icon" />
            Kanban
          </li>
          <li>
            <BsPencilSquare className="icon" />
            Editor
          </li>
          <li>
            <BsPaintBucket className="icon" />
            Color Picker
          </li>
        </ul>
      </div>
    </div>
  );
};
