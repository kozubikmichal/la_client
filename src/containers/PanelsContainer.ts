import { connect } from "react-redux";

import { AsyncPanelsContainer } from "../components/body/AsyncPanelsContainer"

const PanelsContainer = connect(
	null,
	null
)(AsyncPanelsContainer);

export default PanelsContainer;