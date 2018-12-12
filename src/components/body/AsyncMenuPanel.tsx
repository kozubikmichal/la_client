import * as React from "react";
import { Card, Row, Collapse, Col } from "reactstrap";
import Octicon, { Link, ChevronDown, ChevronUp, LinkExternal } from "@githubprimer/octicons-react";
import { Loader } from "../Loader"

import IMenu, { MenuType } from "../../IMenu";
import { IRestaurant, IMenuSection } from "../../IMenu";
import { MenuSection } from "./MenuSection";

import { PDFPreview } from "./PDFPreview";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";

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
		let isPDF = menu && menu.type === MenuType.PDF;

		return (
			<Card>
				<CardHeader>
					{this.getHeader(restaurant)}
				</CardHeader>
				<Collapse isOpen={this.props.expanded}>
					<CardBody>
						{
							isPDF ? (<PDFPreview restaurant={restaurant} pdfInfo={menu.pdfInfo} />) :
							menu ? this.getSections(main, others) : (<Loader />)
						}
					</CardBody>
				</Collapse>
			</Card>
		);
	}

	private getSections(main: IMenuSection, others: IMenuSection[]) {
		return [(<MenuSection section={main} key={main.name || "main"} />),
					others.map((section, index) => {
						return (<MenuSection section={section} key={index}/>)
		})]
	}

	private getHeader(restaurant: IRestaurant): JSX.Element {
		return (
			<Row>
				<Col xs={9} onClick={() => this.toggle()}
					style={{cursor: "pointer"}}>
					<strong>{restaurant.name}</strong>
				</Col>
				<Col xs={3}>
					<a 	href="#"
						style={anchorStyles}
						title={this.props.expanded ? "Collapse" : "Expand"}
						onClick={() => this.toggle()}>
						<Octicon icon={this.props.expanded ? ChevronUp : ChevronDown} height={22}/>
					</a>
					<a 	href="#"
						style={anchorStyles}
						title="Go to original page"
						onClick={this.props.onPressLink}>
						<Octicon icon={LinkExternal} height={22}/>
					</a>
				</Col>
			</Row>
		)
	}
}

const anchorStyles: React.CSSProperties = {
	color: "white",
	float: "right",
	marginLeft: "10px"
}