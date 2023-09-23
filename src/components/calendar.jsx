import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
function Calendar() {
  return (
    <div className="text-white">
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", 
        }}
        height={"90vh"}
        
     />
    <h1 className="mt-4">September 13 2023: holiday event  </h1>
    <h1 className="mt-4">October 20 2023: event in moa </h1>
    <h1 className="mt-4">October 27 2023: holiday event  </h1>
    <h1 className="mt-4">November 15 2023: Halloweenfest   </h1>
    <h1 className="mt-4">December 21 2023: winterfest   </h1>
    <Footer />
    </div>
  );
}

export default Calendar;
