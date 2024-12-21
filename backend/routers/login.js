import express from "express";
import bcrypt from "bcrypt";
import { Users } from "../schemas/users.js"
export const routerApiAuthLogin = express.Router();

routerApiAuthLogin.post("/login", async (req, res) => {
    const customHeader = req.headers['x-frontend-header'];

    if (customHeader !== 'frontend') {
        return res.status(401).send('Unauthorized');
    }
    
    const {email, password} = req.body;

    if (!email || !password){
        return res.json({ msg: 'FALTAN DATOS' });
    }


    try {
        const user = await Users.findOne({email: email.toLowerCase()});

        if (!user){
            return res.json({success: false, msg: "CORREO Y/O CONTRASENA INCORRECTOS" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch){
            return res.json({success: false, msg: "CORREO Y/O CONTRASENA INCORRECTOS" });
        }

        const token = jwt.sign({ name: user.name, email: user.email, autorization: user.autorization }, process.env.SECRET_KEY, {
            expiresIn: process.env.EXPIRED,
        });

        res.cookie("session", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        res.json({success: true, name: user.name, email: user.email, autorization: user.autorization});

    } catch (error) {
        return res.json({success: false, msg: "CORREO Y/O CONTRASENA INCORRECTOS"})
    }
})