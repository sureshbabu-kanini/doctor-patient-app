import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Patient } from 'src/app/models/patient.interface';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent implements OnInit {
  patient: Patient | null = null;
  patientId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
  }

  getPatientDetails(): void {
    if (this.patientId) {
      this.patientService.getPatientDetails(this.patientId)
        .subscribe({
          next: (patient: Patient) => {
            this.patient = patient;
          },
          error: (error: any) => {
            console.log(error);
          }
        });
    }
  }

  deletePatient(): void {
    if (this.patientId) {
      this.patientService.deletePatient(this.patientId)
        .subscribe({
          next: () => {
            // Delete successful
            // You can perform any necessary actions here, such as redirecting or showing a success message
            this.router.navigate(['/patients']); // Example: Redirect to patients list page
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
