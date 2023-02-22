import mongoose from "mongoose";
import { NextFunction, Response, Request } from "express";
import dotenv from 'dotenv'

dotenv.config();

class ConnectDB{
    constructor(){}

    async connectDB(req:Request, res:Response, next:NextFunction){

        try {
            await mongoose.connect(process.env.MONGO_URL as string);
            res.status(200)
            console.log('Connection has been established successfully.');
            next();
        } catch (error) {
            res.status(400).render('404')
            console.log('Unable to connect to the database:', error)
        }
    }
}

export default ConnectDB;