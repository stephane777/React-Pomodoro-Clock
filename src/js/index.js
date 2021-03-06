import React from "react";
import ReactDOM from "react-dom";
import "../style/style.css";

import Timer from "./Timer";
import TimeController from "./TimeController";
import Footer from "./Footer";
import Lengthcontroller from "./Lengthcontroller";
import "../audio/back-to-the-future-twinkle.mp3";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "Session",
			break_length: 5,
			session_length: 25,
			time_left: "25:00",
			isTimerRunning: false,
			idSetIntervall: 0
		};
		this.handleTypeLength = this.handleTypeLength.bind(this);
		this.handleStartStop = this.handleStartStop.bind(this);
		this.toggleIsTimerRunning = this.toggleIsTimerRunning.bind(this);
		this.formatAndUpdateTimeLeft = this.formatAndUpdateTimeLeft.bind(this);
		this.formatDigit = this.formatDigit.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
	}
	resetTimer() {
		const audio = document.getElementById("beep");
		this.setState({
			type: "Session",
			break_length: 5,
			session_length: 25,
			time_left: "25:00",
			isTimerRunning: false
		});
		clearInterval(this.state.idSetIntervall);
		audio.pause();
		audio.currentTime = 0;
	}
	toggleIsTimerRunning() {
		this.setState({
			isTimerRunning: !this.state.isTimerRunning
		});
	}
	formatDigit(digit) {
		const digit_length = digit.toString().length;
		digit_length < 2 ? (digit = `0${digit}`) : digit;
		return digit;
	}
	formatAndUpdateTimeLeft() {
		const timer = this.state.time_left;
		let [minute, second] = timer.split(":");

		if (second === "00" && minute != "00") {
			minute = this.formatDigit(minute - 1);
			this.setState({
				time_left: `${minute}:${59}`
			});
		} else if (second === "00" && minute === "00") {
			this.setState(state => {
				const break_formatted = this.formatDigit(state.break_length);
				const session_formatted = this.formatDigit(state.session_length);
				return {
					type: state.type === "Session" ? "Break" : "Session",
					time_left:
						state.type === "Session"
							? `${break_formatted}:00`
							: `${session_formatted}:00`
				};
			});
			document.getElementById("beep").play();
		} else {
			second = this.formatDigit(second - 1);
			this.setState({
				time_left: `${minute}:${second}`
			});
		}
	}
	handleStartStop() {
		const isTimerRunning = this.state.isTimerRunning;

		// update time_left in this.state.time_left
		if (isTimerRunning) {
			// STOPING TIMER
			this.toggleIsTimerRunning();
			clearInterval(this.state.idSetIntervall);
		} else {
			// RUNNING TIMER

			this.toggleIsTimerRunning();
			const idSetIntervall = setInterval(this.formatAndUpdateTimeLeft, 1000);
			this.setState({
				idSetIntervall: idSetIntervall
			});
		}
	}

	handleTypeLength(type, operator) {
		if (this.state.isTimerRunning) return;
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
				let session_length = eval(`${state.session_length}${operator}1`);
				// console.log(`session_length: ${session_length}`);
				session_length = this.formatDigit(session_length);
				return {
					session_length: eval(`${state.session_length}${operator}1`),
					time_left: `${session_length}:00`
				};
			});
		}
	}
	render() {
		const break_length = this.state.break_length;
		const session_length = this.state.session_length;
		return (
			<div id="main-container">
				{/* <h3 id="title">Pomodoro Clock</h3> */}
				<div id="title">
					<img
						id="bttf"
						src="https://fontmeme.com/permalink/190916/05c2954a801aec76b88b17fca4aef2d3.png"
						alt="back-to-the-future-font"
						border="0"
					/>
				</div>

				<div className="flex-container">
					<Lengthcontroller
						state_length={[break_length, session_length]}
						handleTypeLength={(type, operator) =>
							this.handleTypeLength(type, operator)
						}
					/>
				</div>
				<Timer timeLeft={this.state.time_left} type={this.state.type} />
				<TimeController
					startNStop={() => this.handleStartStop()}
					reset={() => this.resetTimer()}
				/>
				<audio id="beep">
					<source src="back-to-the-future-twinkle.mp3" type="audio/mpeg" />
					<p>Your browser doesn't support HTML5 audio. </p>
				</audio>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
