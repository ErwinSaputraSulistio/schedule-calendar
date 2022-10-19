import { useContext } from "react"
import { CalendarContext } from "../../App"

export default function CalendarTableData({ data }) {
    const scheduleList = useContext(CalendarContext).schedule.scheduleList
    const todayDate = new Date().getDate()
    const todayMonth = new Date().getMonth()
    const todayYear = new Date().getFullYear()
    return(
        <td style={
            todayDate === data.number
            &&
            todayMonth === data.month 
            &&
            todayYear === data.year
            ?
            { color: "white", background: "#4C8BF5" }
            :
            null
        }>
            <span style={ data.currentMonth === false ? { color: "#D7D7D7" } : null }>{ data.number }</span>
            <div className="scheduleList">
            {
                scheduleList.map((item) => {
                    return item.date === data.number && 
                    item.month - 1 === data.month && 
                    item.year === data.year ?
                    <span>{ item.detail }</span>
                    :
                    null
                }) 
            }
            </div>
        </td>
    )
}