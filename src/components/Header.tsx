import * as React from "react";
import { ViewMode } from "../ViewMode";
import Octicon, {Gear} from "@githubprimer/octicons-react";

import DateManager from "../DateManager";

interface IState {
	now: Date
}

export interface IHeaderDataProps {
	title?: string;
	day?: number,
	showSettings: boolean,
	viewMode: ViewMode
}

export interface IHeaderCallbackProps {
	openSettings: () => void,
	switchMode: (mode: ViewMode) => void
}

export class Header extends React.Component<IHeaderDataProps & IHeaderCallbackProps, {}> {
	private dateManager = new DateManager();
	state: IState = {
		now: this.dateManager.getToday()
	}

	componentDidMount() {
		setInterval(() => this.updateTime(), 1000);
	}

	render() {
		let now = this.state.now || this.dateManager.getToday();

		return (
			<div className="d-flex sticky-top pb-1 pt-1 header align-items-center">
				<div className="p-2 ml-2">
					<img src="/public/img/logo_32x32_white.png" />
				</div>
				<div className="p-2">
					<h3 style={{display: "inline", marginRight: "1rem"}}>{this.props.title}</h3>
				</div>
				<div className="mr-auto pt-2 pr-2 align-bottom">
					by&nbsp;<a style={{color: "khaki", fontWeight: "bold"}} href="https://people.wdf.sap.corp/profiles/I336114" target="_blank">Michal Kozubík</a>
				</div>

				<div className="p-2">
					<h4 style={{display: "inline"}}>
						{now.toLocaleTimeString()}
					</h4>
				</div>

				<div className="p-2 align-middle">
					<a
						href="#"
						style={{verticalAlign: "text-top", color: "white"}}
						onClick={this.props.openSettings}
						title="Settings">
						<Octicon icon={Gear} width={18} />
					</a>
				</div>
			</div>
		);
	}

	private updateTime() {
		this.setState({
			now: this.dateManager.getToday()
		})
	}
}