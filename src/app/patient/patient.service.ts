import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../models/patient.interface';
import { Doctor } from '../models/doctor.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'https://localhost:7132/api/Patients'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  // Retrieves the details of a specific patient by ID from the API
  getPatientDetails(patientId: number): Observable<Patient> {
    const url = `${this.apiUrl}/${patientId}`;
    return this.http.get<Patient>(url);
  }

  // Retrieves the list of all patients from the API
  getPatientList(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  // Deletes a specific patient by ID using the API
  deletePatient(patientId: number): Observable<void> {
    const url = `${this.apiUrl}/${patientId}`;
    return this.http.delete<void>(url);
  }

  // Updates the details of a specific patient by ID using the API
  updatePatient(patientId: number, patient: Patient): Observable<void> {
    const url = `${this.apiUrl}/${patientId}`;
    return this.http.put<void>(url, patient).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle error if necessary
        return throwError(() => error);
      })
    );
  }

  getPatientCountByDoctorId(doctorId: number): Observable<number> {
    const url = `${this.apiUrl}/Doctor/${doctorId}/patients/count`;
    return this.http.get<number>(url);
  }

  getDoctorsBySpecialization(specialization: string): Observable<Doctor[]> {
    const url = `${this.apiUrl}/doctors/specialization/${specialization}`;
    return this.http.get<Doctor[]>(url);
  }

}