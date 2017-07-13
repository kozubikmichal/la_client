export default class ApiWrapper {
	public loadMenus(): Promise<any> {
		return fetch("/api/menu")
			.then(response => response.json());
	}

	public loadMenu(restaurantId: string): Promise<any> {
		return fetch(`/api/menu/${restaurantId}`)
			.then(response => response.json());
	}

	public loadRestaurants(): Promise<any> {
		return fetch("/api/restaurant")
			.then(response => response.json());
	}
}