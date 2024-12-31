import express from "express";
import jwt from "jsonwebtoken";
import { Users } from "../schemas/users.js";

export const routerApiGetDataUser = express.Router();

routerApiGetDataUser.get("/getuser", async (req, res) => {
    const customHeader = req.headers["x-frontend-header"];

    if (customHeader !== "frontend") {
        return res.status(401).send("Unauthorized");
    }

    const token = req.cookies.session;

    if (!token){
        return res.json({success: false, msg: "OCURRED ERROR TRY LATER"});
    }

    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        const userEmail = verified.email;

        const dataUser = await Users.findOne({email: userEmail});

        if (!dataUser){
            return res.json({success: false, msg: "OCURRED ERROR TRY LATER"});
        }

        return res.json({success: true, data: dataUser});
    }catch (error){
        return res.json({success: false, msg: "OCURRED ERROR TRY LATER"});
    }
})