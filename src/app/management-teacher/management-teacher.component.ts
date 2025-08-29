import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

import { NzNotificationService } from 'ng-zorro-antd/notification';


import { NzTableSortFn, NzTableFilterFn, NzTableSortOrder, NzTableFilterList, NzTableModule } from 'ng-zorro-antd/table';


interface Teacher {
  id: number;
  name: string;
  username: string;
  role: string;
  number_sessions: number;
  totalTimetable: number;  // Optional property to store total timetable count

}
interface ColumnItem {

  name: string; 
  sortOrder: NzTableSortOrder | null; 
  sortFn: NzTableSortFn<Teacher> | null; 
  listOfFilter: NzTableFilterList; 
  filterFn: NzTableFilterFn<Teacher> | null; 
  filterMultiple: boolean; 
  sortDirections: NzTableSortOrder[];
}



import { NzCardModule } from 'ng-zorro-antd/card';
import { SharedModule } from '../shared/shared.module';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Table } from 'primeng/table';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-management-teacher',
  imports: [
    
        SharedModule,
    
  
  ],
  templateUrl: './management-teacher.component.html',
  styleUrl: './management-teacher.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line

})
  
  
export class ManagementTeacherComponent implements OnInit {
  listOfColumns: ColumnItem[] = [];
  listOfData: Teacher[] = [];
  filteredListOfData: Teacher[] = []; // Store filtered data
  searchValue: string = ''; // Store search value


  @ViewChild('dt') dt: Table | undefined;

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  




  visible = false;

 

  loadteachers(): void {
    this.apiService.getTeachers().subscribe(
      (response) => {
        this.teachers = response;  // Assign response to teachers
        this.listOfData = response;  // For original data
        this.filteredListOfData = [...this.listOfData];  // Make a copy for filtering purposes

        this.teachers.forEach(teacher => {
          const currentYear = this.selectedYear || new Date().getFullYear();
          const Semester = this.selectedSemester;

          this.getTotalTimetable(teacher.id, currentYear, Semester);
        });
      },
      (error) => {
        this.errorMessage = 'Error loading teachers.';
        console.error('Error loading teachers:', error);
      }
    );
  }




  loadTeachers(): void {
    this.loadteachers()
    this.apiService.getTeachers().subscribe(
      (response) => {
        this.teachers = response;  // Assign the response data to the teachers array
        this.teachers.forEach(teacher => {
          const currentYear = this.selectedYear || new Date().getFullYear();  // Get the selected year or current year
          const Semester = this.selectedSemester;  // Get the selected year or current year
   
          this.getTotalTimetable(teacher.id, currentYear, Semester);  // Call getTotalTimetable for each teacher with the selected year and semester

          // this.getTotalTimetable(teacher.id, currentYear, 1);  // Call getTotalTimetable for each teacher
        });
      },
      (error) => {
        this.errorMessage = 'Error loading teachers.';  // Handle the error gracefully
        console.error('Error loading teachers:', error);  // Log the error for debugging
      }
    );
  }




  initializeColumns(): void {
    this.listOfColumns = [
      {
        name: 'ID',
        sortOrder: null,
        sortFn: (a: Teacher, b: Teacher) => a.id - b.id,
        sortDirections: ['ascend', 'descend', null],
        listOfFilter: [],
        filterMultiple: true,
        filterFn: null,
      },
      {
        name: 'Name',
        sortOrder: null,
        sortFn: (a: Teacher, b: Teacher) => a.name.localeCompare(b.name),
        sortDirections: ['ascend', 'descend', null],
        listOfFilter: [],
        filterMultiple: true,
        filterFn: null,
      },
      {
        name: 'Username',
        sortOrder: null,
        sortFn: (a: Teacher, b: Teacher) => a.username.localeCompare(b.username),
        sortDirections: ['ascend', 'descend', null],
        listOfFilter: [],
        filterMultiple: true,
        filterFn: null,
      },
      {
        name: 'Role',
        sortOrder: null,
        sortFn: (a: Teacher, b: Teacher) => a.role.localeCompare(b.role),
        sortDirections: ['ascend', 'descend', null],
        listOfFilter: [],
        filterMultiple: true,
        filterFn: null,
      },
      {
        name: 'Number of Sessions',
        sortOrder: null,
        sortFn: (a: Teacher, b: Teacher) => a.number_sessions - b.number_sessions,
        sortDirections: ['ascend', 'descend', null],
        listOfFilter: [],
        filterMultiple: true,
        filterFn: null,
      },
   
   

    ];
  }

  search(): void {
    this.visible = false;
    this.filteredListOfData = this.listOfData.filter((item: Teacher) =>
      item.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  reset(): void {
    this.searchValue = '';
    this.filteredListOfData = [...this.listOfData]; // Reset to original data
  }



  ngOnInit(): void {
    this.loadTeachers();  // Load teachers on component initialization


    this.loadData();  // Load data on component initialization
    this.loadteachers();
    this.initializeColumns();

  }

  getStrokeColor(percent: number): any {
    if (isNaN(percent)) {
      return { from: '#FFFF00', to: '#FFFF00', direction: 'to right' }; // Yellow color for NaN
    } else if (percent > 100) {
      return { from: '#FF01B3FF', to: '#FF01B3FF', direction: 'to right' }; // Red color for >100%
    } else if (percent >= 50) {
      return { from: '#108ee9', to: '#2db7f5', direction: 'to right' }; // Gradient for 50%-100%
    } else {
      return { from: '#108ee9', to: '#2db7f5', direction: 'to right' }; // Gradient for <50%
    }
  }


  teachers: any[] = [];

  subjects: any[] = [];
  teacher_subjects: any[] = [];

  teacherForm: FormGroup;
  submissionSuccess: boolean = false;
  submissionError: string | null = null;
  isEditMode: boolean = false;  // Flag to toggle edit mode
  editedTeacherId: number | null = null;  // Store the teacher ID being edited

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private modal: NzModalService,
    
  ) {

    this.teacherForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      name: ['', Validators.required],
      password: ['', [Validators.required,]], // Apply custom validator here
      role: ['simple', Validators.required],
      number_sessions: ['', Validators.required],
    });

  }

  totalTimetable: number = 0;
  errorMessage: string = '';




  selectedYear: number= new Date().getFullYear();
  selectedSemester: number = 1;  // Default to first semester

  years: number[] = [2021, 2022, 2023, 2024,2025];  // Example: List of years
  semesters: number[] = [1, 2];  // Example: List of semesters (1 for first semester, 2 for second semester)

  // Method to load teachers from the API



  getTotalTimetable(teacherId: number, year: number, semester: number): void {
    this.apiService.get(`teachers/teacher/${teacherId}/total?year=${year}&semester=${semester}`).subscribe(
      (data) => {
        // Find the teacher and update their timetable count
        const teacher = this.teachers.find(t => t.id === teacherId);
        if (teacher) {
          teacher.totalTimetable = data.total_timetable;
        }
      },
      (error) => {
        console.error('Error fetching timetable data', error);
        // You can handle error more gracefully here if necessary
      }
    );
  }




  selectedSubjectId: { [key: number]: number } = {};


  // Handle subject selection from the dropdown
  onSubjectSelect(event: any, teacherId: number): void {
    this.selectedSubjectId[teacherId] = +event.target.value; // Store the selected subject ID
  }





  assignSubjectToTeacher(teacherId: number, subjectId: number): void {
    this.modal.confirm({
      nzTitle: 'Are you sure you want to assign this subject to the teacher?',
      nzContent: '<b style="color: red;">This action cannot be undone.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOnOk: () => {
        this.apiService.assignSubjectToTeacher(teacherId, subjectId).subscribe(
          () => {
            console.log(`Subject ${subjectId} assigned to Teacher ${teacherId} successfully.`);

            // Show success notification
            this.notification.success('ជោគជ័យ', 'មុខវិជ្ជាត្រូវបានបញ្ជាក់ទៅគ្រូបង្រៀនដោយជោគជ័យ។');

            // Reset selected subject ID before refreshing data
            this.selectedSubjectId[teacherId] = 0;

            // Refresh the UI
            this.loadData();
          },
          (error) => {
            console.error('Error assigning subject to teacher:', error);

            // Show error notification
            this.notification.error('បរាជ័យ', 'មិនអាចបញ្ជាក់មុខវិជ្ជាទៅគ្រូបង្រៀនបានទេ។');
          }
        );
      },
      nzCancelText: 'No',
      nzOnCancel: () => {
        console.log('Subject assignment cancelled.');
      },
    });
  }






  removeSubjectFromTeacher(teacherId: number, subjectId: number): void {
    this.modal.confirm({
      nzTitle: 'Are you sure you want to remove this subject from the teacher?',
      nzContent: '<b style="color: red;">This action cannot be undone.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.apiService.deleteTeacherSubject(teacherId, subjectId).subscribe(
          () => {
            this.notification.success('បានជោគជ័យ', 'មុខវិជ្ជាត្រូវបានដកចេញពីគ្រូបង្រៀនដោយជោគជ័យ។');
            console.log(`Teacher-Subject association (Teacher: ${teacherId}, Subject: ${subjectId}) deleted.`);
            this.loadData(); // Refresh the data to reflect the change
          },
          (error) => {
            console.error('Error removing teacher-subject association:', error);
            this.notification.error('បរាជ័យ', 'មុខវិជ្ជាមិនអាចដកចេញបានទេ។');
          }
        );
      },
      nzCancelText: 'No',
      nzOnCancel: () => {
        console.log('Subject removal cancelled');
      },
    });
  }





  // Load related data (teachers, majors, rooms, study sessions)
  loadData(): void {
    // Fetch teachers
    this.apiService.getTeachers().subscribe(
      (response) => (this.teachers = response
    
      ),
      (error) => console.error('Error loading teachers:', error)
    );

    this.apiService.getTeacherSubjects().subscribe(
      (response) => (this.teacher_subjects = response),
      (error) => console.error('Error loading teachers:', error)
    );

    this.load_subject()


  }

  load_subject() {
    this.apiService.getSubjects().subscribe(
      (response) => {
        this.subjects = response;
        this.loadlistOfGroupsubjects()
      },
      (error) => {
        console.error('Error loading subjects:', error);
      }
    );
  }


  subjectsGroup: any[] = []

  loadlistOfGroupsubjects() {
    setTimeout(() => {
      this.subjectsGroup = this.subjects.map((subjects: any) => ({
        label: subjects.name + '    ឆ្នាំទី :' + subjects.batch,
        value: subjects.id,
        groupLabel: subjects.faculty_name
      }));
    }, 1110);
  }







  Updaterole(teacherId: number, newRole: string): void {
    if (!['admin', 'simple'].includes(newRole)) {
      this.notification.warning('Warning', 'Invalid role selected.');
      return;
    }
    this.modal.confirm({
      nzTitle: `Are you sure you want to update the role to "${newRole}"?`,
      nzContent: '<b style="color: red;">This action cannot be undone.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOnOk: () => {
        this.apiService.updatrole('teachers', { id: teacherId, role: newRole }).subscribe({
          next: () => {
            this.notification.success('Success', 'Role updated successfully.');
            this.loadData(); // Reload data after updating
          },
          error: (err) => {
            console.error('Error updating role:', err);
            this.notification.error('Error', 'Failed to update role.');
          },
        });
      },
      nzCancelText: 'No',
      nzOnCancel: () => {
        console.log('Role update cancelled.');
      },
    });
  }





  deleteTeacher(id: number): void {
    this.modal.confirm({
      nzTitle: 'Are you sure you want to delete this teacher?',
      nzContent: '<b style="color: red;">This action cannot be undone.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        this.apiService.delete('teachers', id).subscribe(
          () => {
            this.notification.success('ជោគជ័យ', 'អ្នកបង្រៀនត្រូវបានលុបដោយជោគជ័យ!');

            // Reload teachers list after deletion
            this.loadData();
          },
          (error) => {
            console.error('Error deleting teacher:', error);
            this.notification.error('បរាជ័យ', 'ការលុបបានបរាជ័យ!');
          }
        );
      },
      nzCancelText: 'No',
      nzOnCancel: () => {
        console.log('Delete action cancelled');
      },
    });
  }






  isVisible2 = false;
  currentTeacherId: number | null = null;
  openEditModal(teacher?: any) {
    if (teacher) {
      console.log('🟢 Opening edit modal for:', teacher);  // Debugging
      this.isEditMode = true;
      this.editedTeacherId = teacher.id;  // ✅ Set ID correctly
      this.teacherForm.patchValue(teacher);
    } else {
      this.isEditMode = false;
      this.editedTeacherId = null;
      this.teacherForm.reset();
    }
    this.isVisible2 = true;
  }

closeModal() {
  this.teacherForm.reset();
  this.isVisible2 = false;
}
  cancelEdit() {
    this.isEditMode = false;
    this.teacherForm.reset({ role: 'simple' });  // Reset the form when cancelling
  }


  enableEditMode(teacherId: number, teacherData: any) {
    this.isEditMode = true;
    this.editedTeacherId = teacherId;
    this.teacherForm.setValue({
      username: teacherData.username,
      name: teacherData.name,
      password: teacherData.password, // Optionally leave the password empty to prompt change
      role: teacherData.role,
      number_sessions: teacherData.number_sessions,
    });
  }

  saveEdit(): void {
    if (!this.editedTeacherId || !this.teacherForm.valid) {
      this.notification.warning('Warning', ' ⚠️ មិនteacher');
      return;
    }
    this.isEditMode = false;
    this.isVisible2 = false;
    this.apiService.updateTeacher(this.editedTeacherId, this.teacherForm.value).subscribe({
      next: () => {
        this.loadData();
        this.notification.success('Success', 'Teacher updated successfully!');
        this.isEditMode = false;
        setTimeout(() => {
          this.teacherForm.reset();
        }, 300);
      },
      error: (error) => {
        console.error('❌ Error updating teacher:', error);
        this.notification.error('Error', 'Failed to update teacher. Please try again.');
      },
      complete: () => {
        this.isEditMode = false;
        this.isVisible2 = false;
          }
    });
  }



  // Method to generate random password (optional)
  generatePassword() {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '@$!%*?&#';
    const allChars = upperChars + lowerChars + numbers + specialChars;
    const passwordLength = 12;

    let password = '';

    // Ensure at least one character from each category
    password += upperChars[Math.floor(Math.random() * upperChars.length)];
    password += lowerChars[Math.floor(Math.random() * lowerChars.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Fill the rest of the password length with random characters
    for (let i = password.length; i < passwordLength; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    this.teacherForm.get('password')?.setValue(password);
  }

  onSubmit() {
    if (this.teacherForm.valid) {
      this.apiService.create('teachers', this.teacherForm.value).subscribe({
        next: (response) => {
          this.submissionSuccess = true;
          this.submissionError = null;
          this.isEditMode = false;
          this.isVisible2 = false;
          alert('Teacher updated successfully!');
          this.loadData() // Reload rooms after deletion
          this.teacherForm.reset();  // Optionally reset the form after submission
        },
        error: (error) => {
          this.submissionSuccess = false;
          alert('Error adding An error occurred, please try again!');
          this.submissionError = error.error?.error || 'An error occurred, please try again.';
        }
      });
    }
  }




  findSubjectName(subjectId: number): string {
    const subject = this.subjects.find((s) => s.id === subjectId);
    return subject ? subject.name : 'Unknown';
  }



  findSubject(teacherId: number): { subject_name: string, id: number }[] {
    // Filter subjects based on teacher_id
    const teacherSubjects = this.teacher_subjects.filter((subject) => subject.teacher_id === teacherId);

    // If subjects found, return an array of objects with subject_name and id
    return teacherSubjects.length > 0
      ? teacherSubjects.map(subject => ({
        subject_name: subject.subject_name, id: subject.subject_id
      }))
      : [{ subject_name: 'No subjects', id: 0 }];
  }






  table = [
    { name: 'Card', value: 'card' },
    { name: 'Table', value: 'tablepro' }
  ];
  
  view: 'card' | 'tablepro' = 'tablepro';  // Default view is 'table'

  toggleView(viewType:  'card' | 'tablepro'): void {
    this.view = viewType;  // Switch between 'table', 'card', and 'tablepro' views
  }


  

  isVisiblesubject = false;

  id_teacher: any; // Store the teacher ID

  showModalsubject(id: any): void {
    const id_teacher = id; // Get the teacher ID from the button click
    this.id_teacher = id_teacher; // Store the teacher ID in the component
    this.isVisiblesubject = true;
  }

  handleOksubject(): void {
    console.log('Button ok clicked!');
    this.isVisiblesubject = false;
  }

  handleCancelsubject(): void {
    console.log('Button cancel clicked!');
    this.isVisiblesubject = false;
  }











  isVisible_teacher_teaching_time = false;

  showModal_teacher_teaching_time(): void {
    this.isVisible_teacher_teaching_time = true;
    this.fetchStudySessions();
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible_teacher_teaching_time = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible_teacher_teaching_time = false;
  }





















  selectAll = false;
  studySessions_1: any[] = [];
  teacherTeachingTimes: any[] = [];

  selectedTeacherId: number | null = null;


  checkIfSessionAssigned(sessionId: number): boolean {
    // Check if studySessions_1.id matches teacherTeachingTimes.session_id
    return this.teacherTeachingTimes.some(item => item.session_id === sessionId);
  }

  fetchTeacherTeachingTimes(id: number): void {
    this.selectedTeacherId = id; // Store selected teacher ID
    this.apiService.getTeacherTeachingTimes().subscribe(
      (response) => {
        this.teacherTeachingTimes = response.filter((item: { teacher_id: number }) => item.teacher_id === id);
      },
      (error) => {
        console.error('Error fetching teacher teaching times:', error);
      }
    );
  }



  fetchStudySessions(): void {
    this.apiService.getStudySessions().subscribe(
      (response) => {
        this.studySessions_1 = response;
        this.resetSelections();
        this.restructureSessions(); // Call restructureSessions after fetching data
        this.groupSessions(); // Call groupSessions after fetching data
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
          this.fetchStudySessions();
          this.fetchTeacherTeachingTimes(teacherId); // Refresh assigned teaching times ✅


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
          this.fetchStudySessions();
          this.fetchTeacherTeachingTimes(teacherId); // Refresh assigned teaching times ✅

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









// group shift time 


  timeSlotSessions: any[] = []; // Array to hold restructured sessions for time-slot table
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // Array for day order for time-slot

  restructureSessions() {
    const timeSlotMap: Map<string, any> = new Map(); // Use a Map for efficient lookup

    for (const session of this.studySessions_1) { // Use studySessions here
      const timeSlot = `${session.session_time_start} - ${session.session_time_end}`;
      if (!timeSlotMap.has(timeSlot)) {
        timeSlotMap.set(timeSlot, {}); // Initialize time slot entry
      }

      const dayKey = session.sessions_day; // Use session day as key
      timeSlotMap.get(timeSlot)[dayKey] = session; // Store session under the day
    }

    // Convert Map to array for template iteration, maintaining time slot order
    this.timeSlotSessions = Array.from(timeSlotMap,
      ([timeSlot, days]) => ({

      timeSlot: timeSlot,
        days: days,
       
    }));

    // Sort time slots chronologically (optional, if needed)
    this.timeSlotSessions.sort((a, b) => {
      const timeA = a.timeSlot.split(' - ')[0]; // Get start time
      const timeB = b.timeSlot.split(' - ')[0];
      return timeA.localeCompare(timeB); // Compare start times as strings
    });

  }



  groupedSessions: Record<string, Record<string, any[]>> = {};  // Properly typed
  // Function to group sessions by shift_name and sessions_day
  // Function to group sessions by shift_name and sessions_day
  groupSessions() {
    this.groupedSessions = this.studySessions_1.reduce((acc, session) => {
      const { shift_name, sessions_day } = session;
      // Group by shift_name
      if (!acc[shift_name]) {
        acc[shift_name] = {};
      }
      // Group by sessions_day within each shift_name
      if (!acc[shift_name][sessions_day]) {
        acc[shift_name][sessions_day] = [];
      }
      acc[shift_name][sessions_day].push(session);
      return acc;
    }, {});  // Leave it as a plain object without any interface
  }



 












}
