import { MultiBoxCards } from "./MultiBoxCards";
import { BsBarChartFill, BsQuestionCircleFill } from "react-icons/bs";
import { FaDollarSign, FaBriefcase } from "react-icons/fa6";

export const MultiBox = () => {
  return (
    <div className="multi-box">
      <MultiBoxCards
        icon={
          <div className="icon" style={{ background: "#56ca00" }}>
            <BsBarChartFill />
          </div>
        }
        text="Total Profit"
        amount="$25.6k"
        des="Weekly Profit"
      />
      <MultiBoxCards
        icon={
          <div className="icon" style={{ background: "#8a8d93" }}>
            <FaDollarSign />
          </div>
        }
        text="Refunds"
        amount="$78"
        des="Past Month"
      />
      <MultiBoxCards
        icon={
          <div className="icon" style={{ background: "#9155fd" }}>
            <FaBriefcase />
          </div>
        }
        text="New Project"
        amount="862"
        des="Yearly Project"
      />
      <MultiBoxCards
        icon={
          <div className="icon" style={{ background: "#ffb400" }}>
            <BsQuestionCircleFill />
          </div>
        }
        text="Sales Queries"
        amount="15"
        des="Last Week"
      />
    </div>
  );
};
