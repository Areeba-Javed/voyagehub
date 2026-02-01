import mongoose from "mongoose";

const TripModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    days: {
      type: Number,
      required: true,
    },

    // 🔥 TOTAL SEATS (ADMIN SETS THIS)
    people: {
      type: Number,
      required: true,
      min: 1,
    },

    // 🔥 BOOKED SEATS (SYSTEM UPDATES THIS)
    bookedPeople: {
      type: Number,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Trip = mongoose.model("trips", TripModel);
export default Trip;
