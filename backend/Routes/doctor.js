import express from "express";
import {updateDoctor, deleteDoctor, getDoctor, getAllDoctors} from "../Controllers/doctorController.js"

const router = express.Router()

router.get("/", getAllDoctors)
router.get("/:id", getDoctor)
router.put("/:id", updateDoctor)
router.delete("/:id", deleteDoctor)

export default router