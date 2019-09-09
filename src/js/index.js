import React from "react";
import ReactDOM from "react-dom";
import "../style/style.css";
import Lengthcontrol from "./Lengthcontrol";
import Timer from "./Timer";
import TimeController from "./TimeController";
import Footer from "./Footer";

class App extends React.Component {
	render() {
		return (
			<div id="main-container">
				<h3 id="title">Pomodoro Clock</h3>
				<div className="flex-container">
					<Lengthcontrol type="break" />
					<Lengthcontrol type="session" />
				</div>
				<Timer timeLeft="25:00" />
				<TimeController />
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
