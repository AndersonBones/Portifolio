import EmploymentModel from "../model/EmploymentModel";

export const getEmployment = async () =>{
    const employmentData = await EmploymentModel.find({});

    if(employmentData instanceof Error){
        return new Error('Dados não encontrados!')
    }else{
        return employmentData;
    }
}