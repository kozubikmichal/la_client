import { IState } from "./IState";
import { ViewMode } from "./ViewMode";
import { Store } from "redux";

export default class StateStorage {
	private defaultState: IState = {
		restaurants: {
			collapsed: [],
			hidden: []
		},
		menus: {},
		loadedRestaurants: [],
		showSettings: false,
		newFeatures: [{
			description: "Settings",
			elementId: "settings",
			shown: false,
			dateAdded: (new Date(2017, 7, 1)).getTime()
		}],
		viewMode: ViewMode.Panels
	}

	constructor(private key = "state") { }

	public save(store: Store<IState>) {
		if (this.isStorageSupported()) {
			let permaState = this.stateToPermaState(store.getState());

			window.localStorage.setItem(this.key, JSON.stringify(permaState));
		}
	}

	public load(): IState {
		let result: IState;

		if (this.isStorageSupported()) {
			result = JSON.parse(window.localStorage.getItem(this.key));
		}

		return (<any>Object).assign({}, this.defaultState, result)
	}

	private isStorageSupported(): boolean {
		return (typeof (Storage) !== "undefined");
	}

	private stateToPermaState(state: IState): any {
		return {
			restaurants: state.restaurants,
			newFeatures: state.newFeatures,
			viewMode: state.viewMode
		}
	}
}