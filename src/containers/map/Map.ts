import { connect } from "react-redux";

import {
	IMapDataProps,
	Map
} from "../../components/map/Map"

import { IState } from "../../IState";

const mapStateToProps = (state: IState, ownProps: IMapDataProps): IMapDataProps => {
	return {
		google: ownProps.google
	};
}

const Container = connect(
	mapStateToProps
)(Map);

export default Container;