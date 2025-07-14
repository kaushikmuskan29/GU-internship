import User from "../models/userModel.js";
import { generateTokens } from "../utilis/generateToken.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email: email,
      password: hashedPassword,
      name: name,
    });

    await user.save();

    // jwt
    generateTokens(res, user._id);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      res.status(400).json({
        success: false,
        message: "In-Correct Password",
      });
    }
    generateTokens(res, user._id);
    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async (req, res) => {
	try {
		const user = await User.findById(req.userId).select("-password");
        res.status(200).json({
            success:true,
            user
        })
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};