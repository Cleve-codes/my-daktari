import jwt from "jsonwebtoken"
import Doctor from '../modules/DoctorSchema.js'
import User from '../modules/UserSchema.js'

const authenticate = async (req, res, next) => {
    // Get Token From Headers
    const authToken = req.headers.authorization

    // Check Token exist
    if (!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'No Token, Access Denied' })
    }
    try {
        const token = authToken.split(" ")[1]

        //verify token 
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId = decoded.id
        req.role = decoded.role

        next()

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: 'Token is expired'
            })
        }
        return res.status(401).json({ success: false, message: 'Invalid Token' })
    }
}

const restrict = roles => async (req, res, next) => {
    const userId = req.userId
    let user
    const patient = await User.findById(userId)
    const doctor = await Doctor.findById(userId)
    if (patient) {
        user = patient
    }
    if (doctor) {
        user = doctor
    }
    if (!roles.includes(user.role)) {
        return res.status(401).json({ success: false, message: 'You are not authorized' })
    }
    next()
}

export const authVerify = {
    authenticate,
    restrict
}