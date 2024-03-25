import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Doctor from '../../modules/DoctorSchema.js'
import User from "../../modules/UserSchema.js"

const generateToken = user => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d'
    })
}

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body
    try {
        let user = null
        // Check User Role
        if (role === 'patient') {
            user = await User.findOne({ email })
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email })
        }
        // Check if user exists
        if (user) {
            return res.status(400).json({
                message: 'User already exists'
            })
        }
        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                gender,
                role,
                photo
            })
        }
        if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                gender,
                role,
                photo
            })
        }
        await user.save()
        res.status(200).json({ success: true, message: 'User Successfully Created', data: user })


    } catch (error) {
        // console.log(JSON.stringify({ message: error.message, stack: error.stack }, null, 2));
        res.status(500).json({ success: false, message: "Register failed, Internal server error" });
    }
}


export const login = async (req, res) => {
    const { email } = req.body
    try {
        let user = null
        const patient = await User.findOne({ email })
        const doctor = await Doctor.findOne({ email })
        if (patient) {
            user = patient
        }
        if (doctor) {
            user = doctor
        }
        // check user exist or not
        if (!user) {
            res.status(400).json({ success: false, message: 'User not found!' })
        }
        // Compare password
        const passwordMatch = await bcrypt.compare(
            req.body.password,
            user.password
        )
        if (!passwordMatch) {
            res.status(400).json({ success: false, message: 'Invalid credentials' })
        }

        // Get Token
        const token = generateToken(user)
        const { password, role, appointment, ...rest } = user._doc
        res.status(200).json({ success: true, message: 'Successfully Login', token, data: { ...rest }, role })

    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to login' })
    }
}