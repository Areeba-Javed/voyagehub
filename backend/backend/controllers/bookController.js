import express from "express"
import Trip from "../models/tripModel.js";
import Booking from "../models/bookModel.js";
import User from "../models/userModel.js";


export const createBooking = async (req, res) => {
  try {
    const { tripId, fullName, email, guests, specialRequest } = req.body;

    if (!tripId || !fullName || !email || !guests) {
      return res.status(400).json({
        success: false,
        message: "All required fields are missing",
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Please register first to book a trip",
      });
    }

    // Find trip by ID
    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    // Check seat availability
    if (trip.bookedPeople + Number(guests) > trip.people) {
      return res.status(400).json({
        success: false,
        message: "Seats not available",
      });
    }

    // Calculate total price
    const totalPrice = trip.price * Number(guests);

    // Create booking
    const booking = await Booking.create({
      trip: tripId,
      user: user._id,
      fullName,
      email,
      guests: Number(guests),
      specialRequest,
      totalPrice,
    });

    // Update trip bookedPeople
    trip.bookedPeople += Number(guests);
    await trip.save();

    res.status(201).json({
      success: true,
      message: "Booking successful",
      booking,
      remainingSeats: trip.people - trip.bookedPeople,
    });
  } catch (error) {
    console.error("Create booking error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// =====================
// Get All Bookings (Admin)
// =====================
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("trip", "title location price")
      .populate("user", "email");
    res.status(200).json({ success: true, bookings });
  } catch (error) {
    console.error("Get all bookings error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// =====================
// Get My Bookings (Logged-in User)
// =====================
export const getMyBookings = async (req, res) => {
  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please log in.",
      });
    }

    const userId = req.user._id;

    const bookings = await Booking.find({ user: userId })
      .populate("trip", "title location price")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, bookings });
  } catch (error) {
    console.error("Get my bookings error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch user bookings",
      error: error.message,
    });
  }
};

// =====================
// Update Booking
// =====================
export const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, guests, specialRequest } = req.body;

    const booking = await Booking.findById(id).populate("trip");
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    const trip = await Trip.findById(booking.trip._id);

    // Handle guests update safely
    const oldGuests = booking.guests;
    const newGuests = guests ? Number(guests) : oldGuests;
    const seatDiff = newGuests - oldGuests;

    if (trip.bookedPeople + seatDiff > trip.people) {
      return res.status(400).json({ success: false, message: "Seats not available" });
    }

    // Update trip bookedPeople
    trip.bookedPeople += seatDiff;
    await trip.save();

    // Update booking fields
    booking.fullName = fullName || booking.fullName;
    booking.guests = newGuests;
    booking.specialRequest = specialRequest || booking.specialRequest;
    booking.totalPrice = trip.price * newGuests;

    await booking.save();

    res.status(200).json({ success: true, message: "Booking updated", booking });
  } catch (error) {
    console.error("Update booking error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// =====================
// Delete Booking
// =====================
export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findById(id).populate("trip");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Reduce bookedPeople in trip if exists
    if (booking.trip) {
      booking.trip.bookedPeople = Math.max((booking.trip.bookedPeople || 0) - booking.guests, 0);
      await booking.trip.save();
    }

    // Delete the booking
    await Booking.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    console.error("Delete booking error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting booking",
      error: error.message,
    });
  }
};
