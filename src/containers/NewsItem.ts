import { connect } from "react-redux";

import {
	INewsItemCallbackProps,
	INewsItemDataProps,
	NewsItem
} from "../components/NewsItem"

import { IState, INewFeature } from "../IState";
import { markRead } from "../actions/news";

interface IItemProps {
	id: string,
	feature: INewFeature
}

const mapStateToProps = (state: IState, ownProps: any): INewsItemDataProps => {
	return {
		id: ownProps.id,
		description: ownProps.feature.description
	};
}

const mapDispatchToProps = (dispatch: Function, ownProps: IItemProps): INewsItemCallbackProps => {
	return {
		close: () => {
			dispatch(markRead(ownProps.feature))
		}
	}
}

const NewsItemContainer = connect(mapStateToProps, mapDispatchToProps)(NewsItem);

export default NewsItemContainer;