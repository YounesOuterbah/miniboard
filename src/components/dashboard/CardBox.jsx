export const CardBox = ({ title, num, icon }) => {
  return (
    <div className="card-box">
      {icon}
      <div className="info">
        <p className="title">{title}</p>
        <h4 className="amount">{num}</h4>
      </div>
    </div>
  );
};
