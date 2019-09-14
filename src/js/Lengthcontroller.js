import React from "react";
import Lengthcontrol from "./Lengthcontrol";
const Lengthcontroller = props => {
	const type = ["break", "session"];
	return (
		<React.Fragment>
			{type.map((el, i) => (
				<Lengthcontrol
					key={i}
					type={el}
					lengthValue={props.state_length[i]}
					lengthChange={(type, operator) =>
						props.handleTypeLength(type, operator)
					}
				/>
			))}
		</React.Fragment>
	);
};
export default Lengthcontroller;
