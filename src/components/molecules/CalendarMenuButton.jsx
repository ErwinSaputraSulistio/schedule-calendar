import { Link } from "react-router-dom"
import { CalendarButton } from "../atoms"

export default function CalendarMenuButton() {
    return(
        <>
            <Link to="/add">
                <CalendarButton 
                    background="#3CB371" 
                    color="white" 
                    name="+ Create a Schedule"
                    margin="0.5vw"
                    width="12.5vw"
                />
            </Link>
        </>
    )
}