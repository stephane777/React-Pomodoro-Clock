import React from "react";
import "../style/lengthcontrol.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Lengthcontrol = props => {
	const { type } = props;
	return (
		<div className="lengthcontrol">
			<div id={`${type}-label`}>{type} length</div>
			<div className="length-container">
				<div id={`${type}-length`}>{props.lengthValue}</div>
				<div className="arrow-container">
					<div className="flex-container arrows">
						<div
							className="hover"
							id={`${type}-increment`}
							onClick={() => props.lengthChange(type, "+")}
						>
							<FaAngleUp />
						</div>
						<div
							className="hover"
							id={`${type}-decrement`}
							onClick={() => props.lengthChange(type, "-")}
						>
							<FaAngleDown />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Lengthcontrol;
