import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { middleware } from "./middleware/middleware.js"
import { connectDB } from "./db.js"

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