export interface IMeal {
	name: string;
	price: string;
}

export interface IMenuSection {
	name?: string;
	meals: IMeal[]
}

interface IPosition {
	lat: string;
	lng: string;
}

export interface IRestaurant {
	id: string;
	name: string;
	url: string;
	position: IPosition;

}

interface IMenu {
	restaurant: IRestaurant;
	menus: IMenuSection[]
}

export default IMenu;