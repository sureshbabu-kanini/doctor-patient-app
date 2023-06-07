import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.interface';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatientList();
  }

  getPatientList(): void {
    this.patientService.getPatientList()
      .subscribe((patients: Patient[]) => {
        this.patients = patients;
      });
  }
}
