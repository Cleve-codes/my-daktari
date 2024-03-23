import express from 'express';
import { authRoutes } from '../app/auth/authRoutes.js';
import { doctorRoutes } from '../app/doctor/doctorRoutes.js';
import { reviewRoutes } from '../app/review/reviewRoutes.js';
import { userRoutes } from '../app/user/userRoutes.js';

const router = express.Router()

const moduleRoutes = [{
    path: "/auth",
    route: authRoutes
}, {
    path: '/user',
    route: userRoutes
}, {
    path: '/doctor',
    route: doctorRoutes
}, {
    path: '/reviews',
    route: reviewRoutes
}]

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router