import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient.interface';
import { PatientService } from '../patient.service';

declare const Swiper: any; // Declare the Swiper variable

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  swiper: any; // Declare the swiper variable

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatientList();
    this.initSwiper();
  }

  getPatientList(): void {
    this.patientService.getPatientList()
      .subscribe((patients: Patient[]) => {
        this.patients = patients;
      });
  }

  initSwiper(): void {
    this.swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
