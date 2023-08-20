// Checks if a date WITHIN 7 days in the future; not including today
function isSevenDaysInFuture(inputDate) {
    const today = new Date();
    const oneDayMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    // Convert both dates to UTC to avoid issues with daylight saving time; essentially gets
    // amount of miliseconds since january 1, 1970 zero hour
    const todayUTC = Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate()
    );
    const inputDateUTC = Date.UTC(
        inputDate.getUTCFullYear(),
        inputDate.getUTCMonth(),
        inputDate.getUTCDate()
    );
    /*
	1. inputDateUTC - todayUTC; difference between days in miliseconds, if we 
		assume inputDate UTC is some date in the future, it should be greater than 
		today UTC.
	2. Divide by amount of miliseconds in a day, you'd get the approximate amount of days
	3. Round it down, and you got the approximate difference in days.
	*/
    const diffDays = Math.floor((inputDateUTC - todayUTC) / oneDayMilliseconds);
    return diffDays > 0 && diffDays <= 7;
}

function isToday(inputDate) {
    const today = new Date();
    const todayUTC = Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate()
    );
    const inputDateUTC = Date.UTC(
        inputDate.getUTCFullYear(),
        inputDate.getUTCMonth(),
        inputDate.getUTCDate()
    );
    return todayUTC == inputDateUTC;
}

// Will return a date in the form "[Month] [Day], [Year]" e.g. "June 6, 2017"
/*
- NOTE: When creating new Date("yyyy-mm-dd") objects, calling .toDateString() sometimes
	gives a date that's one day off from how it was originally created. 
	E.g. 2020-05-19, would be converted and displayed as 2020-05-18. To prevent that 
	headache, I didn't want to use a date library, so I just created this function.

*/
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
        10: "October",
        11: "November",
        12: "December",
    };

    // First we reassign the date object to the string to correct any date errosr created by it defaulting to certain timezones
    const dateStr = dateObj.toISOString().slice(0, 10);
    const yearStr = dateStr.slice(0, 4);
    const monthStr = monthMap[dateStr.slice(5, 7)];
    let dayStr;
    // If the day value is single digits
    if (dateStr.slice(8, 9) == "0") {
        dayStr = dateStr.slice(9);
    } else {
        // Else if the day value is double digits, then we slice differently to get the full date
        dayStr = dateStr.slice(8);
    }
    // Format the string in the United States style
    const formattedDate = `${monthStr.slice(0, 3)} ${dayStr} ${yearStr}`;
    return formattedDate;
}

// Sorts your todos by their dueDate
function sortTodosByDate(todos) {
    if (todos.length <= 1) {
        return todos;
    }
    let lessThanPivot = [];
    let greaterThanPivot = [];
    const pivot = todos[0];
    for (let i = 1; i < todos.length; i++) {
        // If the date is earlier than the pivot's date
        if (todos[i].dueDate < pivot.dueDate) {
            lessThanPivot.push(todos[i]);
        } else {
            // Else this means the todo's due date is greater or later than the pivot
            greaterThanPivot.push(todos[i]);
        }
    }
    todos = [
        ...sortTodosByDate(lessThanPivot),
        pivot,
        ...sortTodosByDate(greaterThanPivot),
    ];
    return todos;
}

export { isSevenDaysInFuture, isToday, formatDateToUS, sortTodosByDate };
