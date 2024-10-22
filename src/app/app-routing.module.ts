import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

const routes: Routes = [
  {
    path:"employees" ,component:EmployeeListComponent
  },
  {
    path:"register-employee", component:EmployeeFormComponent
  },
  {
    path:"",redirectTo:"employees",pathMatch:"full"
  },
  {
    path:"update-employee/:id", component:UpdateEmployeeComponent
  },
  {
    path:"employee-detail/:id",component:EmployeeDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
