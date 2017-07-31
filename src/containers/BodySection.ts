import { connect } from "react-redux";

import {
	IBodyDataProps,
	BodySection
} from "../components/BodySection"

import DateManager from "../DateManager";

const createContainer = (dateManager: DateManager) => {
	const mapStateToProps = (): IBodyDataProps => {
		return {
			isWeekend: dateManager.isWeekend()
		}
	}
	return connect(mapStateToProps, null)(BodySection);
}

const BodySectionContainer = createContainer(new DateManager());

export default BodySectionContainer;