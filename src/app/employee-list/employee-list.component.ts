import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees : Employee[] | undefined;

  constructor(private employeeService: EmployeeServiceService, private router: Router){
    
  }

  ngOnInit() {
    this.getEmployee();
    
  }
  getEmployee(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data
    })
  }
  updateEmployee(id: number | undefined){
    this.router.navigate(['update-employee', id])
    
  }

  deleteEmployee(id: number | undefined){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.getEmployee();
     
    })

  }
  viewDetailEmployee(id: number | undefined){
    this.router.navigate(['viewemployee-detail', id])

  }

}
