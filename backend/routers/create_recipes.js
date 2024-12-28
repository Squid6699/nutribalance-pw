import express from "express";
import { Configuration, OpenAIApi } from "openai";

export const routerApiCreateRecipes = express.Router();

routerApiCreateRecipes.get("/create_recipes", async (req, res) => {
    const customHeader = req.headers['x-frontend-header'];

    if (customHeader !== 'frontend') {
        return res.status(401).send('Unauthorized');
    }
    
    const {ingredients} = req.body;

    if (!ingredients){
        return res.json({ msg: 'FALTAN DATOS' });
    }

    //SETUP OPENAI

    try {
        //SEND DATA OPENAI
    } catch (error) {
        return res.json({success: false, msg: "ERROR OCCURRED TRY LATER"})
    }
})
