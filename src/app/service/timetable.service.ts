import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TimetableService {

  private apiBaseUrl  = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }



  getTimetableById(id: string): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/timetable/${id}`);
  }

  updateTimetable(id: string, data: any) {
    return this.http.put<any>(`${this.apiBaseUrl}/timetable/${id}`, data);
  }



  //GET
  getStudySessions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/study_sessions`);
  }

  getMajors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/majors`);
  }

  getTeachers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/teachers`);
  }

  getSubjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/subjects`);
  }


  getRooms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/rooms`);
  }


  getTeacherSubjects(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/teacher_subjects`);
  }


  // POST
  createTimetable(timetableData: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/timetable`, timetableData);
  }



  checkForConflicts(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/timetable/checkconflicts`, formData);
  }





}
