import * as React from "react";
import { Panel, Table, Glyphicon, Row } from "react-bootstrap";
import { Loader } from "../Loader"

import IMenu from "../../IMenu";
import { IRestaurant } from "../../IMenu";
import { MenuSection } from "./MenuSection";

export interface IAsyncMenuPanelDataProps {
	menu: IMenu,
	expanded: boolean,
	restaurant: IRestaurant
}

export interface IAsyncMenuPanelCallbackProps {
	onPressHeader: (expanded: boolean) => void,
	onPressLink: () => void,
	loadMenu: () => void
}

export class AsyncMenuPanel extends React.Component<IAsyncMenuPanelDataProps & IAsyncMenuPanelCallbackProps, {}> {
	private toggle = () => this.props.onPressHeader(this.props.expanded);

	componentDidMount() {
		this.props.loadMenu()
	}

	render() {
		let { restaurant, menu } = this.props;
		let main = menu && menu.menus[0];
		let others = menu && menu.menus.slice(1);

		return (
			<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
				<Panel expanded={this.props.expanded} collapsible bsStyle="primary" header={this.getHeader(restaurant)}>
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

	private getHeader(restaurant: IRestaurant): JSX.Element {
		return (
			<Row>
				<div className="col-xs-9" onClick={() => this.toggle()} style={{cursor: "pointer"}}>
					<strong>{restaurant.name}</strong>
				</div>
				<div className="col-xs-3">
					<Glyphicon title={this.props.expanded ? "Collapse" : "Expand"} glyph={this.props.expanded ? "chevron-up" : "chevron-down"}
						style={{cursor: "pointer", marginLeft: "10px", float: "right"}}
						onClick={() => this.toggle()}
					/>
					<Glyphicon title="Go to original page" glyph="link"
						style={{cursor: "pointer", float: "right"}} 
						onClick={this.props.onPressLink}
					/>
				</div>
			</Row>
		)
	}
}