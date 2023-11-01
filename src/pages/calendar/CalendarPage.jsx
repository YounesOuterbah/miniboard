import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export const CalendarPage = () => {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
};
