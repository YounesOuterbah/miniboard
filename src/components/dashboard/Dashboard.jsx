import { Card } from "./Card";
import ChartBar from "./ChartBar";
import { TotalEarning } from "./TotalEarning";
import "./dashboard.scss";
import { MultiBox } from "./MultiBox";

import { rows } from "../../data/Table";

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
        <div className="multi-box-container">
          <MultiBox />
        </div>
      </div>
      <div className="members-table">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>DATE</th>
              <th>SALARY</th>
              <th>AGE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr>
                <td>
                  {item.name}
                  <p>{item.designation}</p>
                </td>
                <td>{item.email}</td>
                <td>{item.date}</td>
                <td>{item.salary}</td>
                <td>{item.age}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
