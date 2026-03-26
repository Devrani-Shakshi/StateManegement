import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DepartmentState } from "./reducers";

export const selectDepartmentState = createFeatureSelector<DepartmentState> ('departments')

export const selectDepartments = createSelector (
    selectDepartmentState , state => state.departments
)

export const selectloading = createSelector (
    selectDepartmentState , state => state.loading
)