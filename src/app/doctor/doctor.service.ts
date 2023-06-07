import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Doctor } from '../models/doctor.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'https://localhost:7132/api/Doctor'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  // Fetches all doctors from the API
  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  // Fetches a specific doctor by ID from the API
  getDoctorById(id: number): Observable<Doctor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Doctor>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  // Creates a new doctor using the API
  createDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, doctor);
  }

  // Updates an existing doctor using the API
  updateDoctor(id: number, doctor: Doctor): Observable<Doctor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Doctor>(url, doctor);
  }

  // Deletes a doctor by ID using the API
  deleteDoctor(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Fetches the count of patients by doctor ID from the API
  getPatientCountByDoctorId(id: number): Observable<number> {
    const url = `${this.apiUrl}/${id}/patients/count`;
    return this.http.get<number>(url);
  }
}
