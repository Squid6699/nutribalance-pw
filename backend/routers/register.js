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
        return res.json({ msg: 'FALTAN DATOS' });
    }

    try {
        const newUser = new Users({
            name: name,
            email: email,
            password: password,
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
        return res.json({success: false, msg: "OCURRIO UN ERROR INTENTE MAS TARDE"});
    }
})
