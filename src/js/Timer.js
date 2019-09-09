import React from "react";
import "../style/timer.css";

const Timer = props => {
	return (
		<div className="timer-container">
			<div className="timer-frame">
				<div id="timer-label">Session</div>
				<div id="time-left">{props.timeLeft}</div>
			</div>
		</div>
	);
};
export default Timer;
