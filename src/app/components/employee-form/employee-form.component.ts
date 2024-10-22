import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit{

  employee: Employee = new Employee();

  constructor(private employeeService : EmployeeService,
              private router : Router)
  {}

  ngOnInit(): void {
  }

  registerEmployee(){
    this.employeeService.registerEmployee(this.employee).subscribe(data=>{
        console.log(data);
        this.goToEmployeeList();
    }, 
    error=>console.log(error)
    );
  }

  goToEmployeeList(){
    this.router.navigate(["/employees"]);
  }

  onSubmit(){
    console.log(this.employee);
    this.registerEmployee();
  }
  

}
