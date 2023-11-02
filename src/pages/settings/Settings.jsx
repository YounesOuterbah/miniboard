import { useContext, useState } from "react";
import { AiOutlineUser, AiOutlineInfoCircle } from "react-icons/ai";
import "./settings.scss";
import { AccountTab } from "./account/AccountTab";
import { InfoTab } from "./info/InfoTab";
import { ThemeContext } from "../../context/ThemeContext";

export const Settings = () => {
  const [toggle, setToggle] = useState("account");
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? "settings" : "settings dark"}>
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
