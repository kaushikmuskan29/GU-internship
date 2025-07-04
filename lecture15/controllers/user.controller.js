const User = require("../models/user.model");

module.exports.createUser =async (req,res)=>{
    try{
        let user = await User.create({
        name : "Muskan",
        email : "muskan@gmail.com",
        password : "123456"
        })
        res.status(201).json({user});
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

module.exports.getAllUsers = async (req,res) => {
    try{
        let users = await User.find();
        res.status(200).json({users})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

// module.exports = {createUser, getAllUsers}