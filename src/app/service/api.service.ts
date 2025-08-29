import { environment } from './environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }



  getTeachers_limit(page: number, rows: number, search: string): Observable<any> {
    // Build query parameters
    const params = new HttpParams()
      .set('page', page.toString())
      .set('rows', rows.toString())
      .set('search', search);  // Include the search term in the request

    return this.http.get<any>(`${this.baseUrl}/teachers/1`, { params });
  }


  // New addStudent method
  addStudentghost(studentData: {
    major_id: number,
    date_joined: string,
    generation: string,
    batch: string,
    group_student: string,
    shift_name: string
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/students/ghost`, studentData);
  }

  sendTelegramMessage(message:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/timetable/message_telegram`, { message });
  }
  
  swapTeachers(timetable_id_1: number, timetable_id_2: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/timetable/swap-teachers-subjects`, {
      timetable_id_1,
      timetable_id_2
    });
  }
  swaprooms(timetable_id_1: number, timetable_id_2: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/timetable/swap-rooms`, {
      timetable_id_1,
      timetable_id_2
    });
  }



  assignRoom(timetableId: number, roomId: number): Observable<any> {

    const url = `${this.baseUrl}/timetable/assign-room/${timetableId}/${roomId}`;
    return this.http.put(url, {

    }   // )
       //  .pipe(
      // tap(response => console.log('Assign Room Response:', response)), // Optional
      // catchError(this.handleError)  // Removed centralized error handling
    );
  }


  // PUT ----------------- Update Teacher
  updateTeacher(teacherId: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/teachers/admin/${teacherId}`, updatedData);
  }
  

  // POST -----------------su

  //can used all
  create(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data);
  }

  createroom(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/rooms`, data);
  }




  assignSubjectToTeacher(teacherId: number, subjectId: number): Observable<any> {
    const data = {
      teacher_id: teacherId,
      subject_id: subjectId
    };
    return this.create('teacher_subjects', data);
  }






  // POST a list of teacher-teaching time associations
  addTeacherTeachingTimes(teacherTeachingTimes: { teacher_id: number, study_sessions_id: number }[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/teacher_teaching_time`, teacherTeachingTimes);
  }

  // DELETE a list of teacher-teaching time associations
  deleteTeacherTeachingTimes(teacherTeachingTimes: { teacher_id: number, study_sessions_id: number }[]): Observable<any> {
    return this.http.delete(`${this.baseUrl}/teacher_teaching_time`, {
      body: teacherTeachingTimes
    });
  }




  createFaculties(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data);
  }




  //PUT -------------------  UPDATE



  //can used all
  update(endpoint: string, id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endpoint}/${id}`, data);
  }




  updatrole(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endpoint}`, data);
  }


  updateFaculties(endpoint: string, id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${endpoint}/${id}`, data);
  }





  //DELETE-------------------

  //can used all
  delete(endpoint: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endpoint}/${id}`);
  }


  deleteTeacherSubject(teacherId: number, subjectId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/teacher_subjects`, {
      body: { teacher_id: teacherId, subject_id: subjectId }
    });
  }




  deleteFaculties(endpoint: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endpoint}/${id}`);
  }




  //GET----------------------

  //can used all

  getd(endpoint: string, options?: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`, { ...options, responseType: 'blob' });
  }


  get(endpoint: string, params?: any): Observable<any> {
    const options =  { params } ;
    return this.http.get(`${this.baseUrl}/${endpoint}`, options);
  }
  put(endpoint: string, body: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endpoint}`, body);
  }


  post(endpoint: string, body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, body);
  }
  //http://127.0.0.1:5000/api/timetable/filter?years=2025&semester=1&teacher_id=10&shift_name==&group_student=&major_id=
  getFilteredTimetable(
    years: string,
    semester: string,
    teacherId: string,
    shiftName: string = '',
    groupStudent: string = '',
    majorId: string = '',
    generation: string = '',
    roomId: string = '' // New optional parameter

  ): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/timetable/filter?years=${years}&semester=${semester}&teacher_id=${teacherId}&shift_name=${shiftName}&group_student=${groupStudent}&major_id=${majorId}&generation=${generation}&room_id=${roomId}`
    );
  }
  getOptions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/timetable/options`)
  }

  deletelisttable(endpoint: string, params?: any): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    // Append query parameters to the URL if provided
    let options = {};
    if (params) {
      options = { params: params };
    }

    return this.http.delete(url, options);
  }

  getstuden(endpoint: string, page: number = 1, pageSize: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get(`${this.baseUrl}/${endpoint}`, { params });
  }

  checkUsernameAvailability(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/teachers/username/${username}`);
  }

  getMajors(): Observable<any> {
    return this.http.get(`${this.baseUrl}/majors`);
  }
  getTeacherTeachingTimes(): Observable<any>  {
    return this.http.get(`${this.baseUrl}/teacher_teaching_time`);

  }

  getFaculties(): Observable<any> {
    return this.http.get(`${this.baseUrl}/faculties`);
  }


  teacher_subjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/teacher_subjects`);
  }


  
  getDepartments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/departments`);
  }

  getRooms(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rooms`);
  }

  getStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students`);
  }

  getStudySessions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/study_sessions`);
  }

  getSubjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/subjects`);
  }

  getTeacherSubjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/teacher_subjects`);
  }

  getTeachers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/teachers`);
  }

  getTimetable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/timetable`);
  }













}
