"use client";

import { useEffect, useState } from "react";
import { db, auth } from "../../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { sendBookingConfirmation } from "../../lib/email";

const timeOptions = [
  "08:00 - 09:00 AM",
  "09:00 - 10:00 AM",
  "10:00 - 11:00 AM",
  "11:00 - 12:00 PM",
  "01:00 - 02:00 PM",
  "02:00 - 03:00 PM",
  "03:00 - 04:00 PM",
  "04:00 - 05:00 PM",
  "05:00 - 06:00 PM"
];

export default function BookingPage() {
  const [user, setUser] = useState(null);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      const snapshot = await getDocs(collection(db, "bookings"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(data);
    };
    fetchBookings();
  }, []);

  const handleBook = async (e) => {
    e.preventDefault();
    if (!slot || !date || !user) return;
    await addDoc(collection(db, "bookings"), {
      userId: user.uid,
      email: user.email,
      date,
      slot,
      timestamp: new Date().toISOString(),
    });
    setSlot("");
    setDate("");
    await sendBookingConfirmation(user.email, date, slot);
    alert("Booking successful!");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Book a Slot</h1>
      <form onSubmit={handleBook} className="mb-6 space-y-4">
        <input
          type="date"
          className="border p-2 rounded w-full max-w-md"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          className="border p-2 rounded w-full max-w-md"
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
        >
          <option value="">Select Time Slot</option>
          {timeOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Book Now</button>
      </form>

      <h2 className="text-xl font-semibold mb-2">All Bookings</h2>
      <ul className="bg-white shadow rounded p-4">
        {bookings.map(b => (
          <li key={b.id} className="border-b py-2">
            <strong>{b.email}</strong> booked <em>{b.slot}</em> on <em>{b.date}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}