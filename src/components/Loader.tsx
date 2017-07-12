import * as React from "react";

export class Loader extends React.Component<Object, {}> {
	render() {
		return (
			<div className="col-xs-12" style={{display: "flex", justifyContent: "center"}}>
				<div className="loader" />
			</div>
		);
	}
}