import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorCreateComponent } from './doctor/doctor-create/doctor-create.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { DoctorDeleteComponent } from './doctor/doctor-delete/doctor-delete.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientCreateComponent } from './patient/patient-create/patient-create.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { DoctorPatientCountComponent } from './doctor/doctor-patient-count/doctor-patient-count.component';
import { PatientDeleteComponent } from './patient/patient-delete/patient-delete.component';
import { PatientDoctorSpecializationComponent } from './patient/patient-doctor-specialization/patient-doctor-specialization.component';

const routes: Routes = [
  { path: 'doctors', component: DoctorListComponent },
  { path: 'doctors/create', component: DoctorCreateComponent },
  { path: 'doctors/:id', component: DoctorDetailsComponent },
  { path: 'doctors/:id/delete', component: DoctorDeleteComponent },
  { path: 'doctors/:id/edit', component: DoctorEditComponent },
  { path: 'doctors/:id/patientcount', component: DoctorPatientCountComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'patients/create', component: PatientCreateComponent },
  { path: 'patients/:id', component: PatientDetailsComponent },
  { path: 'patients/:id/edit', component: PatientEditComponent },
  { path: 'patients/:id/delete', component: PatientDeleteComponent },
  { path: 'patients/:id/doctorcount', component: PatientDoctorSpecializationComponent },
  
  { path: '', redirectTo: 'doctors', pathMatch: 'full' },
  { path: '**', redirectTo: 'doctors', pathMatch: 'full' } // Redirect to doctors for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
