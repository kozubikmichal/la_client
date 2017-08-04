import * as React from "react";

import { Popover, Glyphicon } from "react-bootstrap"

import { INewFeature } from "../IState";

export interface INewsItemDataProps {
	description: string,
	id: string
}

export interface INewsItemCallbackProps {
	close: () => void
}

export class NewsItem extends React.Component<INewsItemDataProps & INewsItemCallbackProps, {}> {
	render() {
		return (
			<Popover id={this.props.id} style={{ zIndex: 1 }}>
				New feature - {this.props.description}
				<Glyphicon glyph="remove" 
				style={{marginLeft: "5px", cursor: "pointer" }}
				title="Close"
				onClick={this.props.close}/>
			</Popover>
		);
	};
}