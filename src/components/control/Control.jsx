import "./control.scss";
import { BiSearch } from "react-icons/bi";
import { BsMoonStars, BsBell } from "react-icons/bs";
import profileImage from "/img/profile.png";

export const Control = () => {
  return (
    <div className="control">
      <div className="search">
        <BiSearch className="icon"/>
        <input type="search" name="" id="" />
      </div>
      <div className="profile">
        <BsMoonStars className="icon" />
        <BsBell className="icon" />
        <div className="img">
          <img src={profileImage} alt="" />
        </div>
      </div>
    </div>
  );
};
