import * as React from "react";
import { ImagePlaceholder } from "./ImagePlaceholder"
import { PanelsContainer } from "./body/PanelsContainer"

import DateManager from "../DateManager";

export class BodySection extends React.Component<Object, {}> {
	private dateManager = new DateManager();

	render() {
		return this.dateManager.isWeekend() ? (
			<ImagePlaceholder path="./img/weekend.jpg" />
		) : (
			<PanelsContainer />
		)
	}
}