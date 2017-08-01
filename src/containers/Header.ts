import { connect } from "react-redux";

import {
	IHeaderDataProps,
	IHeaderCallbackProps,
	Header
} from "../components/Header"

import { IState } from "../IState";
import { openSettings } from "../actions/settings";

interface IHeaderProps {
	title?: string,
	day?: number
}

const mapStateToProps = (state: IState, ownProps: IHeaderProps): IHeaderDataProps => {
	return {
		title: ownProps.title,
		day: ownProps.day,
		showSettings: state.showSettings
	};
}

const mapDispatchToProps = (dispatch: Function): IHeaderCallbackProps => {
	return {
		openSettings: () => {
			dispatch(openSettings())
		}
	}
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;