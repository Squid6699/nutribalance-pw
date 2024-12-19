import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Users } from "../schemas/users.js";
export const routerApiAuthRegister = express.Router();

routerApiAuthRegister.post("/register", async (req, res) => {
    const {
        name, 
        email, 
        password, 
        age, 
        size, 
        height, 
        activity, 
        objective,
        allergies,
        intolerances,
        food_preferences
    } = req.body;

    if (!name || !email || !password){
        return res.status(400).json({ msg: 'MISSING DATA' });
    }

    try {
        const existingUser = await Users.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(409).json({ msg: "EMAIL ALREADY REGISTERED" });
        }
        
        if (password.length < 7){
            return res.status(400).json({msg: "SHORT PASSWORD"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({
            name: name.toUpperCase(),
            email: email.toLowerCase(),
            password: hashedPassword,
            age: age,
            size: size,
            height: height,
            activity: activity,
            objective: objective,
            allergies: allergies,
            intolerances: intolerances,
            food_preferences: food_preferences
        })

        const userAdd = await newUser.save();

        if (userAdd){
            const token = jwt.sign({ name: userAdd.name, email: userAdd.email, autorization: userAdd.autorization }, process.env.SECRET_KEY, {
                expiresIn: process.env.EXPIRED,
            });

            res.cookie("session", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
            });
            res.json({success: true, name: userAdd.name, email: userAdd.email, autorization: userAdd.autorization});

        }
    } catch (error) {
        console.log(error);
        return res.json({success: false, msg: "ERROR OCCURRED TRY LATER"});
    }
})
