import DateManager from "./DateManager";

export default class Refresher {
	private intervalInHours = 3;

	public start(): void {
		setInterval(() => this.refresh(), this.hToMs(this.intervalInHours));
	}

	private refresh() {
		window.location.reload();
	}

	private hToMs(h: number): number {
		return h * 60 * 60 * 1000
	}
}