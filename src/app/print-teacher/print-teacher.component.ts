import { Component } from '@angular/core';

import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

import { SharedModule } from '../shared/shared.module';



@Component({
  selector: 'app-print-teacher',
  imports: [    SharedModule,
  ],
  templateUrl: './print-teacher.component.html',
 

  styleUrl: './print-teacher.component.css'
})
export class PrintTeacherComponent {



  timetableEntries: any[] = [];
  majors: any[] = [];
  studySessions: any[] = [];
  uniqueShiftNames: string[] = [];
  timetables: any[] = []; // Array to hold timetable data
  teachers: any[] = []; // Array to hold teachers data
  rooms: any[] = []; // Array to hold rooms data
  isLoading: boolean = true; // Indicator for data loading
  message: any; // Replace with a proper message service if needed


  filterDay: string = '';
  filterTeacher: string = '';
  filterBatch: string = '';
  filterGeneration: string = '';
  filterGroupStudent: string = '';
  filterSemester: string = '';
  filterYear: string = '';
  filterStudyShift: string = '';
  filterMajorName: string = '';
  filterRoom: string = '';


  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute,) { }



  ngOnInit(): void {
    this.isLoading = true;

    this.loadData();
    this.isLoading = true;
    this.loadTimetables();//simple timetable   all data 
    this.loadTimetablesgroup();//group time table 
    this.loadteacherDetails();

    this.filterTeacher = this.teacherDetails.name;

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = true;
      this.filterTimetables();

    }, 2000);

  }





  teacherDetails: any

  loadteacherDetails() {
    this.isLoading = true;
    const storedTeacherDetails = localStorage.getItem('teacherDetails');
    if (storedTeacherDetails) {
      this.teacherDetails = JSON.parse(storedTeacherDetails);
    } else {
      // Handle the case if no student details are found in storage
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
    this.isLoading = true;
    let filteredTimetables = this.timetables;
    //គ្រូរ
    if (this.filterTeacher) {
      filteredTimetables = filteredTimetables.filter(entry =>
        this.findTeacher(entry.teacher_id).toLowerCase().includes(this.filterTeacher.toLowerCase()));
    }
    //វេនសិក្សារ
    if (this.filterStudyShift) {
      filteredTimetables = filteredTimetables.filter(entry =>
        entry.study_shift_name.toLowerCase().includes(this.filterStudyShift.toLowerCase()));
    }
    //ឆ្នាំ
    if (this.filterBatch) {
      filteredTimetables = filteredTimetables.filter(entry => entry.batch.toString() === this.filterBatch);
    }
    // ជំនាន់
    if (this.filterGeneration) {
      filteredTimetables = filteredTimetables.filter(entry => entry.generation.toString() === this.filterGeneration);
    }
    // ក្រុម
    if (this.filterGroupStudent) {
      filteredTimetables = filteredTimetables.filter(entry => entry.group_student.toString() === this.filterGroupStudent);
    }
    // ឆមាស់
    if (this.filterSemester) {
      filteredTimetables = filteredTimetables.filter(entry => entry.semester.toString() === this.filterSemester);
    }

    // ឆ្មាំសិក្សារ
    if (this.filterYear) {
      filteredTimetables = filteredTimetables.filter(entry => entry.years.toString() === this.filterYear);
    }
    //ជំនាញ
    if (this.filterMajorName) {
      filteredTimetables = filteredTimetables.filter(entry => entry.major_name.toString() === this.filterMajorName);
    }
    // បន្ទប់
    if (this.filterRoom) {
      filteredTimetables = filteredTimetables.filter(entry => entry.room_number.toString() === this.filterRoom);
    }

    this.groupedTimetables = this.groupTimetablesByTimeAndDay(filteredTimetables);

    setTimeout(() => {
      this.isLoading = false;

    }, 1000);

  }


  groupTimetablesByTimeAndDay(timetables: any[]): any[] {
    this.isLoading = true;
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

      if (!validDays.includes(study_session_day)) return; // Skip invalid days

      const timeRange = `${session_time_start} - ${session_time_end} `;

      // Check if the time slot exists in the grouped array
      let timeSlot = grouped.find((slot) => slot.time === timeRange);

      if (!timeSlot) {
        // If not found, create a new time slot entry
        timeSlot = { time: timeRange };
        grouped.push(timeSlot);
      }

      // Add the entry under the corresponding day
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
  groupedTimetables: any[] = [];
  formatTime(time: string): string {
    const [hours, minutes] = time.split(':');
    const period = +hours >= 12 ? 'PM' : 'AM';
    const formattedHours = +hours > 12 ? +hours - 12 : +hours;
    return `${formattedHours}:${minutes} ${period}`;
  }







  // Load related data (teachers, majors, rooms, study sessions)
  loadData(): void {
    this.isLoading = true;
    // Fetch teachers
    this.apiService.getTeachers().subscribe(
      (response) => (this.teachers = response),
      (error) => console.error('Error loading teachers:', error)
    );
    // Fetch majors
    this.apiService.getMajors().subscribe(
      (response) => (this.majors = response),
      (error) => console.error('Error loading majors:', error)
    );

    // Fetch rooms
    this.apiService.getRooms().subscribe(
      (response) => (this.rooms = response),
      (error) => console.error('Error loading rooms:', error)
    );
    // Fetch study sessions
    this.apiService.get('study_sessions').subscribe(
      (response) => (this.studySessions = response),
      (error) => console.error('Error loading study sessions:', error)
    );

  }
  // Fetch all timetables  
  loadTimetables(): void {
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
    this.apiService.getTimetable().subscribe(
      (response) => {
        this.timetables = response.timetable_entries || response;
        this.isLoading = false;

        // Grouping by time and day
        this.groupedTimetables = this.groupTimetablesByTimeAndDay(this.timetables);
      },
      (error) => {
        console.error('Error loading timetables:', error);
        this.message?.error('Failed to load timetables');
        this.isLoading = false;
      }
    );
  }






  // Find teacher name by ID
  findTeacher(teacherId: number): string {
    const teacher = this.teachers.find((t) => t.id === teacherId);
    return teacher ? teacher.name : 'Unknown';
  }

  // Find room details by ID
  findRoom(roomId: number): any {
    return this.rooms.find((r) => r.id === roomId) || { room_type: 'Unknown', room_number: 'Unknown', floor: 'Unknown', capacity: 'Unknown' };
  }

  // Find study session details by ID
  findStudySession(sessionId: number): any | null {
    const session = this.studySessions.find((s) => s.id === sessionId);
    return session || null;
  }

  // Find subject name by ID
  findSubject(subjectId: number): string {
    const subject = this.majors.find((s) => s.id === subjectId);
    return subject ? subject.major_name : 'Unknown';
  }


  findMajor(majorId: number): any {
    const major = this.majors.find((m) => m.id === majorId);
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






}

