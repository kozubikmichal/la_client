import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/Header";
import { PanelsContainer } from "./components/PanelsContainer";

ReactDOM.render(
	<div>
		<Header title="Lunch Aggregator" />
		<PanelsContainer />
	</div>,
	document.getElementById("example")
);