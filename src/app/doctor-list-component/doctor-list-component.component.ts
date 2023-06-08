import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../models/doctor.interface';

@Component({
  selector: 'app-doctor-list',
  templateUrl: 'doctor-list-component.component.html',
  styleUrls: ['doctor-list-component.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.doctors = this.route.snapshot?.data?.['doctors'] || [];
  }
}
