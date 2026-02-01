import express from "express"
import upload from "../middlewares/uploadsMiddleware.js"
import { checkRole, verifyToken} from "../middlewares/authMiddleware.js";

import { createtrip, deleteTrip, getSingleTrip, getTrip, updateTrip  } from "../controllers/tripController.js"

let tripRouter = express.Router();


tripRouter.get('/',getTrip)
tripRouter.get('/:id',getSingleTrip)

tripRouter.post("/trip",verifyToken,
    checkRole(['admin']),upload.single("photo"),createtrip)
tripRouter.put("/:id",verifyToken,    checkRole(['admin']),
upload.single("photo"),updateTrip)
tripRouter.delete("/:id",upload.single("photo"),deleteTrip)

export default tripRouter