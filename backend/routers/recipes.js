import express from "express";

export const routerApiGetRecipes = express.Router();

routerApiGetRecipes.get("/getrecipes", async (req, res) => {
    const customHeader = req.headers['x-frontend-header'];

    if (customHeader !== 'frontend') {
        return res.status(401).send('Unauthorized');
    }

    try {

    } catch (error) {
        return res.json({success: false, msg: "ERROR OCCURRED TRY LATER"})
    }
})