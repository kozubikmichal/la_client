import * as React from "react";
import { ImagePlaceholder } from "./ImagePlaceholder"
import PanelsContainer from "../containers/PanelsContainer"

export interface IBodyDataProps {
	isWeekend: boolean
}

export class BodySection extends React.Component<IBodyDataProps, {}> {
	render() {
		return this.props.isWeekend ? (
			<ImagePlaceholder path="/public/img/weekend.jpg" />
		) : (
			<PanelsContainer />
		)
	}
}