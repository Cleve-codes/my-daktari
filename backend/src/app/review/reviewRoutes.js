import express from 'express'
import { authVerify } from '../../auth/verifyToken.js'
import { reviewController } from './reviewController.js'

const router = express.Router({ mergeParams: true })

router
    .route("/")
    .get(reviewController.getAllReviews)
    .post(authVerify.authenticate, authVerify.restrict(['patient']), reviewController.createReview)

export const reviewRoutes = router