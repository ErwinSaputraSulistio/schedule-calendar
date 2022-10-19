import { useContext } from "react"
import { CalendarContext } from "../../App"

export default function CalendarMonthChange() {
    const context = useContext(CalendarContext).calendar
    const { 
        currentDate, currentMonth, currentYear, 
        dateInOneMonth, editCurrentDate, editDateArray 
    } = context
    const changeMonth = (input) => {
        let date = currentDate
        if(input === "-") { date.setMonth(date.getMonth() - 1) }
        else if(input === "+") { date.setMonth(date.getMonth() + 1) }
        editCurrentDate(date)
        editDateArray(dateInOneMonth(currentDate))
    }
    return(
        <div className="calendarMonthChange">
            <span className="arrow" onClick={ () => {changeMonth("-")} }>{"<"}</span>
            <span className="calendarMonthChangeInfo">{ currentMonth + " " + currentYear }</span>
            <span className="arrow" onClick={ () => { changeMonth("+") } }>{">"}</span>
        </div>
    )
}