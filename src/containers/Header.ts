import { connect } from "react-redux";

import {
	IHeaderDataProps,
	IHeaderCallbackProps,
	Header
} from "../components/Header"

import { IState } from "../IState";
import { ViewMode } from "../ViewMode";
import { openSettings } from "../actions/settings";
import { switchMode } from "../actions/mode";

interface IHeaderProps {
	title?: string,
	day?: number
}

const mapStateToProps = (state: IState, ownProps: IHeaderProps): IHeaderDataProps => {
	return {
		title: ownProps.title,
		day: ownProps.day,
		showSettings: state.showSettings,
		viewMode: state.viewMode
	};
}

const mapDispatchToProps = (dispatch: Function): IHeaderCallbackProps => {
	return {
		openSettings: () => {
			dispatch(openSettings())
		},
		switchMode: (mode: ViewMode) => {
			dispatch(switchMode(mode))
		}
	}
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;