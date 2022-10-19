import { createContext, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Add, Detail, Home } from "./pages"
import { dateInOneMonth } from "./DateInOneMonth"
import "./App.scss"

export const CalendarContext = createContext()

export default function App() {
	const [currentDate, editCurrentDate] = useState(new Date())
	const [scheduleList, editScheduleList] = useState([])
	const [dateArray, editDateArray] = useState(dateInOneMonth(currentDate))
	const monthArray = [
		"January", "February", "March", "April", 
		"May", "June", "July", "August", "September",
		"October", "November", "December"
	]
	const contextValue = { 
		calendar: { 
			currentDate,
			currentMonth: monthArray[currentDate.getMonth()],
			currentYear: currentDate.getFullYear(),
			dateArray,
			dateInOneMonth,
			editCurrentDate,
			editDateArray 
		},
		schedule: {
			scheduleList,
			editScheduleList
		}
	}
  	return (
		<CalendarContext.Provider value={ contextValue }>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <Home/> }/>
					<Route path="/detail" element={ <Detail/> }/>
					<Route path="/add" element={ <Add/> }/>
				</Routes>
			</BrowserRouter>
		</CalendarContext.Provider>
	)
}
