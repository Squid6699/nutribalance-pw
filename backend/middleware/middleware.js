import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";

if (process.env.NODE_ENV === 'production') {
    dotenv.config({path: "./.env.production"});
    console.log('Cargando variables de producción');
} else {
    dotenv.config({path: "./.env.development"});
    console.log('Cargando variables de desarrollo');
}

export const middleware = express.Router();
const optionCors = {
    origin: process.env.HOST,
    credentials: true
}

middleware.use(cors(optionCors));
middleware.use(express.json());
middleware.use(cookieParser());