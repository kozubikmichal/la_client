import IMenu from "./IMenu"
import { IRestaurant } from "./IMenu"

export interface IRestaurants {
	collapsed: Array<string>;
	hidden: Array<string>;
}

export interface IMenus {
	[id: string]: IMenu
}

export interface IState {
	restaurants: IRestaurants,
	menus: IMenus,
	loadedRestaurants: IRestaurant[],
	showSettings: boolean
}
