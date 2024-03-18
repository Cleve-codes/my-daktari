import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';


export const authenticate = async(req, res, next) => {
  // Get token from header
  const authToken = req.headers.authorization;

  // check if there is no token
  if(!authToken || !authToken.startsWith('Bearer ')){
      return res.status(401).json({ success: false, msg: 'No token, authorization denied'})
  }

  // If there is a token, verify it
  const token = authToken.split(' ')[1]; // Get token from Bearer

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decoded.id; // Attach user information to request object
      req.user = { role: decoded.role }; // Attach user role to request object
      next();
  } catch (error) {

    if(error.name === 'TokenExpiredError'){
      return res.status(401).json({ success: false, msg: 'Token has expired' });
    }

      res.status(401).json({ success: false, msg: 'Token is not valid' });
  }
}


export const authorize = roles => async (req, res, next) => {
  const userId = req.userId;
  let user;

  user = await User.findById(userId);
  if(!user){
    user = await Doctor.findById(userId);
  }

  if(!user || !roles.includes(user.role)) {
    return res.status(401).json({ success: false, msg: 'You are not authorized to access this route'})
  }
  next();
}