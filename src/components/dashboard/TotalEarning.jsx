import { data } from "../../data/TotalEarning/";

export const TotalEarning = () => {
  return (
    <>
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
                <span style={{ width: `${item.progress}%` }}></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
