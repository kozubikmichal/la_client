import IMenu from "./IMenu"
import { IRestaurant } from "./IMenu"
import { ViewMode } from "./ViewMode"

export interface IRestaurants {
	collapsed: Array<string>;
	hidden: Array<string>;
}

export interface IEffect {
	id: string;
	disabled: boolean;
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

export interface ILibraries {
	[id: string]: any
}

export interface IMapState {
	activeMarker: any,
	activeRestaurant: IRestaurant
}

export interface IState {
	restaurants: IRestaurants,
	menus: IMenus,
	loadedRestaurants: IRestaurant[],
	showSettings: boolean,
	newFeatures: INewFeature[],
	viewMode: ViewMode,
	libraries: ILibraries,
	map: IMapState,
	effects: IEffect[]
}
