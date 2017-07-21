import * as React from "react";
import Refresher from "../Refresher";

import { Header } from "./Header";
import { BodySection } from "./BodySection";

export class App extends React.Component<Object, {}> {
	private refresher = new Refresher();

	constructor(props: any) {
		super(props);

		this.refresher.start()
	}

	render() {
		return (
		<div>
			<Header title="Lunch Aggregator" />
			<BodySection />
		</div>
		)
	}
}