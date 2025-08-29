import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';
import { SharedModule } from '../shared/shared.module';
import { throwIfEmpty } from 'rxjs';


@Component({
  selector: 'app-timetables-public',
  imports: [
      SharedModule,
  
  ],
  templateUrl: './timetables-public.component.html',
  styleUrl: './timetables-public.component.css'
})
export class TimetablesPublicComponent {
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
      this.updateQrCode();
    });


    this.loadTimetables();//simple timetable   all data 
    this.filterTimetables();

    this.load_exams()
    this.loadteacherDetails()

  }


  teacherDetails: any; // Initialize teacherDetails
  loadteacherDetails() {
    const storedTeacherDetails = localStorage.getItem('teacherDetails');
    if (storedTeacherDetails) {
      this.teacherDetails = JSON.parse(storedTeacherDetails);
    } else {
      // Handle the case if no student details are found in storage
      console.error("No student details found.");
    }
  }



  Change() {

    this.loadTimetables();//simple timetable   all data 
    this.filterTimetables();
    this.updateQrCode();
  }


  exams:any[]=[]
  load_exams(): void{
    this.apiService.get('students/exams').subscribe(
      (response) => {
        this.exams = response.exams;

      },
      (error) => {
        console.error('errr')
        
      }
    )
    
  }

  getExamIdBySemesterYear(): number | null​ | string {
    const exam = this.exams.find(
      e => e.semester === this.filterSemester && e.year.toString() === this.filterYear
    );
    return exam ? exam.id : '';  // Return the id if found, otherwise return null
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





  onTabChange(index: number): void {
    this.activeTab = index;
    this.resetfillter()
  }
  getFacebookShareUrl(): string {
    const url = encodeURIComponent(this.generateDynamicUrl());
    return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  }
  getTelegramShareUrl(): string {
    const url = encodeURIComponent(this.generateDynamicUrl());
    return `https://t.me/share/url?url=${url}`;
  }
  copyQrUrl(): void {
    navigator.clipboard.writeText(this.generateDynamicUrl()).then(
      () => {

        this.NzMessageService.info('QR URL copied to clipboard!');
        // Close the modal programmatically (if `data-bs-dismiss="modal"` is not working dynamically)
        const closeModalButton = document.querySelector('.btn-close') as HTMLElement;
        closeModalButton?.click();
      },
      (err) => {
        console.error('Failed to copy QR URL:', err);
      }
    );
  }
  saveQrCodeImage(): void {
    this.isSaving = true;
    const qrCodeElement = document.querySelector('nz-qrcode');
    if (!qrCodeElement) {
      console.error('QR Code element not found.');
      this.isSaving = false;
      return;
    }
    const canvas = qrCodeElement.querySelector('canvas');
    if (!canvas) {
      console.error('QR Code canvas not found.');
      this.isSaving = false;
      return;
    }
    try {
      const imageData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imageData;
      link.download = `កាវិភាគឆ្នាំំ${this.filterYear || 'Default'} .png`;
      link.click();
      this.isSaving = false; // Reset loading state after saving
    } catch (error) {
      console.error('Error saving QR code image:', error);
      this.isSaving = false;
    }
  }

  generateDynamicUrl(): string {
    const queryParams: any = {};
    if (this.filterTeacher) queryParams.teacher = this.filterTeacher;
    if (this.filterYear) queryParams.year = this.filterYear;
    if (this.filterBatch) queryParams.batch = this.filterBatch;
    if (this.filterGeneration) queryParams.generation = this.filterGeneration;
    if (this.filterGroupStudent) queryParams.group = this.filterGroupStudent;
    if (this.filterSemester) queryParams.semester = this.filterSemester;
    if (this.filterStudyShift) queryParams.studyShift = this.filterStudyShift;
    if (this.filterMajorName) queryParams.major = this.filterMajorName;
    if (this.filterRoom) queryParams.room = this.filterRoom;
    const dynamicUrl = this.router.createUrlTree(['timetable_x'], { queryParams }).toString();


    //  const domain = 'http://localhost:4200'; // Replace with your actual domain

    const domain = window.location.origin;  // This gets the protocol (http or https) and domain (e.g., localhost:4200 or example.com)

    return domain + dynamicUrl;
  }
  qrCodeData: string = '';
  updateQrCode(): void {
    this.qrCodeData = this.generateDynamicUrl();
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

       
        major_id,
        group_student_list


    
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


        timeSlot[study_session_day].major_id.push(major_id); // ✅ Add to Set
        timeSlot[study_session_day].group_student_list.push(group_student_list); // ✅ Add to Set

    


  

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
          group_student,


          major_name: new Set([major_name]), // Initialize with a Set to store unique values
          group_students: new Set([group_student]), // Initialize with a Set to store unique group names
         

          id,




    
          major_id: [major_id],
          group_student_list: [group_student_list],


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
            slot[day].major_name =
              Array.from(slot[day].major_name).join(' + '); // Combine unique major names
          }


          // Join group students with ' + ' for multiple entries
          if (slot[day].group_students) {
            slot[day].group_students = Array.from(slot[day].group_students).join(' +'); // Combine unique group students
          }


          if (slot[day].major_id) {
            slot[day].major_id = Array.from(slot[day].major_id); // ✅ Keep as array
          }


          if (slot[day].group_student_list) {
            slot[day].group_student_list = Array.from(slot[day].group_student_list); // ✅ Keep as array
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
 
    // Fetch rooms
    this.apiService.getRooms().subscribe(
      (response) => (this.rooms = response),
      (error) => console.error('Error loading rooms:', error)
    );
  
  }




   groupInfo:any[]=[]


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

        this.groupInfo = response.info || []; // Store group info separately

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




/*
  findTeacher1(teacherId: number): string {
    const teacher = this.teachers.find((t) => t.id === teacherId);
    return teacher ? teacher.name : 'Unknown';
  }
  */
  // Find room details by ID

  findRoom(roomId: number): any {
    return this.rooms.find((r) => r.id === roomId) || { room_type: 'Unknown', room_number: 'Unknown', floor: 'Unknown', capacity: 'Unknown' };
  }






  /*
  findStudySession(sessionId: number): any | null {
    const session = this.studySessions.find((s) => s.id === sessionId);
    return session || null;
  }*/


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
