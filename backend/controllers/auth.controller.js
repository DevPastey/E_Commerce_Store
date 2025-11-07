import { redis } from "../lib/redis.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateTokens = (userId) => {
    const accessToken = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"});
    const refreshToken= jwt.sign({userId}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"});

    return {accessToken, refreshToken};
};

const storeRefreshToken = async(userId, refreshToken) => {
   await redis.set(`refresh_token:${userId}`, refreshToken, {
    EX: 7 * 24 * 60 * 60, // 7 days
  }); //7days
}

const setCookies = (res, accessToken, refreshToken) => {
    res.cookie("accessToken", accessToken, {
        httpOnly: true, // prevents XSS attacks, Cross Site Scripting Attack
        secure: process.env.NODE_ENV === "production",
        samesite: "strict", //prevents CSRF, Cross Site Request Forgery
        maxAge: 15*60*1000, //15mins
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true, // prevents XSS attacks, Cross Site Scripting Attack
        secure: process.env.NODE_ENV === "production",
        samesite: "strict", //prevents CSRF, Cross Site Request Forgery
        maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
    });
}

export const signup = async(req, res) => {
    const {email, password, confirmPassword, name} = req.body;
    const userExists = await User.findOne({email})
    
    try {

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        
        if (userExists) {
            return res.status(400).json({message: "User already exists"});
        }

        const user = await User.create({name, email, password});

        //authenticate
        const { accessToken, refreshToken } = generateTokens(user._id);
        await storeRefreshToken(user._id, refreshToken);

        setCookies(res, accessToken, refreshToken);

        res.status(201).json({user:{
            email: user.email,
            name: user.name,
            _id: user._id,
            role: user.role,
        }, message: "User created successfully"})

    } catch (error) {
        console.log("Signup error", error)
        res.status(500).json({message: error.message});
    }
};

export const login = async(req, res) => {
    try {
        const {email, password} = req.body;

        //find user
        const user = await User.findOne({email});

        if (user && (await user.comparePassword(password))) {
        //authenticate
            const { accessToken, refreshToken } = generateTokens(user._id);
            await storeRefreshToken(user._id, refreshToken);

            setCookies(res, accessToken, refreshToken);

            res.status(200).json({message: "Logged in succesfully"});
            
        }else{
            res.status(400).json({message: "Invalid email or password"});
        }


    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message})
    }
    
};

export const logout = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (refreshToken) {
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            await redis.del(`refresh_token:${decoded.userId}`)
        }
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        res.json({
            message: "Logged out successfully",
        })
      
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message});
    }    
};

//This refresh(recreate) an access token
export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({message: "No refresh token provided"})
        }

        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const storedToken = await redis.get(`refresh_token:${decoded.userId}`);

        if (refreshToken !== storedToken) {
            return res.status(401).json({message: "Invalid refresh token"})
        }
        
        const accessToken = jwt.sign({userId: decoded.userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"});
        
        res.cookie("accessToken", accessToken, {
            httpOnly: true, // prevents XSS attacks, Cross Site Scripting Attack
            secure: process.env.NODE_ENV === "production",
            samesite: "strict", //prevents CSRF, Cross Site Request Forgery
            maxAge: 15*60*1000, //15mins
        });
        res.json({message: "Token refreshed successfully"});

    } catch (error) {
        console.log("Error in refreshToken controller", error.message);
        res.status(500).json({message: "Server Error", error: error.message});
    }
}

export const getProfile = async (req, res) => {
    try {
        res.json(req.user);
    } catch (error) {
        res.status(500).json({message: "Server eror", error:error.message});
    }
};