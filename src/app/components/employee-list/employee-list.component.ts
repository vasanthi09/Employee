import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  employees : any[]  = [];

  constructor(private employeeService : EmployeeService,
              private router : Router
  ){}

  ngOnInit(): void {
      this.getAllEmployees();
  }

  getAllEmployees(){
    this.employeeService.getAllEmployees().subscribe(employeeData =>{
        this.employees = employeeData;
    });
  }

  updateEmployee(id : number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id : number){
    if(confirm("Are you sure to delete?")){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getAllEmployees();
    });
    }
  }

  employeeDetails(id : number){
    this.router.navigate(['employee-detail',id]);
  }
  



}
