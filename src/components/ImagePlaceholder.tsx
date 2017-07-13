import * as React from "react";

import { Image } from "react-bootstrap"

import IMenu from "../IMenu";

interface IImagePlaceholderProps {
	path: string;
}

export class ImagePlaceholder extends React.Component<IImagePlaceholderProps, {}> {
	render() {
		return (
			<div className="col-xs-12" style={{display: "flex", justifyContent: "center"}}>
				<Image src={this.props.path} responsive />
			</div>
		);
	};
}