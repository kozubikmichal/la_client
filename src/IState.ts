import IMenu from "./IMenu"

export interface IRestaurants {
	collapsed: Array<string>;
	hidden: Array<string>;
}

export interface IMenus {
	[id: string]: IMenu
}

export interface IState {
	restaurants: IRestaurants,
	menus: IMenus
}
