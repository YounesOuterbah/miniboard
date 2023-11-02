import { Card } from "./Card";
import ChartBar from "./ChartBar";
import { TotalEarning } from "./TotalEarning";
import "./dashboard.scss";
import { MultiBox } from "./MultiBox";
import { Table } from "./Table";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? "dashboard" : "dashboard dark"}>
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
        <div className="multi-box-container">
          <MultiBox />
        </div>
      </div>
      <div className="members-table">
        <Table />
      </div>
    </div>
  );
};
