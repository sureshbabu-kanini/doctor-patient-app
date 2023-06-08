import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.interface';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { PatientService } from 'src/app/patient/patient.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  specialization: string="";
  isLoading: boolean = false;
  doctors: Doctor[] = [];

  constructor(
    private router: Router,
    private doctorService: DoctorService,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {}

  searchDoctorsBySpecialization(): void {
    this.isLoading = true;
    this.patientService
      .getDoctorsBySpecialization(this.specialization)
      .subscribe((doctors: Doctor[]) => {
        this.doctors = doctors;
        this.isLoading = false;
        this.displayDoctorDetailsAlert();
      });
  }

  displayDoctorDetailsAlert(): void {
    let message = 'Doctors with Specialization:\n\n';
    for (let doctor of this.doctors) {
      message += `Name: ${doctor.doctor_Name}\n`;
      message += `Specialization: ${doctor.specialization}\n`;
      message += `Phone Number: ${doctor.doctor_No}\n\n`;
    }
    alert(message);
  }
}
