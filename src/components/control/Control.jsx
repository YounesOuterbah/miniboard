import "./control.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { BsMoonStars, BsBell, BsSun } from "react-icons/bs";
import profileImage from "/image/profile.png";
import { useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Control = ({ setMenuToggle }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="control">
      <div className="menu-search">
        <BiMenu className="menu" onClick={() => setMenuToggle(true)} />
        <div className="search">
          <AiOutlineSearch className="icon" />
          <input type="search" name="" id="" />
        </div>
      </div>
      <div className="profile">
        <div className="mode" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? <BsMoonStars className="icon" /> : <BsSun className="icon" />}
        </div>
        <BsBell className="icon" />
        <div className="img">
          <img src={profileImage} alt="" />
        </div>
      </div>
    </div>
  );
};
