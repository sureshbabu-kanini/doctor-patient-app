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
    'https://sarahscoop.com/wp-content/uploads/2021/10/sanji-one-piece.jpg',
    'https://images.wondershare.com/filmora/article-images/2-kakashi-hatake.jpg',
    'https://i0.wp.com/ravingotaku.com/wp-content/uploads/2022/04/anime-characters-with-pink-hair1.jpg?resize=500%2C287&ssl=1',
    'https://wealthofgeeks.com/wp-content/uploads/2023/01/Kamado-Tanjiro-1024x576.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3OQgsEZxn-GTfqZlWb4ZffnZX_gj_F8iOA&usqp=CAU',
    'https://cdn.myanimelist.net/s/common/uploaded_files/1471938539-558bcd453e4ab393e9ded080689e5d60.jpeg',
    'https://www.pngfind.com/pngs/m/77-779869_kawaii-anime-cutest-blue-haired-anime-character-blue.png',
    'https://i0.wp.com/animegalaxyofficial.com/wp-content/uploads/2022/07/20220730_205207-min.jpg?resize=750%2C422&ssl=1',
    'https://www.wallpaperup.com/uploads/wallpapers/2016/01/28/883875/371456acf7c746615f6f1a06ff17d00c-700.jpg'
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
