import * as React from "react";

import { Popover } from "reactstrap"
import Octicon, {X} from "@githubprimer/octicons-react";

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
			<Popover id={this.props.id} style={{ zIndex: 1 }} target="">
				New feature - {this.props.description}
				<Octicon icon={X} />
				{/* <Glyphicon glyph="remove"
				style={{marginLeft: "5px", cursor: "pointer" }}
				title="Close"
				onClick={this.props.close}/> */}
			</Popover>
		);
	};
}