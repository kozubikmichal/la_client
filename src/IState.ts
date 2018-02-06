import IMenu from "./IMenu"
import { IRestaurant } from "./IMenu"
import { ViewMode } from "./ViewMode"

export interface IRestaurants {
	collapsed: Array<string>;
	hidden: Array<string>;
}

export interface IMenus {
	[id: string]: IMenu
}

export interface INewFeature {
	elementId: string,
	shown: boolean,
	description: string,
	dateAdded: number
}

export interface IState {
	restaurants: IRestaurants,
	menus: IMenus,
	loadedRestaurants: IRestaurant[],
	showSettings: boolean,
	newFeatures: INewFeature[],
	viewMode: ViewMode
}
