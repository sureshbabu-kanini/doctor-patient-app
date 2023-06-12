import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.interface';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];
  imageClasses: string[] = [
'https://www.kauveryhospital.com/doctorimage/recent/Dr-Deepak-Kumar2022-09-12-11:55:50am.jpg',
'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
'https://health.gov/sites/default/files/styles/600_wide/public/2022-06/cadqt.jpg?itok=zn27s5mX',
'https://cdn.siasat.com/wp-content/uploads/2023/04/Dr-Sudhir-Kumar.png',
'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww&w=1000&q=80',
'https://www.apolloclinic.com/assets/images/doctors/2243_DrAvinash.jpg',
'https://www.woodlandshospital.in/images/doctor-img/ravi-kant-saraogi.jpg',
'https://www.kauveryhospital.com/doctorimage/recent/salem/Dr_P_V_Dhanapal.jpg'
  ];

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorService.getDoctors().subscribe({
      next: (doctors: Doctor[]) => {
        this.doctors = doctors;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  enableEditMode(doctor: Doctor): void {
    doctor.editMode = true;
  }

  updateDoctor(doctor: Doctor): void {
    this.doctorService.updateDoctor(doctor.doctor_Id, doctor).subscribe({
      next: () => {
        this.getDoctors();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  deleteDoctor(doctor: Doctor): void {
    this.doctorService.deleteDoctor(doctor.doctor_Id).subscribe({
      next: () => {
        this.getDoctors();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
