import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.interface';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {
  doctor: Doctor | null = null;
  doctorId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
  }

  getDoctorDetails(): void {
    if (this.doctorId) {
      this.doctorService.getDoctorById(this.doctorId).subscribe({
        next: (doctor: Doctor) => {
          this.doctor = doctor;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }
  }

  updateDoctor(): void {
    if (this.doctor) {
      this.doctorService.updateDoctor(this.doctor.doctor_Id, this.doctor).subscribe({
        next: () => {
          this.router.navigate(['/doctors']);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }
  }
}
