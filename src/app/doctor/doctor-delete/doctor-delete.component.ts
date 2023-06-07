import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Doctor } from 'src/app/models/doctor.interface';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-delete',
  templateUrl: './doctor-delete.component.html',
  styleUrls: ['./doctor-delete.component.css']
})
export class DoctorDeleteComponent implements OnInit {
  doctor: Doctor | null = null;
  doctorId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
  }

  getDoctorDetails(): void {
    if (this.doctorId) {
      this.doctorService.getDoctorById(this.doctorId)
        .subscribe({
          next: (doctor: Doctor) => {
            this.doctor = doctor;
          },
          error: (error: any) => {
            console.log(error);
          }
        });
    }
  }

  deleteDoctor(): void {
    if (this.doctorId) {
      this.doctorService.deleteDoctor(this.doctorId)
        .subscribe({
          next: () => {
            // Delete successful
            // You can perform any necessary actions here, such as redirecting or showing a success message
            this.router.navigate(['/doctors']); // Example: Redirect to doctors list page
          },
          error: (error) => {
            // Handle error
            // You can display an error message or perform any necessary actions
            console.error(error);
          }
        });
    }
  }
  
}
