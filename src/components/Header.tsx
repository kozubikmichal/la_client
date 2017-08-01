import * as React from "react";
import { PageHeader, Col, Glyphicon, Button, Tooltip, Popover } from "react-bootstrap";

import DateManager from "../DateManager";

interface IState {
	now: Date
}

export interface IHeaderDataProps {
	title?: string;
	day?: number,
	showSettings: boolean
}

export interface IHeaderCallbackProps {
	openSettings: () => void
}

export class Header extends React.Component<IHeaderDataProps & IHeaderCallbackProps, {}> {
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
		let settings = this.props.showSettings;
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
						<Glyphicon glyph="cog" color="black" title="Settings" id="settings"
							style={{ fontSize: "1.5rem", color: "black", cursor: "pointer"
							}}
							onClick={this.props.openSettings}
						>
						</Glyphicon>
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