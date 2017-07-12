export default class DataStorage {
	public static store(key: string, value: string) {
		if (this.isStorageSupported()) {
			window.localStorage.setItem(key, value);
		}
	}

	public static read(key: string): string {
		if (this.isStorageSupported()) {
			return window.localStorage.getItem(key);
		}

		return null;
	}

	private static isStorageSupported(): boolean {
		return (typeof (Storage) !== "undefined");
	}
}