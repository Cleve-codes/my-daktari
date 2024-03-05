import express from "express";
import {updateUser, deleteUser, getUser, getAllUsers} from "../Controllers/userController.js"

const router = express.Router()

router.get("/", getAllUsers)
router.get("/:id", getUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router