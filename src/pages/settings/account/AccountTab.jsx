import { useState, useRef } from "react";
import profile from "/image/profile.png";

export const AccountTab = () => {
  const [selectedImg, setSelectedImg] = useState(profile);
  const fileInputRef = useRef();
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelected = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImg(imageURL);
    }
  };

  const resetImage = () => {
    // Reset the selected image
    setSelectedImg(profile);

    // Reset the input element's value
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <>
      <div className="img-wrapper">
        <img src={selectedImg} alt="profile img" />
        <div className="info">
          <button className="upload" onClick={handleClick}>
            UPLOAD NEW PHOTO
          </button>
          <button className="reset" onClick={resetImage}>
            RESET
          </button>
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
      <form className="form">
        <div className="username">
          <input type="text" defaultValue="jhonDoe" placeholder="User Name" />
          <label>Username</label>
        </div>
        <div className="name">
          <input type="text" defaultValue="jhon Doe" placeholder="Name" />
          <label>Name</label>
        </div>
        <div className="email">
          <input type="email" defaultValue="jhonDoe@example.co" placeholder="email" />
          <label>Email</label>
        </div>
        <div className="selection">
          <select>
            <option>Admin</option>
            <option>Author</option>
            <option>Editor</option>
            <option>Subscriber</option>
          </select>
          <label>Role</label>
        </div>
      </form>
    </>
  );
};
