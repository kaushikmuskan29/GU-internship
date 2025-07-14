import express from "express";
import { signup,login,logout,getProfile } from "../controller/authController.js";
import { protectRoute } from "../middleware/protectRoute.js";
import { loginLimiter } from "../rate_limiter/rateLimiter.js";
const router = express.Router();

router.post("/signup",signup);
router.post("/login",loginLimiter,login);
router.post("/logout",logout);

router.get("/profile",protectRoute,getProfile);

export default router;