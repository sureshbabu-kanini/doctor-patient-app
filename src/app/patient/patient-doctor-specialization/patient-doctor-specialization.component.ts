import { Component, OnDestroy } from '@angular/core';
import { PatientService } from '../patient.service';
import { Doctor } from 'src/app/models/doctor.interface';
import { Subscription } from 'rxjs';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Patient } from 'src/app/models/patient.interface';

@Component({
  selector: 'app-patient-doctor-specialization',
  templateUrl: './patient-doctor-specialization.component.html',
  styleUrls: ['./patient-doctor-specialization.component.css']
})
export class PatientDoctorSpecializationComponent implements OnDestroy {
  specializations: string[] = [];
  specialization: string = '';
  doctors: Doctor[] = [];
  isLoading: boolean = false;
  subscription: Subscription | undefined;

  constructor(private patientService: PatientService, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.loadSpecializations();
  }

  loadSpecializations(): void {
    this.doctorService.getDoctors()
      .subscribe((doctors: Doctor[]) => {
        this.specializations = Array.from(new Set(doctors.map(doctor => doctor.specialization).filter(specialization => specialization !== null))) as string[];
      });
  }

  searchDoctorsBySpecialization(): void {
    if (this.specialization) {
      this.isLoading = true;
      this.subscription = this.patientService.getDoctorsBySpecialization(this.specialization)
        .subscribe({
          next: (doctors: Doctor[]) => {
            this.doctors = doctors;
            this.isLoading = false;
          },
          error: (error: any) => {
            console.error(error);
            this.isLoading = false;
          }
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
