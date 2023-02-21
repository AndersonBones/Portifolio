import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();

type SendMail = {
    name:string,
    email:string,
    subject:string,
    message:string
}

class Mail{

    constructor(public mailConfig:SendMail){}

    
    async sendMail(){

        let mailOptions = {
            from:this.mailConfig.email as string,
            to:process.env.EMAIL as string,
            replyTo:this.mailConfig.email as string,
            subject:this.mailConfig.subject as string,
            text:this.mailConfig.message as string,
            html:`<p>${this.mailConfig.message}</p>` as string
        }
       
        const trasporter = nodemailer.createTransport({
            host:process.env.HOST_MAIL as string,
            port:587,
            secure:false,
            service:'Hotmail',
            auth:{
                user:process.env.EMAIL as string,
                pass:process.env.PASSWORD as string
            },
            tls:{rejectUnauthorized:false}
            
        });

        trasporter.sendMail(mailOptions,(error, info)=>{
            if(error){
                return error;
            }else{
                return info;
            }
        });
    }
}

export default Mail;