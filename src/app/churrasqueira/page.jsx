"use client";
import "./calendar.css"
import ReactLenis from "@studio-freight/react-lenis";
import { CalendarApp } from "./calendar"


const Churras = () => {
    return (
        <ReactLenis root>
            <div className="calendar-page">
                <div className="table churrasqueira">
                    <CalendarApp />
                </div>
            </div>
        </ReactLenis>
    )
}

export default Churras