import * as React from "react";

export interface ISnowDataProps {
	enabled: boolean
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
		if (!this.props.snowFall) {
			return false;
		}

		if (this.props.enabled) {
			this.props.snowFall.snow([document.body], {
				image: "/public/img/flake_g.png",
				minSize: 7,
				maxSize: 25
			})
		} else {
			this.props.snowFall.snow([document.body], "clear");
		}

		return false;
	}
}