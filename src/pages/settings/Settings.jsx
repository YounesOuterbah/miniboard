import { useState, useRef } from "react";
import { AiOutlineUser, AiOutlineInfoCircle } from "react-icons/ai";
import { CiUnlock } from "react-icons/ci";
import profile from "/image/profile.png";
import "./settings.scss";

export const Settings = () => {
  const [toggle, setToggle] = useState("account");
  const [selectedImg, setSelectedImg] = useState(profile);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImg(imageURL);
    }
  };
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
          <div className="img-wrapper">
            <img src={selectedImg} alt="profile img" />
            <div className="info">
              <button onClick={handleUploadClick}>UPLOAD NEW PHOTO</button>
              <input
                type="file"
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileSelected}
              />
              <p>Allowed PNG or JPEG. Max size of 800K.</p>
            </div>
          </div>
          <div className="form">
            <input type="text" defaultValue="jhonDoe" placeholder="User Name" />
            <input type="text" defaultValue="jhon Doe" placeholder="Name" />
            <input type="email" defaultValue="jhonDoe@example.co" placeholder="email" />
            <select>
              <option value="">Admin</option>
              <option value="">Author</option>
              <option value="">Editor</option>
              <option value="">Subscriber</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
