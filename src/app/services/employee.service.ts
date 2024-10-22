import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "http://localhost:8080/api/v1/employees";

  constructor(private http : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}`);
  }

  registerEmployee(employee : object)  : Observable<object>{
    return this.http.post(`${this.url}`,employee);
  }
  
  getEmployeeById(id : number) : Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  updateEmployee(id:number,employee:object): Observable<object>{
    return this.http.put(`${this.url}/${id}`,employee);
  }

  deleteEmployee(id : number) : Observable<any>{
      return this.http.delete(`${this.url}/${id}`);
  }
}
