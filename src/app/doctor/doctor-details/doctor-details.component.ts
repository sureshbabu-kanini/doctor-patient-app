import { Component } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.interface';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent {
  doctorId: number | null = null;
  doctor: Doctor | null = null;
  loading = false;
  error: string | null = null;

  constructor(private doctorService: DoctorService) { }

  getDoctorDetails(): void {
    if (this.doctorId !== null) {
      this.loading = true;
      this.error = null;
      
      this.doctorService.getDoctorById(this.doctorId)
        .subscribe({
          next: (doctor: Doctor) => {
            this.doctor = doctor;
            this.loading = false;
          },
          error: (error: any) => {
            this.error = error.message;
            this.loading = false;
          }
        });
    }
  }
}
