import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.interface';
import { DoctorService } from '../doctor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];
  subscription: Subscription = new Subscription();

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.subscription = this.doctorService.getDoctors().subscribe({
      next: (doctors: Doctor[]) => {
        this.doctors = doctors;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
