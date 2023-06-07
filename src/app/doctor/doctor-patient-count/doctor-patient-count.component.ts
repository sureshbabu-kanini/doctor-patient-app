import { Component } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Patient } from 'src/app/models/patient.interface';
import { PatientService } from 'src/app/patient/patient.service';

@Component({
  selector: 'app-doctor-patient-count',
  templateUrl: './doctor-patient-count.component.html',
  styleUrls: ['./doctor-patient-count.component.css']
})
export class DoctorPatientCountComponent {
  doctorId!: number;
  patientCount!: number;

  constructor(private doctorService: DoctorService) {}

  getPatientCount(): void {
    if (this.doctorId) {
      this.doctorService.getPatientCountByDoctorId(this.doctorId).subscribe({
        next: (count: number) => {
          this.patientCount = count;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
  }
}
