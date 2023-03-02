import express, { Router } from "express";
import GetControllers from "../controllers/Controller";
import ConnectDB from "../middlewares/ConnectDB";

const db = new ConnectDB();
const routes = Router();

routes.get('/', db.connectDB, GetControllers.home)

routes.post('https://formsubmit.co/abones19@hotmail.com', express.urlencoded({extended:true}),GetControllers.postEmail)

export default routes;