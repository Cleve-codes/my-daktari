import express from 'express'
import { authVerify } from '../../auth/verifyToken.js'
import { userController } from './userController.js'

const router = express.Router()

router.get('/:id', authVerify.authenticate, authVerify.restrict(['patient']), userController.getSingleUser)
router.get('/', authVerify.authenticate, authVerify.restrict(['admin']), userController.getAllUser)
router.get('/profile/me', authVerify.authenticate, authVerify.restrict(['patient']), userController.getUserProfile)
router.get('/appointment/my-appointment', authVerify.authenticate, authVerify.restrict(['patient']), userController.getMyAppointment)
router.put('/:id', authVerify.authenticate, authVerify.restrict(['patient']), userController.updateUser)
router.delete('/:id', authVerify.authenticate, authVerify.restrict(['patient']), userController.deleteUser)

export const userRoutes = router