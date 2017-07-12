import * as React from "react";
import { PageHeader, Col } from "react-bootstrap";

import DateManager from "../DateManager";

interface IHeaderProps {
	title?: string;
	day?: number
}

export class Header extends React.Component<IHeaderProps, {}> {
	private dateManager = new DateManager();

	render() {
		let day = this.props.day !== undefined ? this.props.day : this.dateManager.getCurrentDay();
		
		return (
			<Col lg={12}>
				<PageHeader>{this.props.title}&nbsp;
					<small>
						{this.dateManager.getDayName(day)} {this.dateManager.getDateForWeekDay(day).toLocaleDateString()}
					</small>
				</PageHeader>
			</Col>
		);
	}
}