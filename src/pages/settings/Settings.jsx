import { useState } from "react";
import { AiOutlineUser, AiOutlineInfoCircle } from "react-icons/ai";
import { CiUnlock } from "react-icons/ci";
import "./settings.scss";
import { AccountTab } from "./account/AccountTab";

export const Settings = () => {
  const [toggle, setToggle] = useState("account");
  return (
    <div className="settings">
      <div className="box-container">
        <ul className="links">
          <li onClick={() => setToggle("account")} className={toggle === "account" ? "active" : ""}>
            <AiOutlineUser className="icon" />
            ACCOUNT
          </li>
          <li
            onClick={() => setToggle("security")}
            className={toggle === "security" ? "active" : ""}
          >
            <CiUnlock className="icon" />
            SECURITY
          </li>
          <li onClick={() => setToggle("info")} className={toggle === "info" ? "active" : ""}>
            <AiOutlineInfoCircle className="icon" />
            INFO
          </li>
        </ul>
        <div className="content">
          <AccountTab />
        </div>
      </div>
    </div>
  );
};
