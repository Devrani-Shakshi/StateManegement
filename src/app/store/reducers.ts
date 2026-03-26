import { createReducer, on  } from "@ngrx/store";
import { Department } from "../components/model";
import { loadDepartment, loadDepartmentSuccess } from "./action";


export interface DepartmentState{

    departments: Department[],
    loading : boolean ,
}

export const initialState : DepartmentState ={
    departments: [],
    loading : false 
}

export const departmentReducer = createReducer( initialState ,
    on(loadDepartment , state => ({
        ...state,
        loading : true 
     })),

       on(loadDepartmentSuccess , (state , { departments }) => ({
         ...state,
        loading : false,
        departments 
       }))
    )