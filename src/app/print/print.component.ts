import { Component, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';



import { SharedModule } from '../shared/shared.module';





@Component({
  selector: 'app-print',
  imports: [
       SharedModule,
   
  
  ],
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']  // Corrected typo from 'styleUrl' to 'styleUrls'
})
export class PrintComponent implements OnInit {


  studentDetails: any = null;

  timetableEntries: any[] = [];
  majors: any[] = [];
  studySessions: any[] = [];
  uniqueShiftNames: string[] = [];
  timetables: any[] = []; // Array to hold timetable data
  teachers: any[] = []; // Array to hold teachers data
  rooms: any[] = []; // Array to hold rooms data
  isLoading: boolean = false; // Indicator for data loading
  message: any; // Replace with a proper message service if needed

  filterDay: string = '';
  filterTeacher: string = '';
  filterBatch: string = '';
  filterGeneration: string = '';
  filterGroupStudent: string = '';
  filterSemester: string = '1';
  filterYear: string = '';
  filterStudyShift: string = '';
  filterMajorName: string = ' ';
  filterRoom: string = '';



  nextYear: string = ''; // Example: 2026

  authService: any;
  teacherDetails: any

  groupedTimetables: any[] = [];

  departments: any[] = [];

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.loadinguser();
    this.loadData();
    this.loadTimetables();
    this.loadTimetablesgroup();



    const currentYear = new Date().getFullYear();
    this.filterYear = currentYear.toString();
    this.filterGeneration = (this.getYearMinus2007()).toString();
    this.nextYear = (currentYear + 1).toString();
    console.log(`${this.filterYear}-${(Number(this.filterYear) + 1).toString()}`);
    this.filterTimetables();
    this.filterBatch = (this.getYear() + 1 - this.getYearMinus2007()).toString();
    this.updateFilterMajorName();
    this.filterStudyShift = this.studentDetails.shift_name
    this.filterMajorName = this.studentDetails.major_name
    this.filterGroupStudent = this.studentDetails.group_student.toString()


    setTimeout(() => {
      this.updateFilterMajorName()
      this.filterTimetables();
      this.isLoading = false;
    }, 2000);

  }


  updateFilterMajorName(): void {
    const majorDetails = this.findMajor(this.studentDetails.major_id);
    this.filterMajorName = majorDetails.major_name;
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



  loadinguser() {
    //សិស្ស
    const storedStudentDetails = localStorage.getItem('studentDetails');
    if (storedStudentDetails) {
      this.studentDetails = JSON.parse(storedStudentDetails);
    } else {
      console.error("No student details found.");
    }
    //គ្រូរ
    const storedTeacherDetails = localStorage.getItem('teacherDetails');
    if (storedTeacherDetails) {
      this.teacherDetails = JSON.parse(storedTeacherDetails);
    } else {
      console.error("No student details found.");
    }
  }



  get uniqueRoom() {
    const rooms = this.timetables.map(t => t.room_number);
    return [...new Set(rooms)];
  }
  get uniqueYears() {
    const years = this.timetables.map(t => t.years);
    return [...new Set(years)];
  }
  get uniqueStudyShifts() {
    const studyShifts = this.timetables.map(t => t.
      study_shift_name);
    return [...new Set(studyShifts)];
  }
  get uniqueGroupStudents() {
    const groupStudents = this.timetables.map(t => t.group_student);
    return [...new Set(groupStudents)];
  }
  get uniqueSemesters() {
    const semesters = this.timetables.map(t => t.semester);
    return [...new Set(semesters)];
  }
  get uniqueGenerations() {
    const generations = this.timetables.map(t => t.generation);
    return [...new Set(generations)];
  }
  get uniqueMajors() {
    const majors = this.timetables.map(t => t.major_name);
    return [...new Set(majors)];
  }
  get uniqueBatch() {
    const batches = this.timetables.map(t => t.batch);
    return [...new Set(batches)];
  }
  get uniqueTeachers() {
    const teacherIds = [...new Set(this.timetables.map(t => t.teacher_id))];
    return teacherIds.map(id => ({
      id,
      name: this.findTeacher(id),
    }));
  }


  filterTimetables(): void {
    let filteredTimetables = this.timetables;

    //គ្រូរ
    if (this.filterTeacher) {
      filteredTimetables = filteredTimetables.filter(entry =>
        this.findTeacher(entry.teacher_id).toLowerCase().includes(this.filterTeacher.toLowerCase()));
    }
    // វេនសិស្សារ
    if (this.filterStudyShift) {
      filteredTimetables = filteredTimetables.filter(entry =>
        entry.study_shift_name.toLowerCase().includes(this.filterStudyShift.toLowerCase()));
    }
    // ឆ្នាំំទី៣
    if (this.filterBatch) {
      filteredTimetables = filteredTimetables.filter(entry => entry.batch.toString() === this.filterBatch);
    }
    // ជំនាន់១៦
    if (this.filterGeneration) {
      filteredTimetables = filteredTimetables.filter(entry => entry.generation.toString() === this.filterGeneration);
    }
    // ក្រុមទី១
    if (this.filterGroupStudent) {
      filteredTimetables = filteredTimetables.filter(entry => entry.group_student.toString() === this.filterGroupStudent);
    }
    // ឆមាសទី១
    if (this.filterSemester) {
      filteredTimetables = filteredTimetables.filter(entry => entry.semester.toString() === this.filterSemester);
    }
    // ឆ្នាំសិក្សារ២០២៥
    if (this.filterYear) {
      filteredTimetables = filteredTimetables.filter(entry => entry.years.toString() === this.filterYear);
    }
    //ជំនាញ  IT
    if (this.filterMajorName) {
      filteredTimetables = filteredTimetables.filter(entry => entry.major_name.toString() === this.filterMajorName);
    }
    //បន្តប់
    if (this.filterRoom) {
      filteredTimetables = filteredTimetables.filter(entry => entry.room_number.toString() === this.filterRoom);
    }

    this.groupedTimetables = this.groupTimetablesByTimeAndDay(filteredTimetables);
  }


  groupTimetablesByTimeAndDay(timetables: any[]): any[] {
    //this.isLoading = true;

    if (!timetables || timetables.length === 0) return [];

    const validDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const grouped: any[] = [];

    timetables.forEach((entry) => {
      const {
        session_time_start,
        session_time_end,
        study_session_day,
        study_sessions_id,
        study_shift_name,
        subject_name,
        teacher_id,
        room_id,
        room_number,
        id,
        major_name,
        generation,
        batch,
        group_student,

      } = entry;

      if (!validDays.includes(study_session_day)) return;

      const timeRange = `${session_time_start} - ${session_time_end} `;

      let timeSlot = grouped.find((slot) => slot.time === timeRange);

      if (!timeSlot) {
        timeSlot = { time: timeRange };
        grouped.push(timeSlot);
      }

      timeSlot[study_session_day] = {
        subject_name,
        teacher_id,
        room_id,
        study_sessions_id,
        study_shift_name,
        generation,
        room_number,
        batch,
        major_name,
        id,
        group_student,
      };
    });

    grouped.sort((a, b) => {
      const [aStart] = a.time.split(" - ");
      const [bStart] = b.time.split(" - ");
      return new Date(`1970/01/01 ${aStart}`).getTime() - new Date(`1970/01/01 ${bStart}`).getTime();
    });

    return grouped;


  }









  loadData(): void {
    this.isLoading = true;
    // គ្រូរ
    this.apiService.getTeachers().subscribe(
      (response) => (this.teachers = response),
      (error) => console.error('Error loading teachers:', error)
    );
    // ជំនាញ
    this.apiService.getMajors().subscribe(
      (response) => (this.majors = response),
      (error) => console.error('Error loading majors:', error)
    );
    // បន្ទប់
    this.apiService.getRooms().subscribe(
      (response) => (this.rooms = response),
      (error) => console.error('Error loading rooms:', error)
    );
    // វេនសិក្សារ
    this.apiService.getStudySessions().subscribe(
      (response) => (this.studySessions = response),
      (error) => console.error('Error loading study sessions:', error)
    );
  }

  loadTimetables(): void {
    this.isLoading = true;
    //កាវិភាគ
    this.apiService.getTimetable().subscribe(
      (response) => {
        this.timetables = response.timetable_entries || response;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading timetables:', error);
        this.message?.error('Failed to load timetables');
        this.isLoading = false;
      }
    );
  }

  loadTimetablesgroup(): void {
    this.isLoading = true;
    this.apiService.get('timetable').subscribe(
      (response) => {
        this.timetables = response.timetable_entries || response;
        this.isLoading = false;
        this.groupedTimetables = this.groupTimetablesByTimeAndDay(this.timetables);
      },
      (error) => {
        console.error('Error loading timetables:', error);
        this.message?.error('Failed to load timetables');
        this.isLoading = false;
      }
    );

  }

  // id គ្រូ show  ឈ្មោះគ្រូរ
  findTeacher(teacherId: number): string {
    const teacher = this.teachers.find((t) => t.id === teacherId);
    return teacher ? teacher.name : 'Unknown';
  }
  // បន្ទប់
  findRoom(roomId: number): any {
    return this.rooms.find((r) => r.id === roomId) || { room_type: 'Unknown', room_number: 'Unknown', floor: 'Unknown', capacity: 'Unknown' };
  }
  // វេនសិក្សារ
  findStudySession(sessionId: number): any | null {
    const session = this.studySessions.find((s) => s.id === sessionId);
    return session || null;
  }
  //មុខវិជ្ជា
  findSubject(subjectId: number): string {
    const subject = this.majors.find((s) => s.id === subjectId);
    return subject ? subject.major_name : 'Unknown';
  }
  //ជំនាញ
  findMajor(majorId: number): any {
    const major = this.majors.find((m) => m.id === majorId);
    return major || {
      major_name: 'Unknown',
      department_name: 'Unknown',
      Departments_id: 'Unknown'
    };
  }
  //ដេប៉ាត់តេម៉ង់
  findDepartment(departmentId: number): any {
    const department = this.departments.find((s) => s.id === departmentId);
    return department || null;  // Return department object or null if not found
  }

}





