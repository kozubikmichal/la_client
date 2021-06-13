import * as React from "react";
import { ReactElement, ReactChild } from "react";

export interface IMapDataProps {
	google: any
}

interface IState {
	map?: any
}

export class Map extends React.Component<IMapDataProps, {}> {
	static readonly SapLabsBrno = {
		lat: 49.181168,
		lng: 16.605745
	};

	state: IState = {}

	componentDidMount() {
		this.setState({
			map: new this.props.google.maps.Map(this.refs.map, {
				center: Map.SapLabsBrno,
				zoom: 16
			})
		})
	}

	render() {
		return (
			<div ref="map" style={{
				width: "100%",
				height: "100%"
			}}>
				Loading Map...

				{this.renderChildren()}
			</div>
		)
	};

	private renderChildren(){
		const { children } = this.props;
		if (!children) {
			return;
		}

		return React.Children.map(children, c => this.cloneChild(c as ReactChild, {
			google: this.props.google,
			map: this.state.map
		}));
	}

	private cloneChild(child: ReactChild, props: any) {
		return React.cloneElement(child as ReactElement<any>, props);
	}
}