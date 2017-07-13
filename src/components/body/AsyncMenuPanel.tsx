import * as React from "react";
import { Panel, Table, Glyphicon, Row } from "react-bootstrap";
import { Loader } from "../Loader"


import IMenu from "../../IMenu";
import { IRestaurant } from "../../IMenu";
import { MenuSection } from "./MenuSection";

import ApiWrapper from "../../ApiWrapper";
import DataStorage from "../../DataStorage";

interface IPanelProps {
	restaurant: IRestaurant
}

interface IMenuPanelState {
	menu: IMenu,
	expanded: boolean;
	[key:string]: any;
}

export class AsyncMenuPanel extends React.Component<IPanelProps, {}> {
	private api = new ApiWrapper();
	private dataStorage = DataStorage;
	private storageId: string;

	state: IMenuPanelState = {
		menu: null,
		expanded: true
	}

	componentDidMount() {
		this.api.loadMenu(this.props.restaurant.id).then((data) => {
			this.setState({
				menu: data
			})
		})
	}

	componentWillMount() {
		this.storageId = `state_${this.props.restaurant.id}`;
		this.setState({
			expanded: this.getStoredState(this.storageId).expanded
		})
	}

	render() {
		let { restaurant } = this.props;
		let { menu } = this.state;
		let main = menu && menu.menus[0];
		let others = menu && menu.menus.slice(1);

		return (
			<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
				<Panel expanded={this.state.expanded} collapsible bsStyle="info" header={this.getHeader(restaurant)}>
					{ menu ? this.getSections(main, others) : (<Loader />)}
				</Panel>
			</div>
		);
	}

	private getSections(main: any, others: any[]) {
		return [(<MenuSection section={main} />),
					others.map((section, index) => {
						return (<MenuSection section={section} key={index}/>)
		})]
	}

	private toggle() {
		this.setState((prevState: any) => ({
			expanded: !(prevState.expanded)
		}))
		this.storeState(this.storageId, "expanded", !(this.state.expanded));
	}

	private getHeader(restaurant: IRestaurant): JSX.Element {
		return (
			<Row>
				<div className="col-xs-9" onClick={() => this.toggle()} style={{cursor: "pointer"}}>
					<strong>{restaurant.name}</strong>
				</div>
				<div className="col-xs-3">
					<Glyphicon title={this.state.expanded ? "Collapse" : "Expand"} glyph={this.state.expanded ? "chevron-up" : "chevron-down"}
						style={{cursor: "pointer", marginLeft: "10px", float: "right"}}
						onClick={() => this.toggle()}
					/>
					<Glyphicon title="Go to original page" glyph="link"
						style={{cursor: "pointer", float: "right"}} 
						onClick={() => this.openPage(restaurant.url)}
					/>
				</div>
			</Row>
		)
	}

	private openPage(url: string) {
		window.open(url, "_blank");
	}

	private getStoredState(id: string): IMenuPanelState {
		let state = this.dataStorage.read(id);

		return state !== null ? JSON.parse(state) : this.getDefaultStoredState();
	}

	private storeState(id: string, key: string, value: any) {
		let state = this.getStoredState(id);
		state[key] = value;

		this.dataStorage.store(id, JSON.stringify(state));
	}

	private getDefaultStoredState() : IMenuPanelState {
		return {
			menu: null,
			expanded: true
		}
	}
}