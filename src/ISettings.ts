import { IRestaurant } from "./IMenu";

export interface ISettings {
	restaurants: IRestaurantSetting[],
	effects: IEffectSetting[]
}

interface IEffectSetting {
	id: string;
	name: string;
	disabled: boolean;
}

interface IRestaurantSetting {
	restaurant: IRestaurant,
	hidden: boolean
}

export default ISettings;