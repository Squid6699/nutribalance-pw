import express from "express";

export const routerApiLogOut = express.Router();

routerApiLogOut.get("/logout", async (req, res) => {
    const customHeader = req.headers['x-frontend-header'];

    if (customHeader !== 'frontend') {
        return res.status(401).send('Unauthorized');
    }

    const token = req.cookies.session;

    if (!token){
        return res.json({success: false, msg: "OCURRED ERROR TRY LATER"});
    }

    res.clearCookie("session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    });

    return res.json({ success: true, msg: 'SESSION SUCCESSUFULLY CLOSED' });
})