import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDeleteComponent } from './patient-delete.component';

describe('PatientDeleteComponent', () => {
  let component: PatientDeleteComponent;
  let fixture: ComponentFixture<PatientDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientDeleteComponent]
    });
    fixture = TestBed.createComponent(PatientDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
