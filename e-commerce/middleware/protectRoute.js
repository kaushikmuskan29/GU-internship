import jwt from "jsonwebtoken";
import User from "../models/userModel.js";


export const protectRoute = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded)
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - invalid token" });

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error in verifyToken ", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const adminRoute = async(req, res, next) => {
  try {
	const user = await User.findById(req.userId);
	console.log(user,'========== user =============')
    if (user.role === "admin") {
      next();
    } else {
      return res.status(403).json({ message: "Access denied - Admin only" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};