import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from 'src/app/models/doctor.interface';
import { Subscription } from 'rxjs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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
  };

  private doctorSubscription: Subscription | undefined;

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) { }

  createDoctor(): void {
    this.doctorSubscription = this.doctorService.createDoctor(this.ndoctor).subscribe({
      next: () => {
        this.router.navigate(['/doctors']);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.doctorSubscription) {
      this.doctorSubscription.unsubscribe();
    }
  }

  
}
