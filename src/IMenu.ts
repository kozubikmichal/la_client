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

export enum MenuType {
	Standard,
	PDF
}

export interface IPDFInfo {
	url: string;
	pages: number[],
	content?: any
}

interface IMenu {
	restaurant: IRestaurant;
	menus: IMenuSection[],
	type: MenuType;
	pdfInfo?: IPDFInfo;
}

export default IMenu;