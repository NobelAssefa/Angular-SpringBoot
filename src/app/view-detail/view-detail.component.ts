import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrl: './view-detail.component.css'
})
export class ViewDetailComponent implements OnInit{
 
  id: number | undefined;
  employee = new Employee();
  constructor(private route: ActivatedRoute, private employeService: EmployeeServiceService){

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.employeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    })

    
  }

}
