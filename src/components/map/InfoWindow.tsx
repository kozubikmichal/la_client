import * as React from "react";
import { renderToString } from "react-dom/server";
import IMenu, { IMenuSection, IRestaurant } from "../../IMenu";
import { Loader } from "../Loader";
import { MenuSection } from "../body/MenuSection";
import { Row, Glyphicon } from "react-bootstrap";

export interface IInfoWindowDataProps {
	google?: any,
	map?: any,
	marker?: any,
	visible: boolean,
	restaurant: IRestaurant,
	menu: IMenu
}

export interface IInfoWindowCallbackProps {
	loadMenu: (restaurant: string) => void
}

interface IState {
	infoWindow?: any,
	rendered: boolean
}

export class InfoWindow extends React.Component<IInfoWindowDataProps & IInfoWindowCallbackProps, {}> {
	state: IState = {
		rendered: false
	}

	componentDidMount() {
		this.tryRerender();
	}

	componentDidUpdate(prevProps: IInfoWindowDataProps) {
		this.tryRerender();

		if (this.props.restaurant && this.props.restaurant !== prevProps.restaurant) {
			this.props.loadMenu(this.props.restaurant.id);
		}

		if (this.state.rendered) {
			if (!this.props.visible){
				this.state.infoWindow.close();
			} else{
				if (this.props.menu !== prevProps.menu) {
					this.state.infoWindow.setContent(this.getContent());
				}
				this.state.infoWindow.open(this.props.map, this.props.marker);
			}
		}
	}

	private renderInfoWindow() {

		this.setState({
			infoWindow: new this.props.google.maps.InfoWindow({
				content: ""
			}),
			rendered: true
		});
	}

	private tryRerender() {
		if (!this.state.rendered && this.props.google) {
			this.renderInfoWindow();
		}
	}

	render(): false {
		return false
	};

	private getContent() {
		const {menu} = this.props;
		let main = menu && menu.menus[0];
		let others = menu && menu.menus.slice(1);

		let content = (
			<div>
				<Row width="90%" style={{
					marginRight: 0,
					marginBottom: "1rem"
				}} >
					<div className="col-xs-9">
						<strong>{this.props.restaurant.name}</strong>
					</div>
					<div className="col-xs-3">
						<a href={this.props.restaurant.url} target="_blank">
							<Glyphicon title="Go to original page" glyph="link"
								style={{cursor: "pointer", float: "right"}}
							/>
						</a>
					</div>
				</Row>

				{ menu ? this.getSections(main, others) : (<Loader />)}
			</div>
			);

		return renderToString(content);
	}

	private getSections(main: IMenuSection, others: IMenuSection[]) {
		return [(<MenuSection section={main} key={main.name || "main"} />),
					others.map((section, index) => {
						return (<MenuSection section={section} key={index}/>)
		})]
	}
}