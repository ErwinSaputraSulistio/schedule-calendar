import { CalendarMenuButton, CalendarMonthChange } from "../molecules"

export default function CalendarMenu() {
    return(
        <div className="calendarMenu">
            <div className="insideCalendarMenu">
                <span style={{ color: "grey" }}>Ciwin Calendar</span>
                <CalendarMonthChange/>
            </div>
            <div className="insideCalendarMenu">
                <CalendarMenuButton/>
            </div>
        </div>
    )
}