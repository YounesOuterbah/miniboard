import { CardBox } from "./CardBox";
import "./dashboard.scss";
import trophy from "/image/trophy.png";
import { FaArrowTrendUp, FaRegUser, FaLaptop, FaDollarSign } from "react-icons/fa6";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card">
          <div className="txt">
            <h3 className="title">Congratulations John! 🥳</h3>
            <p>Best seller of the month</p>
            <h4>$42.8k</h4>
            <button>VIEW SALES</button>
          </div>
          <div className="img">
            <img src={trophy} alt="trophy" />
          </div>
        </div>
        <div className="card">
          <div className="txt">
            <h3 className="title">Statistics Card</h3>
            <p>
              <span>Total 48.5% growth</span> 😎 this month
            </p>
          </div>
          <div className="boxs">
            <CardBox
              title="Sales"
              num="245K"
              icon={
                <div className="icon-box arrow">
                  <FaArrowTrendUp className="icon" />
                </div>
              }
            />
            <CardBox
              title="Customers"
              num="12.5k"
              icon={
                <div className="icon-box user">
                  <FaRegUser className="icon" />
                </div>
              }
            />
            <CardBox
              title="Products"
              num="1.54k"
              icon={
                <div className="icon-box laptop">
                  <FaLaptop className="icon" />
                </div>
              }
            />
            <CardBox
              title="Revenue"
              num="$88k"
              icon={
                <div className="icon-box money">
                  <FaDollarSign className="icon" />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
