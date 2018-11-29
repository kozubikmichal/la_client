export default class Refresher {
	private isRunning = false;
	private intervalInHours = 3;

	public start(): void {
		if (!this.isRunning) {
			setInterval(() => this.refresh(), this.hToMs(this.intervalInHours));
			this.isRunning = true;
		}
	}

	private refresh() {
		window.location.reload();
	}

	private hToMs(h: number): number {
		return h * 60 * 60 * 1000
	}
}