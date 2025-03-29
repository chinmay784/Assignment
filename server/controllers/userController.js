const User = require("../models/userModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        const { name, email, address, password, profilePic } = req.body;

        if (!name || !email || !address || !password) {
            return res.status(500).json({
                sucess: false,
                message: "Please provide all Details"
            })
        }

        let user = await User.findOne({ email });

        if (user) {
            return res.status(500).json({
                sucess: false,
                message: "User Already Exist"
            })
        }


        const salt = await bcrypt.genSalt(10);
        const hashPassword =await bcrypt.hash(password, salt);

        user = new User({
            name,
            password:hashPassword,
            email,
            address,
            profilePic: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`

        })

        
        await user.save();
        

        return res.json({
            sucess:true,
            message:"User Register Sucessfully"
        })


    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            sucess:false,
            message:" Problem in User Register "
        })
    }
}





exports.login = async (req,res) =>{
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(500).json({
                sucess:false,
                message:" User Not Register"
            })
        }


        const verifyPassword = await bcrypt.compare(password,user.password);
        if(!verifyPassword){
            return res.status(500).json({
                sucess:false,
                message:"Invalid Creaditianal"
            })
        }


        const token = jwt.sign({userId:user._id},process.env.JWT_SECREAT,{expiresIn:"7d"});


        return res.json({
            sucess:true,
            message:"Login Sucessfully",
            token,
            user
        })

    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            sucess:false,
            message:" Problem in Login User "
        })
    }
}



exports.getPrifile = async (req,res) =>{
    try {
        const user = await User.findById(req.user.userId).select("-password");

        if(!user){
            if(!user){
                return res.status(500).json({
                    sucess:false,
                    message:" User Not Register"
                })
            }
        }

        return res.json({
            sucess:true,
            user,
        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            sucess:false,
            message:" Problem in get User "
        })
    }
} 



exports.uploadProfilePic = async (req, res) => {
 const aa = awa 

    try {
        const userId = req.user.userId; // Extract user ID from JWT
        const imageUrl = req.file.path; // Cloudinary URL

        // Update user profile
        const user = await User.findByIdAndUpdate(userId, { profilePic: imageUrl }, { new: true });

        res.json({ message: "Profile picture updated", profilePic: user.profilePic });
    } catch (error) {
        res.status(500).json({ message: "Error uploading image", error: error.message });
    }
};
