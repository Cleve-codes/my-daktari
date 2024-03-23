import Doctor from '../../modules/DoctorSchema.js'
import Review from '../../modules/ReviewSchema.js'
const getAllReviews = async (req, res) => {
    try {
        const review = await Review.find({})
        res.status(200).json({ success: true, message: 'Reviews Found Successfully', data: review })
    } catch (error) {
        res.status(400).json({ success: false, message: 'No Data Found' })
    }
}

const createReview = async (req, res) => {
    if (!req.body.doctor) req.body.doctor = req.params.doctorId
    if (!req.body.user) req.body.user = req.userId
    const newReview = new Review(req.body)
    try {
        const saveReview = await newReview.save()
        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: saveReview._id }
        })
        res.status(200).json({ success: true, message: 'Reviews Submitted', data: saveReview })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

export const reviewController = {
    getAllReviews,
    createReview
}