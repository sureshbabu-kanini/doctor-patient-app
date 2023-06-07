import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPatientCountComponent } from './doctor-patient-count.component';

describe('DoctorPatientCountComponent', () => {
  let component: DoctorPatientCountComponent;
  let fixture: ComponentFixture<DoctorPatientCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorPatientCountComponent]
    });
    fixture = TestBed.createComponent(DoctorPatientCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
