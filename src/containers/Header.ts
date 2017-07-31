import { connect } from "react-redux";

import {
	IHeaderDataProps,
	Header
} from "../components/Header"

import { IState } from "../IState";

interface IHeaderProps {
	title?: string,
	day?: number
}

const mapStateToProps = (state: IState, ownProps: IHeaderProps): IHeaderDataProps => {
	return {
		title: ownProps.title,
		day: ownProps.day
	};
}

const HeaderContainer = connect(mapStateToProps, null)(Header);

export default HeaderContainer;