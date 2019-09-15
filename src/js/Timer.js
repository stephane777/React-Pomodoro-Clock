import React from "react";
import "../style/timer.css";

const Timer = props => {
	return (
		<div className="timer-container">
			<div className="timer-frame">
				<div id="timer-label">{props.type}</div>
				<div id="time-left">{props.timeLeft}</div>
			</div>
		</div>
	);
};
export default Timer;
