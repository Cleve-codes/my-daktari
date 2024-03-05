import User from "../models/UserSchema.js"


export const updateUser = async (req, res) => {

  const id = req.params.id

  try {

    const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    res.status(200).json({ success: true, message: "User updated successfully", data: updateUser })

  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" })
  }
}

export const deleteUser = async (req, res) => {

  const id = req.params.id

  try {

    const updatedUser = await User.findByIdAndDelete(id)
    res.status(200).json({ success: true, message: "User deleted successfully" })

  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" })
  }
}

export const getUser = async (req, res) => {

  const id = req.params.id

  try {

    const user = await User.findById(id).select("-password")
    res.status(200).json({ success: true, message: "User found", data: user })

  } catch (error) {
    res.status(404).json({ success: false, message: "Failed to find user" })
  }
}

export const getAllUsers = async (req, res) => {

  const id = req.params.id

  try {

    const users = await User.find({}).select("-password")
    res.status(200).json({ success: true, message: "Users found", data: users })

  } catch (error) {
    res.status(404).json({ success: false, message: "Failed to find users" })
  }
}