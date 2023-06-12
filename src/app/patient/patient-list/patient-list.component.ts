import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.interface';
import { PatientService } from '../patient.service';

interface EditablePatient extends Patient {
  editMode: boolean;
}

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  originalPatients: Patient[] = [];
  imageClasses: string[] = [
'https://www.nia.nih.gov/sites/default/files/inline-images/working-with-diverse-older-patients-inline.jpg',
'https://thumbs.dreamstime.com/b/portrait-young-man-patient-lying-hospital-bed-pose-thumb-up-nice-smile-confident-treatments-process-healthcare-169416272.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoMggakuY38dHN12E_enWNUVghLgrILrutzcqP9IAWis4s5qRHcoWAe4j1vXQsiEf1IU&usqp=CAU',
'https://as1.ftcdn.net/v2/jpg/04/30/30/20/1000_F_430302093_4apxcOx3vEUkv5SoikIXYPOitBIiDyT7.jpg',
'https://www.shutterstock.com/shutterstock/photos/297349058/display_1500/stock-photo-young-american-man-lying-in-bed-at-hospital-room-sick-or-ill-but-giving-thumbs-up-smiling-happy-and-297349058.jpg',
'https://as1.ftcdn.net/v2/jpg/03/33/35/30/500_F_333353098_SIvMrdZsgHHn1tHSMxpdifzxO5ivyOjH.jpg',
'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX25501631.jpg'
  ];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatientList().subscribe({
      next: (patients: Patient[]) => {
        this.patients = patients;
        this.originalPatients = patients.map((patient) => ({ ...patient }));
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  enableEditMode(patient: Patient): void {
    patient.editMode = true;
  }

  savePatient(patient: Patient): void {
    patient.editMode = false;
    this.patientService.updatePatient(patient.patient_Id, patient).subscribe({
      next: () => {
        this.getPatients();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  deletePatient(patient: Patient): void {
    this.patientService.deletePatient(patient.patient_Id).subscribe({
      next: () => {
        this.getPatients();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  revertChanges(): void {
    this.patients = this.originalPatients.map((patient) => ({ ...patient }));
  }
}
