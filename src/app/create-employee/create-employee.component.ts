import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';
import { error } from 'node:console';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  constructor(private employeeService: EmployeeServiceService, private router: Router){}

  employee: Employee = new Employee();

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe({
      next: data => {
        console.log(data);
        this.goToEmployeeList();
      },
      error: error => {
        console.log(error);
      }
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.saveEmployee();

  }

}
