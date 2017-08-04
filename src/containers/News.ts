import { connect } from "react-redux";

import {
	INewsDataProps,
	News
} from "../components/News"

import { IState, INewFeature } from "../IState";

const mapStateToProps = (state: IState, ownProps: any): INewsDataProps => {
	let now = new Date();
	return {
		news: state.newFeatures.filter(f => {
			let expiration = new Date(f.dateAdded);
			expiration.setDate(expiration.getDate() + 5);

			return !f.shown && expiration > now
		})
	};
}

const NewsContainer = connect(mapStateToProps, null)(News);

export default NewsContainer;