import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  

  constructor(private http: HttpClient) {}

  getDept(){
    return this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments")
  }
}
