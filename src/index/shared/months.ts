export const months = [
	'January',
	'Febuary',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const daysInMonth = (isLeapYear: boolean): { [key: string]: number } => {
	return {
		January: 31,
		Febuary: isLeapYear ? 29 : 28,
		March: 31,
		April: 30,
		May: 31,
		June: 30,
		July: 31,
		August: 31,
		September: 30,
		October: 31,
		November: 30,
		December: 31,
	};
};

export const getFirstDayOfMonth = (month: string, year: number) => {
	return new Date(year, months.indexOf(month), 1).getDay();
};

export const isLeapYear = (year: number): boolean => {
	if (year % 4 === 0) {
		return true;
	}
	return false;
};

export const getPrevMonth = (month: string): string => {
	return month === 'January' ? 'December' : months[months.indexOf(month) - 1];
};

export const getNextMonth = (month: string): string => {
	return month === 'December' ? 'January' : months[months.indexOf(month) + 1];
};

export const buildDateArray = (
	firstDayOfWeek: number,
	month: string,
	isLeapYear: boolean,
	year: number
): Date[] => {
	const days = [];
	const prevMonth = getPrevMonth(month);
	const nextMonth = getNextMonth(month);
	const daysInPrevMonth = daysInMonth(isLeapYear)[prevMonth];

	for (
		let day = daysInPrevMonth - firstDayOfWeek + 1;
		day <= daysInPrevMonth;
		day++
	) {
		days.push(
			new Date(
				month === 'January' ? year - 1 : year,
				months.indexOf(prevMonth),
				day
			)
		);
	}
	for (let day = 1; day <= daysInMonth(isLeapYear)[month]; day++) {
		days.push(new Date(year, months.indexOf(month), day));
	}
	console.log(year);
	for (let day = 1; days.length < 42; day++) {
		//console.log(year, day, nextMonth);
		days.push(
			new Date(
				month === 'December' ? year + 1 : year,
				months.indexOf(nextMonth),
				day
			)
		);
	}
	return days;
};
