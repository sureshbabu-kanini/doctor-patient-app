import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorCreateComponent } from './doctor/doctor-create/doctor-create.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientCreateComponent } from './patient/patient-create/patient-create.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DoctorDeleteComponent } from './doctor/doctor-delete/doctor-delete.component';
import { PatientDeleteComponent } from './patient/patient-delete/patient-delete.component';
import { DoctorPatientCountComponent } from './doctor/doctor-patient-count/doctor-patient-count.component';
import { HomeComponent } from './home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PatientDoctorSpecializationComponent } from './patient/patient-doctor-specialization/patient-doctor-specialization.component';
import { LoginFormComponent } from './Login/login-form/login-form.component';
import { RegisterFormComponent } from './Register/register-form/register-form.component';
import { SearchBarComponent } from './Search/search-bar/search-bar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Renderer2 } from '@angular/core';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    DoctorDetailsComponent,
    DoctorCreateComponent,
    DoctorEditComponent,
    PatientListComponent,
    PatientDetailsComponent,
    PatientCreateComponent,
    PatientEditComponent,
    DoctorDeleteComponent,
    PatientDeleteComponent,
    DoctorPatientCountComponent,
    HomeComponent,
    PatientDoctorSpecializationComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SearchBarComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
