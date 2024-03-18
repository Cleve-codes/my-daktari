import express from "express";
import {getAllReviews, createReview} from "../Controllers/reviewController.js"
import {authenticate, authorize} from "../auth/verifyToken.js"

const router = express.Router({mergeParams: true})

// nested routes


router
    .route('/')
    .get(getAllReviews)
    .post(authenticate,  authorize(['doctor']), createReview)


export default router
