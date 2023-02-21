import express, { Router } from "express";
import GetControllers from "../controllers/Controller";

const routes = Router();

routes.get('/', GetControllers.home)
routes.get('/download-cv', GetControllers.getCV)

routes.post('https://formsubmit.co/abones19@hotmail.com', express.urlencoded({extended:true}),GetControllers.postEmail)

export default routes;