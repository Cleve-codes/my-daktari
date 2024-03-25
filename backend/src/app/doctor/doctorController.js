import Booking from "../../modules/BookingSchema.js"
import Doctor from "../../modules/DoctorSchema.js"

const updateDoctor = async (req, res) => {
    const id = req.params.id
    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ success: true, message: 'Doctor Successfully Updated', data: updateDoctor })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Field Update' })
    }
}

const deleteDoctor = async (req, res) => {
    const id = req.params.id
    try {
        const deleteDoctor = await Doctor.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: 'Doctor Successfully Deleted', data: deleteDoctor })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Field Update' })
    }
}
const getSingleDoctor = async (req, res) => {
    const id = req.params.id
    try {
        const findDoctor = await Doctor.findById(id).select("-password")
        res.status(200).json({ success: true, message: 'Doctor Found Successfully', data: findDoctor })
    } catch (error) {
        res.status(404).json({ success: false, message: 'No user found' })
    }
}
const getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query
        let doctors
        if (query) {
            doctors = await Doctor.find({
                isApproved: 'approved',
                $or: [{ name: { $regex: query, $options: 'i' } },
                { specialization: { $regex: query, $options: 'i' } }]
            }).select('-password')
        } else {
            doctors = await Doctor.find({ isApproved: 'approved' }).select("-password")
        }
        res.status(200).json({ success: true, message: 'Doctor Found Successfully', data: doctors })

    } catch (error) {
        res.status(404).json({ success: false, message: 'No users found' })
    }
}
const getDoctorProfile = async (req, res) => {
    const doctorId = req.userId
    try {
        const doctor = await Doctor.findById(doctorId)
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'No doctor found'
            })
        }
        const { password, ...rest } = doctor._doc
        const appointments = await Booking.find({ doctor: doctorId })
        res.status(200).json({
            success: true, message: 'Profile info is getting',
            data: { ...rest, appointments }
        })
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong, cannot get doctor data" })
    }
}
export const doctorController = {
    updateDoctor,
    getAllDoctor,
    getSingleDoctor,
    deleteDoctor,
    getDoctorProfile
}