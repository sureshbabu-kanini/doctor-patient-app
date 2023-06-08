import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.interface';
import { Patient } from 'src/app/models/patient.interface';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];
  doctor: Doctor = { doctor_Id: 0, doctor_Name: null, specialization: null, doctor_No: 0, imageData: null, patients: null };
  showEditModal: boolean = false;

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorService.getDoctors().subscribe({
      next: (doctors: Doctor[]) => {
        this.doctors = doctors;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  openEditModal(doctor: Doctor): void {
    this.doctor = { ...doctor };
    this.showEditModal = true;
  }

  updateDoctor(): void {
    if (this.doctor) {
      this.doctorService.updateDoctor(this.doctor.doctor_Id, this.doctor).subscribe({
        next: () => {
          this.getDoctors();
          this.closeEditModal();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }
  }

  deleteDoctor(doctor: Doctor): void {
    this.doctorService.deleteDoctor(doctor.doctor_Id).subscribe({
      next: () => {
        this.getDoctors();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }
}
