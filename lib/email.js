import emailjs from "emailjs-com";

export const sendBookingConfirmation = (email, date, slot) => {
  return emailjs.send(
    "your_service_id",      // Replace with your EmailJS service ID
    "your_template_id",     // Replace with your template ID
    {
      to_email: email,
      booking_date: date,
      booking_slot: slot,
    },
    "your_public_key"       // Replace with your public EmailJS user ID
  );
};