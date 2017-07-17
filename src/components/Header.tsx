import * as React from "react";
import { PageHeader, Col } from "react-bootstrap";

import DateManager from "../DateManager";

interface IState {
	now: Date
}

interface IHeaderProps {
	title?: string;
	day?: number
}

export class Header extends React.Component<IHeaderProps, {}> {
	private dateManager = new DateManager();
	state: IState = {
		now: null
	}

	componentWillMount() {
		this.updateTime();
	}

	componentDidMount() {
		setInterval(() => this.updateTime(), 1000);
	}

	render() {
		let now = this.state.now || this.dateManager.getToday();
		let day = this.props.day !== undefined ? this.props.day : this.dateManager.getCurrentDay();
		
		return (
			<Col lg={12}>
				<PageHeader>
					<span>
						{this.props.title}&nbsp;
						<small>
							{this.dateManager.getDayName(day)} {this.dateManager.getDateForWeekDay(day).toLocaleDateString()}
						</small>
						&nbsp;
						<span style={{float: "right"}}>
							{now.toLocaleTimeString()}
						</span>
					</span>
				</PageHeader>
			</Col>
		);
	}

	private updateTime() {
		this.setState({
			now: this.dateManager.getToday()
		})
	}
}