import React from "react";
import ReactDOM from "react-dom";
import "../style/style.css";
import Lengthcontrol from "./Lengthcontrol";

class App extends React.Component {
	render() {
		return (
			<div id="main-container">
				<h3 id="title">Pomodoro Clock</h3>
				<div className="flex-container">
					<Lengthcontrol type="break" />
					<Lengthcontrol type="session" />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
