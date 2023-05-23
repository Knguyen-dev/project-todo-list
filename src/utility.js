
// Given dateOne is the starting date, we check if dateTwo is within 7 days in the future
function isSevenDaysInFuture(dateOne, dateTwo) {
  const oneDayMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

  // Convert both dates to UTC to avoid issues with daylight saving time
  const utcDateOne = Date.UTC(dateOne.getUTCFullYear(), dateOne.getUTCMonth(), dateOne.getUTCDate());
  const utcDateTwo = Date.UTC(dateTwo.getUTCFullYear(), dateTwo.getUTCMonth(), dateTwo.getUTCDate());

  const diffDays = Math.floor((utcDateTwo - utcDateOne) / oneDayMilliseconds);

  return diffDays > 0 && diffDays <= 7;
}

// Checks to see if two dates match
function isSameDate(dateOne, dateTwo) {
	const isSameYear = dateOne.getFullYear() === dateTwo.getFullYear();
	const isSameMonth = dateOne.getFullMonth() === dateTwo.getFullMonth();
	const isSameDay = dateOne.getDate() === dateTwo.getDate();
	return isSameYear && isSameMonth && isSameDay;
}

export {isSevenDaysInFuture, isSameDate};