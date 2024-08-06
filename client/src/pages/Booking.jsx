//Import useState to capture customer selections and control form data.
import { useState } from "react";

//Import react-calendar to create a ready-made interactive calendar.
import Calendar from "react-calendar";

//Import useNavigate to redirect the user back to the Home page after booking.
import { useNavigate } from "react-router-dom";

//Define variables for dropdown menus. These could be saved in MongoDB instead to make them updateable in a UI element.
const services = [
  "Haircut",
  "Haircut with beard trim",
  "Custom Fade with beard trim",
  "White Glove Services",
  "House Calls",
];

const barbers = ["LQ", "MT", "JP", "JD"];

const Booking = () => {
  //Define state variables for form elements.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [service, setService] = useState("");
  const [barber, setBarber] = useState("");
  const navigate = useNavigate();

  //Handle form submission, preventing all default HTML actions.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, date, service, barber }),
    });

    //Tell the customer the booking was successful and redirect them back home.
    if (response.ok) {
      alert(
        `Booking for ${name} on ${date.toLocaleDateString()} was successful. We will send an email to ${email} with available times for ${barber}.`
      );
      navigate("/");
    } else {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" placeholder="Name">
            Name:{" "}
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          {/*See https://www.npmjs.com/package/react-calendar for available config options*/}
          <Calendar onChange={setDate} value={date} required />
          <p>Selected Date: {date.toLocaleDateString()}</p>
        </div>
        <div>
          <label htmlFor="service">Service: </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="barber">Barber: </label>
          <select
            id="barber"
            value={barber}
            onChange={(e) => setBarber(e.target.value)}
          >
            <option value="" disabled>
              Select a barber (optional)
            </option>
            {barbers.map((barber, index) => (
              <option key={index} value={barber}>
                {barber}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default Booking;
