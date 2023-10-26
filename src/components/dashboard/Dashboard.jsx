import { Card } from "./Card";
import ChartBar from "./ChartBar";
import { TotalEarning } from "./TotalEarning";
import "./dashboard.scss";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="cards">
        <Card />
        <div className="bar-chart">
          <h1 className="title">Weekly Overview</h1>
          <ChartBar />
        </div>
        <div className="total-earning">
          <h1 className="title">Total Earning</h1>
          <TotalEarning />
        </div>
        <div className="multi-box">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
};
