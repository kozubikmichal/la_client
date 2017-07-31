import { connect } from "react-redux";
import { startRefresher } from "../actions/refresher";

import {
	IAppCallbackProps,
	App
} from "../components/App"

const mapDispatchToProps = (dispatch: Function): IAppCallbackProps => {
	return {
		onDidMount: () => {
			dispatch(startRefresher())
		}
	}
}

const AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;