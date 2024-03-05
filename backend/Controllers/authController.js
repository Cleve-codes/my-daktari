import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import User from '../models/UserSchema.js'
import Doctor from "../models/DoctorSchema.js"


const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "30d"
  })
}


const register = async (req, res) => {

  const { email, password, name, role, photo, gender } = req.body

  try {

    let user = null;

    if (role === "patient") {
      user = await User.findOne({ email })
    }
    else if (role === "doctor") {
      user = await Doctor.findOne({ email })
    }

    // Check if user already exists
    if (user) {
      return res.status(400).json({ message: "User already exists" })
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create a new user
    if (role === "patient") {
      user = await User.create({
        email,
        password: hashedPassword,
        name,
        photo,
        gender,
        role
      })
    }

    if (role === "doctor") {
      user = await Doctor.create({
        email,
        password: hashedPassword,
        name,
        photo,
        gender,
        role
      })
    }

    await user.save()

    res.status(200).json({ message: "User created successfully", success: true })


  } catch (error) {
    res.status(500).json({ message: "Internal Server error", success: false })
  }
}

const login = async (req, res) => {

  const { email, password, role } = req.body

  try {

    let user = null;

    // console.log('Email:', email);
    // console.log('Role:', role);

    const patient = await User.findOne({ email })
    const doctor = await Doctor.findOne({ email })

    if (role === "patient") {
      user = patient
    }

    if (role === "doctor") {
      user = doctor
    }

    // console.log('Patient:', patient);
    // console.log('Doctor:', doctor);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User does not exist" })
    }

    // Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) {
      return res.status(404).json({ message: "Invalid credentials", status: false })
    }

    // Create and assign a token
    const token = generateToken(user)

    const { password, role: userRole, appointments, ...rest } = user._doc;

    res.status(200).json({ message: "Login successful", token, data: { ...rest }, role: userRole, success: true });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to login", success: false })
  }
}

export { register, login }