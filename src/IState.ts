import IMenu from "./IMenu"
import { IRestaurant } from "./IMenu"

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
	dateAdded: Date
}

export interface IState {
	restaurants: IRestaurants,
	menus: IMenus,
	loadedRestaurants: IRestaurant[],
	showSettings: boolean,
	newFeatures: INewFeature[]
}
