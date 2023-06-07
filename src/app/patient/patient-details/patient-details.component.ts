import { Component } from '@angular/core';
import { Patient } from 'src/app/models/patient.interface';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
  patientId: number = 0; // Assign an initial value here
  patient: Patient | undefined;
  loading: boolean = false;
  error: string | null = null;

  constructor(private patientService: PatientService) { }

  getPatientDetails() {
    this.loading = true;
    this.error = null;

    this.patientService.getPatientDetails(this.patientId)
      .subscribe(patient => {
        this.patient = patient;
        this.loading = false;
      }, error => {
        console.log('Error fetching patient details:', error);
        this.error = 'Failed to fetch patient details.';
        this.loading = false;
      });
  }
}
