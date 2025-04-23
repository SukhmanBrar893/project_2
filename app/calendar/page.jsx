"use client";
import dynamic from "next/dynamic";

const BookingCalendar = dynamic(() => import("../../components/BookingCalendar"), { ssr: false });

export default function CalendarPage() {
  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Booking Calendar</h1>
      <BookingCalendar />
    </div>
  );
}