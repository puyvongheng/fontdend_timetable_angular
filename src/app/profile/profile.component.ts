
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';

import { NzModalService } from 'ng-zorro-antd/modal';

import {  NzIconService } from 'ng-zorro-antd/icon';
import { UserOutline } from '@ant-design/icons-angular/icons';

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SharedModule } from '../shared/shared.module';
import { PrintTeacherComponent } from '../print-teacher/print-teacher.component';
import { TotalscoreComponent } from '../studen/totalscore/totalscore.component';



@Component({
  selector: 'app-profile',
  imports: [
    SharedModule,
    TotalscoreComponent
    
    
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
  ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // ✅ Allows unknown elements

})
export class ProfileComponent implements OnInit {
  studentDetails: any = null;
  teacherDetails: any = null;
  teachers: any = null;
  majors: any[] = [];
  rooms: any;
  studySessions: any;
  teacher_subjects: any[] = [];


  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private modal: NzModalService,
    private iconService: NzIconService,
    private notification: NzNotificationService
  ) {

    this.iconService.addIcon(
      UserOutline,

    );
  }

  filters = {
    student_id: '',
    exam_id: '1',
    subject_id: '',
    teacher_id: '',
    major_id: '1',
    generation: '16',
    batch: '3',
    group_student: '1',
    shift_name: ''
  };

  filters_only_student_id: string = ''; 



  selectedValuesubjects_id:any = null;



  listOfGroupOption: any[] = []; // Removed readonly, using any[]



  ngOnInit() {



  
  


  

    this.loadstudentDetails();
    this.loadteacherDetails();
    this.loadData()
    this.fetchStudySessions();
    // this.majors = this.majorss; // Reference the same array
    

    this.filters.major_id = this.studentDetails.major_id,
    this.filters.generation = this.studentDetails.generation,
    this.filters.batch = this.studentDetails.batch,
      this.filters.group_student = this.studentDetails.group_student,
      this.filters.shift_name = this.studentDetails.shift_name,

      
      
      this.filters_only_student_id = this.studentDetails.id.toString();






   

  }



  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  gotologin() {
    window.location.href = '/loginteacher';  // This will navigate to the /home route

  }




  teacherss: any[] = [];
  subjects: any[] = [];
  teacher_subjectss: any[] = [];
  selectedSubjectId: { [key: number]: number } = {};


  findMajor(majorId: number): any {
    const major = this.majors.find((m: { id: number; }) => m.id === majorId);
    return major || {
      major_name: 'Unknown',
      department_name: 'Unknown',
      Departments_id: 'Unknown'
    };
  }
  departments: any[] = [];
  findDepartment(departmentId: number): any {
    const department = this.departments.find((s) => s.id === departmentId);
    return department || null;  // Return department object or null if not found
  }




  
  selectAll = false;
  studySessions_1: any[] = [];
  teacherTeachingTimes: any[] = [];  
   checkIfSessionAssigned(sessionId: number): boolean {
    // Check if studySessions_1.id matches teacherTeachingTimes.session_id
    return this.teacherTeachingTimes.some(item => item.session_id === sessionId);
  }
  fetchTeacherTeachingTimes(): void {
    this.apiService.getTeacherTeachingTimes().subscribe(
      (response) => {
        this.teacherTeachingTimes = response.filter((item: { teacher_id: number }) => item.teacher_id === this.teacherDetails?.id);
      },
      (error) => {
        console.error('Error fetching teacher teaching times:', error);
      }
    );
  }
  fetchStudySessions(): void {
    this.fetchTeacherTeachingTimes();
    this.apiService.getStudySessions().subscribe(
      (response) => {
        this.studySessions_1 = response; 
        this.resetSelections(); 
      },
      (error) => {
        console.error('Error fetching study sessions:', error);
      }
    );
  }
  getSelectedStudySessionId(): number | null {
    const selectedSession = this.studySessions_1.find(session => session.selected);
    return selectedSession ? selectedSession.session_id : null; 
  }
  resetSelections(): void {
    this.studySessions_1.forEach(item => {
      item.selected = false;
    });
  }
  toggleAllSelection(): void {
    this.studySessions_1.forEach(item => {
      item.selected = this.selectAll;
    });
  }
  onStudySessionSelectionChange(): void {
    this.selectAll = this.studySessions_1.every(item => item.selected);
  }
  submitStudySessions(teacherId: number): void {
    const selectedSessions = this.studySessions_1.filter(item => item.selected);
    if (selectedSessions.length > 0) {
      const teacherTeachingTimes = selectedSessions.map(session => ({
        teacher_id: teacherId,  // Use the passed teacherId
        study_sessions_id: session.id  // Assuming session.id is the session's ID
      }));

      this.apiService.addTeacherTeachingTimes(teacherTeachingTimes).subscribe(
        (response) => {
          console.log('Study sessions added:', response);
          this.fetchStudySessions(); // Refresh the data to reflect the change

          this.notification.create('success', 'បានបញ្ជាក់', 'បានបញ្ជាក់មុខវិជ្ជាទៅគ្រូបង្រៀនបានជោគជ័យ។');
        },
        (error) => {
          console.error('Error adding study sessions:', error);
          this.notification.create('error', 'មានបញ្ហា', 'មិនអាចបញ្ជាក់វេលាទៅគ្រូបង្រៀនបានទេ។');
        }
      );
    } else {
      console.warn('No study sessions selected');
    }
  }
  submitDeleteStudySessions(teacherId: number): void {
    const selectedSessions = this.studySessions_1.filter(item => item.selected);
    if (selectedSessions.length > 0) {
      const teacherTeachingTimes = selectedSessions.map(session => ({
        teacher_id: teacherId,  // Use the passed teacherId
        study_sessions_id: session.id  // Assuming session.id is the session's ID
      }));
      console.log('Teacher ID:', teacherId);
      console.log('Formatted data for DELETE API:', teacherTeachingTimes);
      this.apiService.deleteTeacherTeachingTimes(teacherTeachingTimes).subscribe(
        (response) => {
          console.log('Study sessions deleted:', response);
          this.notification.create('success', 'បានលុប', 'បានលុបមុខវិជ្ជាទៅគ្រូបង្រៀនបានជោគជ័យ។');
          this.fetchStudySessions(); // Refresh the data to reflect the change
        },
        (error) => {
          console.error('Error deleting study sessions:', error);
          this.notification.create('error', 'មានបញ្ហា', 'មិនអាចលុបវេលាទៅគ្រូបង្រៀនបានទេ។');
        }
      );
    } else {
      console.warn('No study sessions selected');
    }
  }








  assignSubjectToTeacher(teacherId: number): void {
    this.apiService.assignSubjectToTeacher(teacherId, this.selectedValuesubjects_id).subscribe(
      (response) => {
        console.log('Subject assigned successfully:', response);
        // Optionally, show a success message or update the UI
        this.loadData()
        this.notification.create('success', 'បានបញ្ជាក់', 'បានបញ្ជាក់មុខវិជ្ជាទៅគ្រូបង្រៀនបានជោគជ័យ។');
        this.selectedSubjectId[teacherId] = 0; // Reset the selected subject ID
      },
      (error) => {
        this.notification.create('error', 'មានបញ្ហា', 'មិនអាចបញ្ជាក់មុខវិជ្ជាទៅគ្រូបង្រៀនបានទេ។');
        console.error('Error assigning subject to teacher:', error);
        // Handle error appropriately, maybe show an error message
      }
    );
  }
  removeSubjectFromTeachers(teacherId: number, subjectId: number): void {
    // Show confirmation modal before removing subject
    this.modal.confirm({
      nzTitle: 'Are you sure you want to remove this subject from the teacher?',
      nzContent: `Teacher ID: ${teacherId}, Subject ID: ${subjectId}`,
      nzOnOk: () => {
        // If confirmed, call API to delete the association
        this.apiService.deleteTeacherSubject(teacherId, subjectId).subscribe(
          response => {
            console.log('Teacher-Subject association deleted:', response);
            this.notification.create('success', 'បានបញ្ជាក់', 'បានបញ្ជាក់មុខវិជ្ជាទៅគ្រូបង្រៀនបានជោគជ័យ។');
            this.loadData(); // Refresh the data to reflect the change
          },
          error => {
            console.error('Error removing teacher-subject association:', error);
            this.notification.create('error', 'មានបញ្ហា', 'មិនអាចបញ្ជាក់មុខវិជ្ជាទៅគ្រូបង្រៀនបានទេ។');
          }
        );
      },
      nzOnCancel: () => {
        this.loadData(); // Refresh the data to reflect the change
        console.log('Operation cancelled');
      }
    });
  }
  removeSubjectFromTeacher(teacherId: number, subjectId: number): void {
    this.apiService.deleteTeacherSubject(teacherId, subjectId).subscribe(
      response => {
        this.notification.create('success', 'បានបញ្ជាក់', 'បានបញ្ជាក់មុខវិជ្ជាទៅគ្រូបង្រៀនបានជោគជ័យ។');
        console.log('Teacher-Subject association deleted:', response);
        this.loadData(); // Refresh the data to reflect the change
      },
      error => {
        console.error('Error removing teacher-subject association:', error);
      }
    );
  }

  findSubject(teacherId: number): { subject_name: string, id: number }[] {
    // Filter subjects based on teacher_id
    const teacherSubjects = this.teacher_subjects.filter((subject) => subject.teacher_id === teacherId);

    // If subjects found, return an array of objects with subject_name and id
    return teacherSubjects.length > 0
      ? teacherSubjects.map(subject => ({
        subject_name: subject.subject_name, id: subject.subject_id
      }))
      : [{
        subject_name: 'មិនទាន់មានមុខវិជ្ជាទេ។', id: -1
      }];
  }


  // Handle subject selection from the dropdown
  /*
  onSubjectSelect(event: any, teacherId: number): void {
    this.selectedSubjectId[teacherId] = +event.target.value; // Store the selected subject ID
  }

*/


  loadData(): void {
    // Fetch teachers
    // Fetch teachers
    this.apiService.getTeachers().subscribe(
      (response) => (this.teachers = response),
      (error) => console.error('Error loading teachers:', error)
    );

    this.apiService.getTeacherSubjects().subscribe(
      (response) => (this.teacher_subjects = response),
      (error) => console.error('Error loading teachers:', error)
    );


    this.apiService.getMajors().subscribe(
      (response) => {
        this.majors = response;
      },
      (error) => {
        console.error('Error loading subjects:', error);
      }
    );
  }


  load_subjects(batch?: string, faculties_id?: string): void {
    const params = [];
    if (batch) {
      params.push(`batch=${batch}`);
    }
    if (faculties_id) {
      params.push(`faculties_id=${faculties_id}`);
    }
    const queryString = params.length > 0 ? '?' + params.join('&') : '';
    this.apiService.get(`/subjects/filter1${queryString}`).subscribe((data) => {
      this.subjects = data;
    });
    setTimeout(() => {
      this.listOfGroupOption = this.subjects.map((subjects: any) => ({
        label: subjects.name,
        value: subjects.id,
        groupLabel: subjects.faculty_name
      }));
    }, 1110);

  }



  // Calculate year minus 2007
  getYearMinus2007() {
    const date = this.studentDetails.date_joined ? new Date(this.studentDetails.date_joined) : null;
    if (date) {
      return date.getFullYear() - 2007; // Subtract 2007 from the year
    }
    return 0;
  }

  getYear() {
    // Make sure that 'this.yyyynow' is a valid Date object.
    const currentDate = new Date(); // Get the current date
    return currentDate.getFullYear() - 2007; // Subtract 2007 from the current year
  }

  loadstudentDetails() {
    // Get student details from localStorage (or sessionStorage)
    const storedStudentDetails = localStorage.getItem('studentDetails');
    if (storedStudentDetails) {
      this.studentDetails = JSON.parse(storedStudentDetails);
    } else {
      // Handle the case if no student details are found in storage
      console.error("No student details found.");
    }
  }

  loadteacherDetails() {
    const storedTeacherDetails = localStorage.getItem('teacherDetails');
    if (storedTeacherDetails) {
      this.teacherDetails = JSON.parse(storedTeacherDetails);
    } else {
      // Handle the case if no student details are found in storage
      console.error("No student details found.");
    }
  }
}

