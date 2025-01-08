import express from "express";
import { Users } from "../schemas/users.js";

export const routerApiEditProfile = express.Router();

routerApiEditProfile.put("/editprofile", async (req, res) => {
    const customHeader = req.headers['x-frontend-header'];

    if (customHeader !== 'frontend') {
        return res.status(401).send('Unauthorized');
    }

    const {
        name,
        sex,
        email,
        age,
        weight,
        height,
        activity,
        objective,
        allergies,
        intolerances,
        food_preferences,
    } = req.body;

    if (!name || !email) {
        return res.status(400).json({ msg: 'MISSING DATA' });
    }

    var profileCompleted = false;
    if (age && sex && weight && height && activity && objective && food_preferences) {
        profileCompleted = true;
    }

    const existingUser = await Users.findOne({ email: email.toLowerCase() });
    if (existingUser) {
        return res.status(409).json({ success: false, msg: "EMAIL ALREADY REGISTERED" });
    }

    const updateUser = await Users.findOneAndUpdate({ email: email.toLowerCase() }, {
        name: name.toUpperCase(),
        sex: sex,
        email: email.toLowerCase(),
        age: age,
        weight: weight,
        height: height,
        activity: activity,
        objective: objective,
        allergies: allergies,
        intolerances: intolerances,
        food_preferences: food_preferences,
        profileCompleted: profileCompleted,
    })

    const updatedUser = await updateUser.save();

    if (updatedUser) {

        const tokenCurrent = req.cookies.session;

        if (!tokenCurrent){
            return res.json({success: false, msg: "OCURRED ERROR TRY LATER"});
        }

        res.clearCookie("session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        });

        const token = jwt.sign({ name: userAdd.name, email: userAdd.email, autorization: userAdd.autorization }, process.env.SECRET_KEY, {
            expiresIn: process.env.EXPIRED,
        });

        res.cookie("session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
        res.json({ success: true, name: userAdd.name, email: userAdd.email, autorization: userAdd.autorization });

    }


    try {

    } catch (error) {
        return res.json({ success: false, msg: "ERROR OCCURRED TRY LATER" })
    }
})