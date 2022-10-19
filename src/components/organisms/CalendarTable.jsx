import { useContext } from "react"
import { CalendarTableRow } from "../molecules"
import { CalendarContext } from "../../App"

export default function CalendarTable() {
    const data = useContext(CalendarContext).calendar.dateArray
    return(
        <table>
            <tbody>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
                {
                    data.map((item, index) => {
                        return <CalendarTableRow data={ item } key={ "ctr" + index }/>
                    })
                }
            </tbody>
        </table>
    )
}