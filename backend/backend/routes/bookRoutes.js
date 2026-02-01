import express from "express";
import { createBooking, deleteBooking, getAllBookings, getMyBookings, updateBooking } from "../controllers/bookController.js";
import upload from "../middlewares/uploadsMiddleware.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const bookingRouter = express.Router();

// User books a specific trip
bookingRouter.post("/create",upload.none(), createBooking);
bookingRouter.get("/all",getAllBookings)
bookingRouter.get("/mybooking",verifyToken,getMyBookings)
bookingRouter.put("/:id",updateBooking)
bookingRouter.delete("/:id",deleteBooking)



export default bookingRouter;
