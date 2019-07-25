import * as React from "react";

import Header from "../containers/Header";
import BodySection from "../containers/BodySection";
import Settings from "../containers/Settings";
import Snow from "../containers/Snow";
import WoWBanner from "../containers/WoWBanner";

export interface IAppCallbackProps {
	onDidMount: () => void
}

export class App extends React.Component<IAppCallbackProps, {}> {
	componentDidMount() {
		this.props.onDidMount()
	}

	render() {
		return (
		<div>
			<Header title="Lunch Aggregator" />
			<BodySection />
			<WoWBanner />
			<Settings />
			<Snow />
		</div>
		)
	}
}