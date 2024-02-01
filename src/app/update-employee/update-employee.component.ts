import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeServiceService,  private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: data => {
        console.log(data);
        this.employee = data
      },
      error: error => {
        console.log(error);
      }
    })
    
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
        this.goToEmployeeList();
      }
    )
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }


 
  
  

}
