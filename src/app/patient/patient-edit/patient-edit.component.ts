import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from 'src/app/models/patient.interface';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent {
  patientId!: number;
  patient!: Patient;
  showPatientForm: boolean = false;

  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  getPatientDetails() {
    this.patientService.getPatientDetails(this.patientId).subscribe(
      (patient) => {
        this.patient = patient;
        this.showPatientForm = true;
      },
      (error) => {
        console.error('Failed to retrieve patient details', error);
      }
    );
  }

  updatePatientDetails() {
    this.patientService.updatePatient(this.patientId, this.patient).subscribe(
      () => {
        console.log('Patient details updated');
        this.router.navigate(['/patients']);
      },
      (error) => {
        console.error('Failed to update patient details', error);
      }
    );
  }
}
