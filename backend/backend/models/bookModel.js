import mongoose from "mongoose";
import Trip from "./tripModel.js";
import  User from "./userModel.js";

const bookingSchema =  mongoose.Schema(
  {
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "trips",
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    guests: {
      type: Number,
      required: true,
      min: 1,
    },

    specialRequest: {
      type: String,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    
  },
  { timestamps: true }
);

const Booking = mongoose.model("bookings", bookingSchema);
export default Booking;
