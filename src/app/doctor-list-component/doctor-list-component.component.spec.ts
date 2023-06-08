import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListComponentComponent } from './doctor-list-component.component';

describe('DoctorListComponentComponent', () => {
  let component: DoctorListComponentComponent;
  let fixture: ComponentFixture<DoctorListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorListComponentComponent]
    });
    fixture = TestBed.createComponent(DoctorListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
