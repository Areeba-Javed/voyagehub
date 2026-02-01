import express from  "express"
import Trip from "../models/tripModel.js";

export const createtrip = async (req, res) => {
  try {
    
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

  
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Trip image is required",
      });
    }

    const trip = await Trip.create({
      title: req.body.title,
      location: req.body.location,
      days: Number(req.body.days),
      people: Number(req.body.people),
      bookedPeople: 0,
      price: Number(req.body.price),
      photo: req.file.filename, // ✅ now guaranteed
      description: req.body.description,
    });

    res.status(201).json({
      success: true,
      message: "Trip added successfully",
      trip,
    });

  } catch (error) {
    console.error("CREATE TRIP ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/* =========================
   GET ALL TRIPS
========================= */
export const getTrip = async (req, res) => {
  try {
    const trips = await Trip.find(req.params.id);

    // 🔥 Remaining seats calculate
    const updatedTrips = trips.map(trip => ({
      ...trip._doc,
      remainingSeats: trip.people - trip.bookedPeople,
    }));

    res.status(200).json({
      success: true,
      message: "All trips",
      trips: updatedTrips,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
export const getSingleTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    res.status(200).json({
      success: true,
      trip: {
        ...trip._doc,
        remainingSeats: trip.people - trip.bookedPeople,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




export const updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    trip.title = req.body.title || trip.title;
    trip.location = req.body.location || trip.location;
    trip.days = req.body.days || trip.days;
    trip.people = req.body.people || trip.people;
    trip.price = req.body.price || trip.price;
    trip.description = req.body.description || trip.description;

    if (req.file) {
      trip.photo = req.file.filename;
    }

    await trip.save();

    res.status(200).json({
      success: true,
      message: "Trip updated successfully",
      trip,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

/* =========================
   DELETE TRIP (ADMIN)
========================= */
export const deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Trip deleted successfully",
      trip,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
