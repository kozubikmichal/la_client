enum DayOfWeek {
	Sunday = 0,
	Monday = 1,
	Tuesday = 2,
	Wendsday = 3,
	Thursday = 4,
	Friday = 5,
	Saturday = 6,
}

export default class DateManager {
	getDayName(day: DayOfWeek): string {
		return [
			"Neděle",
			"Pondělí",
			"Úterý",
			"Středa",
			"Čtvrtek",
			"Pátek",
			"Sobota"
		][day];
	}

	isWeekend(): boolean {
		let day = new Date().getDay();
		return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
	}

	getDateForWeekDay(day: DayOfWeek): Date {
		let date = new Date();

		date.setDate(date.getDate() + (day - date.getDay()));

		return date;
	}

	getToday(): Date {
		return new Date();
	}

	getCurrentDay(): DayOfWeek {
		return this.getToday().getDay();
	}
}
