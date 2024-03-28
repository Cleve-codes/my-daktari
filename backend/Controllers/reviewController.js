
import Review from '../models/ReviewSchema.js';
import Doctor from '../models/DoctorSchema.js';

//get all reviews

export const getAllReviews = async(req, res) =>{


        try{
            const reviews = await Review.find({})

            res
            .status(200)
            .json({success:true, message:"successful", data:reviews})

        }
        catch(err){
            res
            .status(200)
            .json({success:false, message:"not found"})
        }
};

//create review function

export const createReview = async(req, res)=>{

    if(!req.body.doctor) req.body.doctor = req.params.doctorId
    if(!req.body.user) req.body.user = req.userId

    const newReview = new Review(req.body)

    try{
            const savedReview = await newReview.save()

            await Doctor.findByIdAndUpdate(req.body.doctor, {

                $push:{reviews: savedReview._id}

            })

            res.status(200).json({success:true, message:"review submited", data:savedReview})
    }
    catch(err){

        res.status(500).json({success:false, message:err.message})

    }
}