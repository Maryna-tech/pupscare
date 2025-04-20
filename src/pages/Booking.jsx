import React from "react";
import { useState } from "react";
import Reviews from "./Reviews"


const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    service: "Full Grooming",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} on ${formData.date} for ${formData.service}`);
    // Add form submission logic here
  };

  return (
    <div className="container-booking">
      <h2 class="animate__animated animate__fadeInLeftBig">Book an Appointment</h2>
      <main className="booking-form">
        <p><strong>🐾📅 Schedule a service for your pup with us!</strong></p>
        <p><strong>Book your appointment as far in advance as possible.</strong></p>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email Field */}
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Date Field */}
          <label htmlFor="date">Appointment Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          {/* Service Selection */}
          <label htmlFor="service">Select Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option>Full Grooming</option>
            <option>Nail Clipping</option>
            <option>Bath & Brush</option>
            <option>Health Check-up</option>
            <option>Nutrition Advice</option>
            <option>Dog Sitting</option>
          </select>

          {/* Submit Button */}
          <button type="submit" className="btn">Book Now</button>
        </form>
      </main>
      <section className="booking-advice">
        <p>Take a seat in our relaxing reception area and treat your pet to treats and high quality accessories. At PUPSCARE we make sure that each dog enjoys a luxury grooming experience in a safe and relaxing environment. Feel free to request a free health and weight check. </p>
      <Reviews/>
      <h3>Full payment required on booking to secure places.</h3>
      </section>
    </div>
  )
}

export default Booking
