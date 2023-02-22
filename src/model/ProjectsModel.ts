import {model, Schema} from "mongoose";

interface IProject {
    name:string,
    screen:string,
    description:string,
    stack:string[],
    link:string
}

const projectSchema = new Schema<IProject>({
    name:{type:String, required:true},
    screen:{type:String, require:true},
    description:{type:String, required:true},
    stack:{type:[String], required:true},
    link:{type:String, required:true}
})

export default model<IProject>('Project', projectSchema);

