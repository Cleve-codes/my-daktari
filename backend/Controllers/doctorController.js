import Doctor from "../models/DoctorSchema.js"


export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.status(200).json({ success: true, message: "Doctor updated successfully", data: updatedDoctor });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
}

export const deleteDoctor = async (req, res) => {

  const id = req.params.id

  try {

    const updatedDoctor = await Doctor.findByIdAndDelete(id)
    res.status(200).json({ success: true, message: "Doctor deleted successfully" })
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" })
  }
}

export const getDoctor = async (req, res) => {

  const id = req.params.id

  try {

    const doctor = await Doctor.findById(id)
    .populate("reviews")
    // .populate({
    //     path: 'reviews',
    //     populate: {
    //         path: 'user',
    //         model: 'User'
    //     }
    // })
    .select("-password")
    res.status(200).json({ success: true, message: "Doctor found", data: doctor })

  } catch (error) {
    res.status(404).json({ success: false, message: "Failed to find Doctor" })
  }
}

export const getAllDoctors = async (req, res) => {
  try {
    const {query} = req.query;
    let doctors;
    if(query) {
      doctors = await Doctor.find({
        role: "doctor",
        isApproved: "approved",
        $or: [
          {name: {$regex: query, $options: "i"}},
          {specialization: {$regex: query, $options: "i"}}
        ]
      }).select("-password");
    } else{
      doctors = await Doctor.find({isApproved: "approved"}).select("-password");
    }
    res.status(200).json({ success: true, message: "Doctors found", data: doctors });
  } catch (error) {
    res.status(404).json({ success: false, message: "Failed to find Doctors" });
  }
}