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
    <h3 className="m-5 p-1">September 13, 2023: Holiday event  </h3>
    <h3 className="m-5 p-1">October 20, 2023: Event in moa </h3>
    <h3 className="m-5 p-1">October 27, 2023: Holiday event  </h3>
    <h3 className="m-5 p-1">November 15, 2023: Halloweenfest   </h3>
    <h3 className="m-5 p-1">December 21, 2023: Winterfest   </h3>
    <Footer />
    </div>
  );
}

export default Calendar;
