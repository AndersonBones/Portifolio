import {model, Schema} from "mongoose";

interface IProject {
    name:string,
    screen:string,
    description:string,
    stack:string[],
    link:string
}

const projectSchema = new Schema<IProject>({
    name:{type:String},
    screen:{type:String},
    description:{type:String},
    stack:{type:[String]},
    link:{type:String}
})

export default model<IProject>('projects', projectSchema);

