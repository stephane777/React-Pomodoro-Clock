import React from "react";
import { FaPause, FaPlay, FaRedo } from "react-icons/fa";
import "../style/timeController.css";

const TimeController = props => {
	return (
		<div className="time-controller">
			<button id="start_stop">
				<FaPlay />
				<FaPause />
			</button>
			<button id="reset">
				<FaRedo />
			</button>
		</div>
	);
};
export default TimeController;
