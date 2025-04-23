"use client";

import { Calendar } from "react-big-calendar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function BookingCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const snapshot = await getDocs(collection(db, "bookings"));
      const bookings = snapshot.docs.map((doc) => {
        const data = doc.data();
        const [startHour, endHour] = data.slot.split(" - ");
        const start = new Date(`${data.date} ${startHour}`);
        const end = new Date(`${data.date} ${endHour}`);
        return {
          title: `${data.email} - ${data.slot}`,
          start,
          end,
        };
      });
      setEvents(bookings);
    };
    fetchBookings();
  }, []);

  return (
    <div className="bg-white rounded shadow p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}