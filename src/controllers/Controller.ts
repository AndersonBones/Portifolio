import {Request, Response} from 'express'
import { getEmployment } from '../services/Employment';
import { getData } from '../services/PersonalService'
import { getProjects } from '../services/ProjectsService';
import MailService from '../services/MailService'
import ProjectsModel from '../model/ProjectsModel';

class GetControllers{
    async home(req:Request, res:Response){

        const PersonalData = getData();
        const EmploymentData = getEmployment();

        
        const Projects = await getProjects();
        console.log(Projects);

        res.render('main', {PersonalData, EmploymentData, Projects})
    }

    getCV(req: Request, res: Response){
        const rootDirectory = "C:/Users/Anderson/Desktop/Portifolio/public/files/AndersonBones-Programador.pdf"
      
        res.download(rootDirectory)
    }

    async postEmail (req: Request, res:Response){
        // let name = req.body.name as string;
        // let email = req.body.email as string;
        // let subject = req.body.subject as string;
        // let message = req.body.message as string;

        // let Mail = new MailService({name,email, subject, message})
        // let result = await Mail.sendMail();
        
        res.redirect('/');
    }
}

export default new GetControllers();

