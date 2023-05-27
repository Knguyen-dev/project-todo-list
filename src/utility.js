
// Checks if a date WITHIN 7 days in the future; not including today
function isSevenDaysInFuture(dateOne, dateTwo) {
	const oneDayMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
	// Convert both dates to UTC to avoid issues with daylight saving time; essentially gets 
	// amount of miliseconds since january 1, 1970 zero hour
	const utcDateOne = Date.UTC(dateOne.getUTCFullYear(), dateOne.getUTCMonth(), dateOne.getUTCDate());
	const utcDateTwo = Date.UTC(dateTwo.getUTCFullYear(), dateTwo.getUTCMonth(), dateTwo.getUTCDate());
	const diffDays = Math.floor((utcDateTwo - utcDateOne) / oneDayMilliseconds);
  return diffDays > 0 && diffDays <= 7;
}

// Checks if two dates are the same; 
function isSameDate(dateOne, dateTwo) {
	const utcDateOne = Date.UTC(dateOne.getUTCFullYear(), dateOne.getUTCMonth(), dateOne.getUTCDate());
	const utcDateTwo = Date.UTC(dateTwo.getUTCFullYear(), dateTwo.getUTCMonth(), dateTwo.getUTCDate());
	return utcDateOne == utcDateTwo;
}

// Will return a date in the form "[Month] [Day], [Year]" e.g. "June 6, 2017"
function formatDateToUS(dateObj) {
	// Create a map of months
	const monthMap = {
		"01": "January",
		"02": "February",
		"03": "March",
		"04": "April",
		"05": "May",
		"06": "June",
		"07": "July",
		"08": "August",
		"09": "September",
		"10": "October",
		"11": "November",
		"12": "December"
	};
	
	// First we reassign the date object to the string to correct any date errosr created by it defaulting to certain timezones
	const dateStr = dateObj.toISOString().slice(0, 10);
	const yearStr = dateStr.slice(0, 4);
	const monthStr = monthMap[dateStr.slice(5,7)];
	let dayStr;
	// If the day value is single digits
	if (dateStr.slice(8, 9) == '0') {
		dayStr = dateStr.slice(9);
	} else {
		// Else if the day value is double digits, then we slice differently to get the full date
		dayStr = dateStr.slice(8);
	}
	// Format the string in the United States style
	const formattedDate = `${monthStr} ${dayStr}, ${yearStr}`;
	return formattedDate;
}

// Sorts your todos by their dueDate 
function sortTodosByDate(todos) {
	// Base case; at this case the list or partition is sorted so we return it up the stack
	if (todos.length <= 1) {
		return todos; 
	}
	// Create the left, right, and middle
	let lessThanPivot = [];
	let greaterThanPivot = []; 
	const pivot = todos[0];
	// Sort the todos by date
	for (let i = 1; i < todos.length; i++) {
		// If the date is earlier than the pivot's date
		if (todos[i].dueDate < pivot.dueDate) {
			lessThanPivot.push(todos[i]);
		} else {
			// Else this means the todo's due date is greater or later than the pivot
			greaterThanPivot.push(todos[i]);
		}
	}
	// Combine into one array in form [lessThanPivot, Pivot, greaterThanPivot], and recursively call the function
	// to get more sublists and sort further.
	todos = [...sortTodosByDate(lessThanPivot), pivot, ...sortTodosByDate(greaterThanPivot)]
	// Then once it's sorted and the base case is hit, it returns the sorted list
	return todos
}

export { isSevenDaysInFuture, isSameDate, formatDateToUS, sortTodosByDate };