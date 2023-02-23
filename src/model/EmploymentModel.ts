import { Schema, model} from "mongoose";

interface IEmployment {
    company:string
    emp:string,
    period:string,
}


const employmentSchema = new Schema<IEmployment>({
    company:{type:String, required:true},
    emp:{type:String, required:true},
    period:{type:String, required:true}
})

export default model<IEmployment>('employments',employmentSchema);
