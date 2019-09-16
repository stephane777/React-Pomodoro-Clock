import React from "react";
import "../style/timer.css";

const Timer = props => {
	const { timeLeft: time_left } = props;
	const [minute, seconde] = time_left.split(":");
	const isLessThanOneMinute = minute === "00";
	const secondeIsOdd = +seconde % 2;
	const style = isLessThanOneMinute ? { color: "red" } : { color: "#34c015" };
	let styleColon;

	// 	? { backgroundColor: "rgb(174, 6, 6)" }
	// 	: { backgroundColor: "rgb(23, 84, 40)" };

	if (isLessThanOneMinute && secondeIsOdd) {
		styleColon = {
			backgroundColor: "rgb(255, 0, 0)",
			boxShadow: "0 0 12px white"
		};
	} else if (isLessThanOneMinute && !secondeIsOdd) {
		styleColon = {
			backgroundColor: "rgb(174, 6, 6)",
			boxShadow: "0 0 12px #555"
		};
	} else if (!isLessThanOneMinute && secondeIsOdd) {
		styleColon = {
			backgroundColor: "rgb(211,252,5)",
			boxShadow: "0 0 12px white"
		};
	} else if (!isLessThanOneMinute && !secondeIsOdd) {
		styleColon = {
			backgroundColor: "rgb(23, 84, 40)",
			boxShadow: "0 0 12px #555"
		};
	}

	return (
		<div className="timer-container">
			<div className="timer-frame" style={style}>
				<div id="timer-label">{props.type}</div>
				<div id="time-left">{props.timeLeft}</div>

				<div id="time-left-container">
					<div id="minute-container">
						<div id="minute">{minute}</div>
					</div>
					<div id="colon">
						<div id="up-colon" style={styleColon}></div>
						<div id="down-colon" style={styleColon}></div>
					</div>
					<div id="seconde-container">
						<div id="seconde">{seconde}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Timer;
