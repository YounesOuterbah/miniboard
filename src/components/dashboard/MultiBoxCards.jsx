
export const MultiBoxCards = ({icon,text,amount,des}) => {
  return (
    <div className="box">
        {icon}
      <div className="txt">
        <p>{text}</p>
        <p>{amount}</p>
        <p>{des}</p>
      </div>
    </div>
  );
};
