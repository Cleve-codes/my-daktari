import express from "express";
import {updateUser, deleteUser, getUser, getAllUsers} from "../Controllers/userController.js"

import {authenticate, authorize} from "../auth/verifyToken.js"

const router = express.Router()

router.get("/", authenticate, authorize(['admin']),getAllUsers)
router.get("/:id", authenticate, authorize(['patient']),getUser)
router.put("/:id", authenticate, authorize(['patient']),updateUser)
router.delete("/:id", authenticate, authorize(['patient']),deleteUser)

export default router