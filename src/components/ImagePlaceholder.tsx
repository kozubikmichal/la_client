import * as React from "react";

interface IImagePlaceholderProps {
	path: string;
}

export class ImagePlaceholder extends React.Component<IImagePlaceholderProps, {}> {
	render() {
		return (
			<div className="col-xs-12" style={{display: "flex", justifyContent: "center"}}>
				<img src={this.props.path} className=".img-fluid" />
			</div>
		);
	};
}