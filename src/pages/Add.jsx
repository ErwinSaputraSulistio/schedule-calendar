import { useContext, useState } from "react"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { CalendarContext } from "../App"
import { CalendarButton } from "../components/atoms"

export default function Add() {
    const schedule = useContext(CalendarContext).schedule
    const { scheduleList, editScheduleList } = schedule
    const navigate = useNavigate()
    const [date, setDate] = useState(0)
    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)
    const [detail, setDetail] = useState(null)
    const addNewSchedule = (e) => {
        e.preventDefault()
        if(date <= 0 || date > 31) {
            Swal.fire("Failed!", "Invalid date input!", "error")
        }
        else if(month <= 0 || month > 11) {
            Swal.fire("Failed!", "Invalid month input!", "error")
        }
        else if(year < 1900 || year > 2050) {
            Swal.fire("Failed!", "Invalid year input!", "error")
        }
        else if(detail.length <= 1 || detail.length > 100) {
            Swal.fire("Failed", "No less than 1 or more than 100 characters for the title!", "error")
        }
        else {
            const newSchedule = { 
                date: parseInt(date), 
                month: parseInt(month), 
                year: parseInt(year), 
                detail
            }
            editScheduleList([...scheduleList, newSchedule])
            Swal.fire("Success!", "Successfully created a new schedule!", "success")
            .then(() => {
                console.log(scheduleList)
                navigate("/")
            })
        }
    }
    return(
        <form className="addSchedule" onSubmit={ addNewSchedule }>
            <span className="addScheduleTitle"><u>Add a New Schedule</u></span>
            <div className="inputDateForm">
                <input 
                    className="inputDate" 
                    type="number"
                    onChange={ (e) => { setDate(e.target.value) } } 
                    placeholder="date"
                />
                <input 
                    className="inputMonth" 
                    type="number"
                    onChange={ (e) => { setMonth(e.target.value) } } 
                    placeholder="Month"
                />
                <input 
                    className="inputYear" 
                    type="number"
                    onChange={ (e) => { setYear(e.target.value) } } 
                    placeholder="Year"
                />
            </div>
            <input 
                className="input" 
                type="text" 
                onChange={ (e) => { setDetail(e.target.value) } } 
                placeholder="Input your schedule here"
            />
            <CalendarButton
                background="#3CB371" 
                color="white" 
                name="Add this schedule"
                margin="0.5vw"
                width="100%"
            />
        </form>
    )
}