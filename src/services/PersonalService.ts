import PersonalModel from "../model/PersonalModel";

export const getPersonalData = async ()=>{
    const data = await PersonalModel.find({});

    if(data instanceof Error){
        return new Error('Dados não encontrados!')
    }else{
        return data;
    }
}

