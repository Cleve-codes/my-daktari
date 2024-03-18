import express from "express";
import {updateDoctor, deleteDoctor, getDoctor, getAllDoctors} from "../Controllers/doctorController.js"
import {authenticate, authorize} from "../auth/verifyToken.js"

import reviewRouter from "./review.js"

const router = express.Router()

// nested route
router.use("/:doctorId/reviews", reviewRouter)

router.get("/" ,getAllDoctors)
router.get("/:id" ,getDoctor)
router.put("/:id", authenticate, authorize(['doctor']),updateDoctor)
router.delete("/:id", authenticate, authorize(['doctor']),deleteDoctor)

export default router