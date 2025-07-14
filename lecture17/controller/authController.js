import {User} from "../models/userModel.js";

export const verifyEmail = async(req,res) =>{
    try{
        const {code} = req.body;
        const user = await.User.findOne({
            verificationToken : code
            verificationTokenExpiresAt :{$gt : Date.now()}
        })
        if(!user){
            return res.status(400).json({
                success : false,
                message : "Invalid or expired token"
            })
        }
    } catch(error){
        console.log(error)
    }
}

export const signup = async (req, res){
    const {email, password, name} = req.body;

    try {
        if(!email || !password || !name){
            throw new Error("All fields are required")
        }
        const userAlreadyExists = await User.findOne({email});

        console.log("userAlreadyExists", useerAlreadyExists);

        if(userAlreadyExists){
            return res.status(400).json ({success : false, message : "User already Exists"})
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random()* 900000).toString();

        const user = new User({
            email,
            password: hashedPassword,
            name, 
            verificationToken,
            verificationTokenExpiresAt : Date.now() + 24 * 60 * 60 * 1000
        });
        await user.save();



    }
}