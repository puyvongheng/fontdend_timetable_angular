import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';
import { SharedModule } from '../shared/shared.module';
import { throwIfEmpty } from 'rxjs';


@Component({
  selector: 'app-timetable-a',
  imports: [
    SharedModule,
  ],
  templateUrl: './timetable-a.component.html',
  styleUrl: './timetable-a.component.css'
})
export class TimetableAComponent {
 timetables: any[] = []; // Array to hold timetable data
  teachers: any[] = []; // Array to hold teachers data
  majors: any[] = []; // Array to hold majors data
  rooms: any[] = []; // Array to hold rooms data
  studySessions: any[] = []; // Array to hold study sessions data
  isLoading: boolean = false; // Indicator for data loading
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


  isSaving = false;
  activeTab: number = 0; // Default to the first tab


 
 

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private NzMessageService: NzMessageService,
  ) { 

   

  }

  shouldHideDiv: boolean = false;

  ngOnInit(): void {
    this.loadData();
    this.load_option()
    const currentYear = new Date().getFullYear();
    this.filterYear = currentYear.toString(); // Assign current year as string
    this.route.queryParams.subscribe((params) => {
      this.filterTeacher = params['teacher'] || '';
      this.filterYear = params['year'] || '';
      this.filterBatch = params['batch'] || '';
      this.filterGeneration = params['generation'] || '';
      this.filterGroupStudent = params['group'] || '';
      this.filterSemester = params['semester'] || '';
      this.filterStudyShift = params['studyShift'] || '';
      this.filterMajorName = params['major'] || '';
      this.filterRoom = params['room'] || '';

      // Set flag to hide room filter if teacher param is present
      this.shouldHideDiv = !!params['year'];

    });
    this.loadTimetables();//simple timetable   all data 
    this.filterTimetables();
  }


  resetfillter() {
    this.filterDay = ''
    this.filterTeacher = ''
    this.filterBatch = ''
    this.filterGeneration = ''
    this.filterGroupStudent = ''
    this.filterSemester = ''
    this.filterYear = ''
    this.filterStudyShift = ''
    this.filterMajorName = ''
    this.filterRoom = ''
    this.timetables = []
    this.loadTimetables()
    this.filterTimetables() 
  }


 




  printPage() {
    window.print(); // Opens print dialog
  }






  filterTimetables(): void {
    this.isLoading = true;
    let filteredTimetables = this.timetables;
    console.log("Timetables array before grouping:", filteredTimetables); // Log timetables before grouping
    this.groupedTimetables = this.groupTimetablesByTimeAndDay(filteredTimetables);
    this.isLoading = false;
  }




  groupTimetablesByTimeAndDay(timetables: any[]): any[] {
    this.isLoading = true
    if (!timetables || timetables.length === 0) return []; // Handle empty input​​​ ​Saturday​ Sunday  "​Saturday​"

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
        group_student,
        batch,
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
      if (timeSlot[study_session_day]) {
        // If entry for this day already exists, add major name and group student to the Set
        timeSlot[study_session_day].major_name.add(major_name);
        timeSlot[study_session_day].group_students.add(group_student);
        timeSlot[study_session_day].batch = batch;  // Store the batch in the slot
      } else {

        // Add the entry under the corresponding day
        timeSlot[study_session_day] = {
          timeRange,
          subject_name,
          teacher_id,
          room_id,
          study_sessions_id,
          study_shift_name,
          generation,
          room_number,
          batch,
          major_name: new Set([major_name]), // Initialize with a Set to store unique values
          group_students: new Set([group_student]), // Initialize with a Set to store unique group names
          id,
        };
      }
    }
    );


    // Convert Set back to a string with '+' separator for major_name and group_students
    grouped.forEach(slot => {
      validDays.forEach(day => {
        if (slot[day]) {
          // Join major names with ' + ' for multiple entries
          if (slot[day].major_name) {
            slot[day].major_name = Array.from(slot[day].major_name).join(' + '); // Combine unique major names
          }
          // Join group students with ' + ' for multiple entries
          if (slot[day].group_students) {
            slot[day].group_students = Array.from(slot[day].group_students).join(' + '); // Combine unique group students
          }
        }
      });
    });


    // Optionally sort the grouped array by time for better presentation
    grouped.sort((a, b) => {
      const [aStart] = a.time.split(" - ");
      const [bStart] = b.time.split(" - ");
      return new Date(`1970/01/01 ${aStart}`).getTime() - new Date(`1970/01/01 ${bStart}`).getTime();
    });
    this.isLoading = false

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
 

    this.apiService.getRooms().subscribe(
      (response) => (this.rooms = response),
      (error) => console.error('Error loading rooms:', error)
    );


  }






  loadTimetables() {
    this.load_option()
    const years = this.filterYear; // Replace with actual value
    const semester = this.filterSemester; // Replace with actual value
    const teacherId = this.filterTeacher; // Replace with actual value
    const shiftName = this.filterStudyShift; // Optionally pass the shift name
    const groupStudent = this.filterGroupStudent; // Optionally pass the group student
    const majorId = this.filterMajorName; // Optionally pass the major ID
    const generation = this.filterGeneration; // Optionally pass the generation
    const roomId = this.filterRoom;
    this.apiService.getFilteredTimetable(years, semester, teacherId, shiftName, groupStudent, majorId, generation, roomId).subscribe(
      (response) => {
        this.timetables = response.timetable_entries || response;
        this.isLoading = false;
        this.filterTimetables()
      },
      (error) => {
        console.error('Error loading timetable data:', error);
        this.isLoading = false;
      }
    );
  }
  options: any = {}; // Declare as any, without the need for an interface
  load_option() {
    this.apiService.getOptions().subscribe(
      (response) => {
        this.options = response;
      },
      (error) => {
        console.error('err' ,error)
      }
    )
  }


  


  loadTimetablesgroup(): void {
    this.isLoading = true
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
        this.isLoading = true;
      }
    );
  }






  findRoom(roomId: number): any {
    return this.rooms.find((r) => r.id === roomId) || { room_type: 'Unknown', room_number: 'Unknown', floor: 'Unknown', capacity: 'Unknown' };
  }






  
  // Find subject name by ID
  findSubject(subjectId: number): string {
    const subject = this.majors.find((s) => s.id === subjectId);
    return subject ? subject.major_name : 'Unknown';
  }

  getMajorNameById(majorId: string | number): string {
    const major = this.options.major.find((m: { major_id: number }) => m.major_id === majorId);
    return major ? major.major_name : 'Unknown Major';
  }

  findTeacher(teacherId: string | number): string {
    const id = Number(teacherId);  // Convert to number if it's a string
    const teacher = this.options.teacher.find((t: { teacher_id: number }) => t.teacher_id === id);
    return teacher ? teacher.teacher_name : 'Unknown Teacher';
  }




}
