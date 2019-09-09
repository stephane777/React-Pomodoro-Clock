import React from "react";
import "../style/lengthcontrol.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Lengthcontrol = props => {
	const { type } = props;
	return (
		<div className="lengthcontrol">
			<div id={`${type}-label`}>{type} length</div>
			<div className="length-container">
				<div id={`${type}-length`}>5</div>
				<div id="arrow-container">
					<div className="flex-container arrows">
						<FaAngleUp id={`${type}-increment`} />
						<FaAngleDown id={`${type}-decrement`} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Lengthcontrol;
