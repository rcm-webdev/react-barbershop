const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Schemas and Models
const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  service: { type: String, required: true },
  barber: { type: String, required: false },
});

const Booking = mongoose.model("Booking", BookingSchema);

// Routes
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: 1 });
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

app.post("/api/bookings", async (req, res) => {
  try {
    const { name, email, date, service, barber } = req.body;
    console.log("Received barber:", barber); // Add this line
    const newBooking = new Booking({ name, email, date, service, barber });
    await newBooking.save();
    res.json(newBooking);
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ message: "Error saving booking" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
