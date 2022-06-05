import { memo } from "react";
import PropTypes from "prop-types";
import "./timer.scss";

const Timer = ({ timerValue }) => {
  //console.log("timerValue => ", timerValue);
  return (
    <div className="progress-bar">
      <div style={{ width: `${timerValue}%` }} className="progress-bar-value"></div>
    </div>
  );
};

Timer.propTypes = {
  timerValue: PropTypes.number,
};

export default memo(Timer);
