export const dateInOneMonth = (inputDate) => {
    const firstDayOfMonth = new Date(inputDate.getFullYear(), inputDate.getMonth(), 1)
    const weekdayOfFirstDay = firstDayOfMonth.getDay()
    let daysInWeek = []
    let weeksInMonth = []
    for (let day = 0; day <= 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } 
        else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        } 
        else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }
        let calendarDay = {
            currentMonth: firstDayOfMonth.getMonth() === inputDate.getMonth(),
            date: new Date(firstDayOfMonth),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            year: firstDayOfMonth.getFullYear()
        }
        if(daysInWeek.length >= 7) {
            weeksInMonth.push(daysInWeek)
            daysInWeek = []
        }
        daysInWeek.push(calendarDay)
    }
    console.log(weeksInMonth)
    return weeksInMonth
}