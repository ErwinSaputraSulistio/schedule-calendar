export default function CalendarButton({ background, color, name, fontSize, margin, width }) {
    return(
        <button 
            className="button hoverEffect" 
            style={{ 
                background, 
                color, 
                fontSize,
                margin,
                textAlign: "center",
                width,
            }}>
            { name }
        </button>
    )
}