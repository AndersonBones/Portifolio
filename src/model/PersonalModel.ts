import { Schema, model } from "mongoose"


interface IPersonal {
    age:number,
    phone:string,
    email:string,
    location:string,
    education:string,
    university:string,
    resume:string,
    hi:string
}

const personalSchema = new Schema<IPersonal>({
    age:{type:Number, required:true},
    phone:{type:String, required:true},
    email:{type:String, required:true},
    location:{type:String, required:true},
    education:{type:String, required:true},
    university:{type:String, required:true},
    resume:{type:String, required:true},
    hi:{type:String, required:true}
})

// criação do model // type     //collection //schema             
export default model<IPersonal>('personal', personalSchema);