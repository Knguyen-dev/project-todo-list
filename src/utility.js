
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

export {isSevenDaysInFuture, isSameDate};


// Since everytime we modify add, or delete, we update the screen, maybe have a function for that
// 