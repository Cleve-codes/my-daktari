import express from 'express'
import { authVerify } from '../../auth/verifyToken.js'
import { reviewRoutes } from '../review/reviewRoutes.js'
import { doctorController } from './doctorController.js'
const router = express.Router()

// Nested Routes
router.use('/:doctorId/reviews', reviewRoutes)
router.get('/:id', doctorController.getSingleDoctor)
router.get('/', doctorController.getAllDoctor)
router.put('/:id', authVerify.authenticate, authVerify.restrict(['doctor']), doctorController.updateDoctor)
router.delete('/:id', authVerify.authenticate, authVerify.restrict(['doctor']), doctorController.deleteDoctor)
router.get('/profile/me', authVerify.authenticate, authVerify.restrict(['doctor']), doctorController.getDoctorProfile)

export const doctorRoutes = router