import * as React from "react";
import { ImagePlaceholder } from "./ImagePlaceholder"
import PanelsContainer from "../containers/PanelsContainer"
import { ViewMode } from "../ViewMode";

export interface IBodyDataProps {
	isWeekend: boolean,
	viewMode: ViewMode
}

export class BodySection extends React.Component<IBodyDataProps, {}> {
	render() {
		return this.props.isWeekend ? (
			<ImagePlaceholder path="/public/img/weekend.jpg" />
		) : this.props.viewMode === ViewMode.Panels ? (
			<PanelsContainer />
		) : (
			<span>Map mode</span>
		)
	}
}