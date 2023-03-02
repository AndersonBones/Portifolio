import {Request, Response} from 'express'
import { getEmployment } from '../services/Employment';
import { getPersonalData } from '../services/PersonalService'
import { getProjects } from '../services/ProjectsService';


class GetControllers{
    async home(req:Request, res:Response){

        const PersonalData = await getPersonalData();
        // const EmploymentData = getEmployment();
        const Projects = await getProjects();

        res.render('main', {PersonalData,  Projects})
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

