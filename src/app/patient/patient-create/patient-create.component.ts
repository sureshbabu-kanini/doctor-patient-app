import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from 'src/app/models/patient.interface';
import { Doctor } from 'src/app/models/doctor.interface';
import { DoctorService } from 'src/app/doctor/doctor.service';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {
  patient: Patient = {
    patient_Id: 0,
    patient_Name: '',
    disease: '',
    email: '',
    patient_No: 0,
    doctor: null
  };
  validationErrors: any = {};
  doctors: Doctor[] = [];

  constructor(private patientService: PatientService, private doctorService: DoctorService) {}

  ngOnInit() {
    this.fetchDoctors();
  }

  fetchDoctors() {
    this.doctorService.getDoctors().subscribe(
      (data) => {
        this.doctors = data;
      },
      (error) => {
        // Handle error if needed
      }
    );
  }

  createPatient() {
    this.patientService.createPatient(this.patient).subscribe(
      (data) => {
        console.log('Patient created successfully');
        alert('Patient added');
        this.resetForm();
      },
      (error) => {
        console.log('Error creating patient:', error);
        if (error.status === 400 && error.error?.title === 'One or more validation errors occurred.') {
          this.validationErrors = error.error.errors;
        } else {
          // Handle other errors if needed
        }
      }
    );
  }

  resetForm() {
    this.patient = {
      patient_Id: 0,
      patient_Name: '',
      disease: '',
      email: '',
      patient_No: 0,
      doctor: null
    };
    this.validationErrors = {};
  }
}
