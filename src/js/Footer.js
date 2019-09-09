import React from "react";
import { DiReact, DiGithubBadge } from "react-icons/di";
import "../style/footer.css";

const Footer = props => {
	return (
		<div id="footer">
			<div>Created by Stephane Candelas</div>
			<a href="https://github.com/stephane777" target="_blank">
				<DiGithubBadge id="github_icon" />
			</a>
		</div>
	);
};

export default Footer;
