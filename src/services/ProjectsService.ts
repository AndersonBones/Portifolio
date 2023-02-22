import mongoose from "mongoose";
import ProjectsModel from "../model/ProjectsModel";

export const getProjects = async ()=>{
    const Projects = await ProjectsModel.find({});

    if(Projects instanceof Error){
        return new Error('Dados não encontrados!')
    }else{
        return Projects;
    }
}