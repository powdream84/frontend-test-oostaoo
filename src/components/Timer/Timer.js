import { memo } from "react";
import "./timer.scss";

const Timer = ({ timerValue }) => {
  console.log("timerValue => ", timerValue);
  return (
    <div className="progress-bar">
      <div style={{ width: `${timerValue}%` }} className="progress-bar-value"></div>
    </div>
  );
};

export default memo(Timer);
