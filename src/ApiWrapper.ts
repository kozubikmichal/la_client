export default class ApiWrapper {
	public loadAllMenus(): Promise<any> {
		return fetch("/api/menu")
			.then(response => response.json());
	}
}