import { connect } from "react-redux";

import {
	IBodyDataProps,
	BodySection
} from "../components/BodySection"

import DateManager from "../DateManager";
import { IState } from "../IState";

const createContainer = (dateManager: DateManager) => {
	const mapStateToProps = (state: IState): IBodyDataProps => {
		return {
			isWeekend: dateManager.isWeekend(),
			viewMode: state.viewMode
		}
	}
	return connect(mapStateToProps)(BodySection);
}

const BodySectionContainer = createContainer(new DateManager());

export default BodySectionContainer;