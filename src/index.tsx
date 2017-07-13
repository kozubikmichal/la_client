import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/Header";
import { BodySection } from "./components/BodySection";

ReactDOM.render(
	<div>
		<Header title="Lunch Aggregator" />
		<BodySection />
	</div>,
	document.getElementById("example")
);