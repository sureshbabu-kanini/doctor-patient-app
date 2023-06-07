import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDoctorSpecializationComponent } from './patient-doctor-specialization.component';

describe('PatientDoctorSpecializationComponent', () => {
  let component: PatientDoctorSpecializationComponent;
  let fixture: ComponentFixture<PatientDoctorSpecializationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDoctorSpecializationComponent]
    });
    fixture = TestBed.createComponent(PatientDoctorSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
