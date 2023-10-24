import "./control.scss";
import { BiSearch, BiMenu } from "react-icons/bi";
import { BsMoonStars, BsBell, BsSun } from "react-icons/bs";
import profileImage from "/img/profile.png";
import { useState } from "react";

export const Control = ({ setMenuToggle }) => {
  const [toggle, setToggle] = useState();
  return (
    <div className="control">
      <div className="menu-search">
        <BiMenu className="menu" onClick={()=>setMenuToggle(true)} />
        <div className="search">
          <BiSearch className="icon" />
          <input type="search" name="" id="" />
        </div>
      </div>
      <div className="profile">
        {toggle ? (
          <BsMoonStars onClick={() => setToggle(!toggle)} className="icon" />
        ) : (
          <BsSun onClick={() => setToggle(!toggle)} className="icon" />
        )}
        <BsBell className="icon" />
        <div className="img">
          <img src={profileImage} alt="" />
        </div>
      </div>
    </div>
  );
};
