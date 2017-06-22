import * as React from "react";
import { PageHeader, Col } from "react-bootstrap";

interface IHeaderProps {
	title?: string;
	day?: number
}

let dayNames = [
	"Pondělí",
	"Úterý",
	"Středa",
	"Čtvrtek",
	"Pátek"
]

export class Header extends React.Component<IHeaderProps, {}> {
	render() {
		let date = new Date();
		let day = this.props.day !== undefined ? this.props.day : date.getDay();
		let dayName = (day >= 1 && day <= 5) ? dayNames[day] : null;

		date.setDate(date.getDate() + (day - date.getDay()));

		return (
			<Col lg={12}>
				<PageHeader>{this.props.title} <small>{dayName} {date.toLocaleDateString()}</small></PageHeader>
			</Col>
		);
	}
}