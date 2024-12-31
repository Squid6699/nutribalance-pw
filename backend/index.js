import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { middleware } from "./middleware/middleware.js"
import { connectDB } from "./db.js"
import { routerApiAuthLogin } from "./routers/login.js";
import { routerApiAuthRegister } from "./routers/register.js";
import { routerApiCreateRecipes } from "./routers/create_recipes.js";
import { routerApiGetRecipes } from "./routers/recipes.js";
import { routerApiCreatePlanDiet } from "./routers/create_plan_diet.js";
import { routerApiGetDataUser } from "./routers/get_user.js";
import { routerApiLogOut } from "./routers/logout.js";

if (process.env.NODE_ENV === 'production') {
    dotenv.config({path: "./.env.production"});
    console.log('Cargando variables de producción');
} else {
    dotenv.config({path: "./.env.development"});
    console.log('Cargando variables de desarrollo');
}

const app = express();

app.use(middleware); //CONFIGURACION DEL MIDDLEWARE

connectDB(); //CONEXION A LA BASE DE DATOS

app.post("/api/", (req, res) => {
    const customHeader = req.headers['x-frontend-header'];

    if (customHeader !== 'frontend') {
        return res.status(401).send('Unauthorized');
    }

    const token = req.cookies.session;

    if (!token) {
        return res.json({success: false, msg: "TOKEN INVALIDO."})
    }
    
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);

        return res.json({success: true, name: verified.name, email: verified.email, autorization: verified.autorization});
    } catch (error) {
        return res.json({success: false, msg: "TOKEN EXPIRADO."})
    }
})



app.use("/api/auth/", routerApiAuthLogin);
app.use("/api/auth/", routerApiAuthRegister);
app.use("/api/", routerApiGetRecipes);
app.use("/api/", routerApiCreatePlanDiet);
app.use("/api/", routerApiCreateRecipes);
app.use("/api/", routerApiGetDataUser);
app.use("/api/", routerApiLogOut);



app.listen(process.env.PUERTO, () => {
    console.log("Conectado backend");
});