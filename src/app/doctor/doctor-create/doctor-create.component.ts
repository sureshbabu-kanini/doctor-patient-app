import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from 'src/app/models/doctor.interface';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent {
  ndoctor: Doctor ={
    doctor_Id: 0,
    doctor_Name: '',
    specialization: '',
    doctor_No: 0,
    imageData: '',
    patients: null
  }; // Create an instance of the Doctor class

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) { }

  createDoctor(): void {
    this.doctorService.createDoctor(this.ndoctor).subscribe(
      () => {
        this.router.navigate(['/doctors']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
