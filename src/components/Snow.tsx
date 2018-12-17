import * as React from "react";

export interface ISnowDataProps {
	snowFall: any
}

export interface ISnowCallbackProps {
	loadSnowfallApi: () => void
}

export class Snow extends React.Component<ISnowCallbackProps & ISnowDataProps, {}> {
	componentDidMount() {
		this.props.loadSnowfallApi();
	}

	render() {
		if (this.props.snowFall) {
			this.props.snowFall.snow([document.body], {
				image: "/public/img/flake_g.png",
				minSize: 7,
				maxSize: 25
			})
		}

		return false;
	}
}