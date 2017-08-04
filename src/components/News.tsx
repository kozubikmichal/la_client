import * as React from "react";

import { Popover } from "react-bootstrap"

import { INewFeature } from "../IState";
import NewsItem from "../containers/NewsItem";

export interface INewsDataProps {
	news: INewFeature[]
}

export class News extends React.Component<INewsDataProps, {}> {
	render() {
		return (
			<div>
				{this.props.news.map(n => this.getFeaturePopover(n))}
			</div>
		);
	};

	private getFeaturePopover(feature: INewFeature): JSX.Element {
		let popoverId = `feature_${feature.elementId}`
		let popover = (<NewsItem key={feature.elementId} id={popoverId} feature={feature} />)

		setTimeout(()=> {
			let element = document.getElementById(feature.elementId);
			let popover = document.getElementById(popoverId)

			popover.style.left = element.offsetLeft + element.offsetWidth + 10 + "px";
			popover.style.top = element.offsetTop - element.clientHeight + "px";
		})

		return popover;
	}
}