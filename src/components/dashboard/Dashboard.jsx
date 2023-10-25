import { CardBox } from "./CardBox";
import ChartBar from "./ChartBar";
import "./dashboard.scss";
import trophy from "/image/trophy.png";
import { FaArrowTrendUp, FaRegUser, FaLaptop, FaDollarSign } from "react-icons/fa6";
import { data } from "../../data/TotalEarning/";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card">
          <div className="txt">
            <h1 className="title">Congratulations John! 🥳</h1>
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
            <h1 className="title">Statistics Card</h1>
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
        <div className="bar-chart">
          <h1 className="title">Weekly Overview</h1>
          <ChartBar />
        </div>
        <div className="total-earning">
          <h1 className="title">Total Earning</h1>
          <p className="rev">$24,895</p>
          <p className="des">Compared to $84,325 last year</p>
          <div className="item-box">
            {data.map((item) => (
              <div className="earn-info">
                <div className="earn">
                  <div className="earn-img">
                    <img src={item.imgSrc} height={item.imgHeight} alt="" />
                  </div>
                  <div className="earn-txt">
                    <p className="company">{item.title}</p>
                    <p className="subs">{item.subtitle}</p>
                  </div>
                </div>
                <div className="scroller">
                  <p>{item.amount}</p>
                  <div className="bar">
                    <span style={{width:`${item.progress}%`}}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
