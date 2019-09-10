import React from "react";
import ReactDOM from "react-dom";
import "../style/style.css";
import Lengthcontrol from "./Lengthcontrol";
import Timer from "./Timer";
import TimeController from "./TimeController";
import Footer from "./Footer";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			break_length: 5,
			session_length: 25,
			time_left: "25:00"
		};
		this.handleTypeLength = this.handleTypeLength.bind(this);
	}

	handleTypeLength(type, operator) {
		const break_length = this.state.break_length;
		const session_length = this.state.session_length;
		const isBreakLengthinRange = break_length < 60 && break_length > 1;
		const isSessionLengthInRange = session_length < 60 && session_length > 1;

		if (
			(type === "break" && isBreakLengthinRange) ||
			(type === "break" && break_length == 60 && operator === "-") ||
			(type === "break" && break_length == 1 && operator === "+")
		) {
			this.setState(state => {
				return {
					break_length: eval(`${state.break_length}${operator}1`)
				};
			});
		}
		if (
			(type === "session" && isSessionLengthInRange) ||
			(type === "session" && session_length == 60 && operator === "-") ||
			(type === "session" && session_length == 1 && operator === "+")
		) {
			this.setState(state => {
				return {
					session_length: eval(`${state.session_length}${operator}1`),
					time_left: "" + eval(`${state.session_length}${operator}1`) + ":00"
				};
			});
		}
	}
	render() {
		console.log("toto");
		return (
			<div id="main-container">
				<h3 id="title">Pomodoro Clock</h3>
				<div className="flex-container">
					<Lengthcontrol
						type="break"
						lengthValue={this.state.break_length}
						lengthChange={(type, operator) =>
							this.handleTypeLength(type, operator)
						}
					/>
					<Lengthcontrol
						type="session"
						lengthValue={this.state.session_length}
						lengthChange={(type, operator) =>
							this.handleTypeLength(type, operator)
						}
					/>
				</div>
				<Timer timeLeft={this.state.time_left} />
				<TimeController />
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
