import { useState } from "react";
import { AiOutlineUser, AiOutlineInfoCircle } from "react-icons/ai";
import "./settings.scss";
import { AccountTab } from "./account/AccountTab";
import { InfoTab } from "./info/InfoTab";

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
          <li onClick={() => setToggle("info")} className={toggle === "info" ? "active" : ""}>
            <AiOutlineInfoCircle className="icon" />
            INFO
          </li>
        </ul>
        <div className="content">{toggle === "account" ? <AccountTab /> : <InfoTab />}</div>
      </div>
    </div>
  );
};
