import { CalendarTableData } from "../atoms"

export default function CalendarTableRow({ data }) {
    return(
        <tr>
            { data.map((item, index) => {
                return <CalendarTableData data={ item } key={ "ctd" + index }/>
            }) }
        </tr>
    )
}