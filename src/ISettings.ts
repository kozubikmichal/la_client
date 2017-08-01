import { IRestaurant } from "./IMenu";

export interface ISettings {
	restaurants: IRestaurantSetting[]
}

interface IRestaurantSetting {
	restaurant: IRestaurant,
	hidden: boolean
}

export default ISettings;