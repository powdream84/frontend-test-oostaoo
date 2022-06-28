import { memo } from "react";
import "./timer.scss";

interface TimerProps {
  timerValue: number;
}

const Timer = ({ timerValue }: TimerProps) => {
  //console.log("timerValue => ", timerValue);
  return (
    <div className="progress-bar">
      <div style={{ width: `${timerValue}%` }} className="progress-bar-value"></div>
    </div>
  );
};

export default memo(Timer);
