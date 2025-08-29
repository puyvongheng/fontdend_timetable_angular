import { map } from 'rxjs';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';

import {  ActivatedRoute, Router,  } from '@angular/router';

import {  NzIconService } from 'ng-zorro-antd/icon';

import { ArrowLeftOutline, BackwardOutline, DeleteOutline, DownloadOutline, EditOutline, HomeOutline, InsertRowAboveOutline, PieChartOutline, PlusOutline, RetweetOutline, SolutionOutline, UserOutline } from '@ant-design/icons-angular/icons';

import {  NzModalService } from 'ng-zorro-antd/modal';

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SharedModule } from '../shared/shared.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TimetableService } from '../service/timetable.service';
import { CreateTimetableComponent } from "../create-timetable/create-timetable.component";



@Component({
  selector: 'app-timetables',
  imports: [
    SharedModule,
    NzButtonModule,
    NzModalModule,
    CreateTimetableComponent,
    

  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Allow custom elements in the template

  templateUrl: './timetables.component.html',
  styleUrls: ['./timetables.component.css'],
})
export class TimetablesComponent implements OnInit {

  // data 
  timetables: any[] = []; // Array to hold timetable data
  teachers: any[] = []; // Array to hold teachers data
  majors: any[] = []; // Array to hold majors data
  rooms: any[] = []; // Array to hold rooms data
  subjects: any[] = []; // Array to hold subjects data  
  studySessions: any[] = []; // Array to hold study sessions data


  teacher_subjects: any[] = []; // Array to hold teacher-subject relations

  // ui alet and loading
  isLoading: boolean = false; // Indicator for data loading
  message: any; // Replace with a proper message service if needed


  // css
  colors: string ='#FF0FAFFF'


  //filter 
  filterTeacher: string = '';
  filterBatch: string = '';
  filterGeneration: string = '';
  filterGroupStudent: string = '';
  filterSemester: string = '';
  filterYear: string = '';
  filterStudyShift: string = '';
  filterMajorName: string = '';
  filterRoom: string = '';

  filterSubjectId: number | null = null;

 

  constructor(
    private apiService: ApiService,
    private iconService: NzIconService,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.iconService.addIcon(
      UserOutline,
      HomeOutline,
      PieChartOutline,
      InsertRowAboveOutline,
      PlusOutline,
      SolutionOutline,
      DeleteOutline,
      EditOutline,
      BackwardOutline,
      ArrowLeftOutline,
      RetweetOutline,
      DownloadOutline
    );

  }




  isVisible = false;
  isConfirmLoading = false;
  // Store the input values for modal
  modalInputTime: string | null = null;
  modalInputDay: string | null = null;

  study_sessions_id: string | null = null;

  // no
  room_id: string | null = null;  
  major_id: string | null = null;
  teacher_id: string | null = null;
  

  
    // Update the timetable form with the correct data
   timetableForm = {
    note: '1',
    study_sessions_id: '1', // Add the session ID
    years: '',
    semester: '',
    teacher_id: '',
    room_id: '',
    subject_id: '', // Correctly assign subject_id
    major_id: '',
    generation: '',
    group_student: '',
    batch: '',
};

  showPart: boolean = true;  // Initially, the part you want to hide or show is visible.

  showModalfalse(): void {
  
    this.showPart = false;  // Change this based on the condition to hide or show
  }
  showModaltrue(): void {

    this.showPart = true;  // Change this based on the condition to hide or show
  }


  loading_download: boolean = false; // Loading state for download button

  downloadTimetable(): void {
    this.loading_download = true; // Set loading state to true
    this.apiService.getd('timetable/downloade').subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/zip' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Timetable_Files.zip'; // File name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        this.loading_download = false; // Reset loading state after download
      },
      (error) =>

        console.error('Error downloading the timetable:', error),

    );
  }


  show_filter = false;

  toggleSection() {
    this.show_filter = !this.show_filter;
  }






  
  addnew() {
    this.isVisible = true;

    this.timetableForm = {
      note: '1',
      study_sessions_id: "",  // Add the session ID here
      years: this.filterYear,
      semester: this.filterSemester,
      teacher_id: this.filterTeacher,
      room_id: this.filterRoom,
      subject_id: '', // Correctly assign subject_id
      major_id: this.filterMajorName,
      generation: this.filterGeneration,
      group_student: this.filterGroupStudent,
      batch: this.filterBatch,
    };
    
  }
  // Show modal with inputTime and inputDay
  showModal(inputTime: string, inputDay: string): void {
    this.modalInputTime = inputTime;  // Store the inputTime
    this.modalInputDay = inputDay;    // Store the inputDay
    this.isVisible = true;            // Show the modal

    //តាង sessionData= funtion find ( បញ្ចូល inputTime និង inputDay)
    const sessionData = this.findStudySessiona2(this.modalInputTime!, this.modalInputDay!);

    let studySessionsId = ''; // Default value in case no session is found
    if (sessionData) {
      studySessionsId = sessionData.id; // Use the found session's ID
    }

    /*
    this.timetableForm = {
      note: '1',

      study_sessions_id: studySessionsId,  
      years: this.filterYear,

      semester: this.filterSemester,

      teacher_id: this.filterTeacher,

      room_id: this.filterRoom,

      subject_id: '',

      major_id: this.findMajorId(this.filterMajorName), 
      generation: this.filterGeneration,
      group_student: this.filterGroupStudent,
      batch: this.filterBatch,
    };*/

    this.timetableForm = {
      note: '1',
      study_sessions_id: studySessionsId,  
      years: this.filterYear,
      semester: this.filterSemester,
      teacher_id: this.filterTeacher,
      room_id: this.filterRoom,
      subject_id: '', // Correctly assign subject_id
      major_id: this.filterMajorName,
      generation: this.filterGeneration,
      group_student: this.filterGroupStudent,
      batch: this.filterBatch,
    };

  }

  

  handleOk(): void {
    this.isConfirmLoading = true;
    this.loadData();
    this.loadTimetables();//simple timetable   all data 
    this.filterTimetables();
    setTimeout(() => {
      this.isConfirmLoading = false;
      this.isVisible = false;
      this.filterTimetables();
    }, 1000);

  }






  // Function to find id study_sessions_id
  findStudySessiona2(inputTime: string, inputDay: string): any | null {
    const [inputStartTime, inputEndTime] = inputTime.split(" - ");
    const inputStartDate = this.convertTimeToDate(inputStartTime);
    const inputEndDate = this.convertTimeToDate(inputEndTime);
    // Find the session matching the input day and time range
    const session = this.studySessions.find((entry) => {
      const sessionStartDate = this.convertTimeToDate(entry.session_time_start);
      const sessionEndDate = this.convertTimeToDate(entry.session_time_end);

      return (
        entry.sessions_day.toLowerCase() === inputDay.toLowerCase() &&
        ((inputStartDate >= sessionStartDate && inputStartDate < sessionEndDate) ||
          (inputEndDate > sessionStartDate && inputEndDate <= sessionEndDate))
      );
    });

    // If a session is found, return the session; otherwise, return null
    return session ? session : null;
  }


  findMajorId(majorName?: string): string {
    // Use the provided majorName or fallback to this.filterMajorName
    const searchName = majorName ? majorName.toLowerCase() : this.filterMajorName.toLowerCase();
    // Find the major where major_name matches searchName
    const major = this.majors.find((entry) => entry.major_name.toLowerCase() === searchName);
    // Return the major_id as a string if found, otherwise return an empty string
    return major ? String(major.id) : '';
  }


  handleCancel(): void {
    this.isVisible = false;

    this.loadData();
    this.loadTimetables();//simple timetable   all data 
    this.filterTimetables();


  }
  



  
  onBack(): void {
    window.history.back();
  }



  filterShiftName: string = ''; // For input shift name
  filterTime: string = ''; // For input time
  foundSession: any | null = null; // To store found session



// Helper function to convert time string to Date object
convertTimeToDate(time: string): Date {
  const [hours, minutes, seconds] = time.split(":");
  const date = new Date();
  date.setHours(parseInt(hours, 10), parseInt(minutes, 10), parseInt(seconds, 10), 0);
  return date;
}



  // Find Study Session based on time range and day
  findStudySessiona(inputTime: string, inputDay: string): void {
    const [inputStartTime, inputEndTime] = inputTime.split(" - ");
    const inputStartDate = this.convertTimeToDate(inputStartTime);
    const inputEndDate = this.convertTimeToDate(inputEndTime);
    const session = this.studySessions.find((entry) => {
      const sessionStartDate = this.convertTimeToDate(entry.session_time_start);
      const sessionEndDate = this.convertTimeToDate(entry.session_time_end);
      return (
        entry.sessions_day.toLowerCase() === inputDay.toLowerCase() &&
        ((inputStartDate >= sessionStartDate && inputStartDate < sessionEndDate) ||
          (inputEndDate > sessionStartDate && inputEndDate <= sessionEndDate))
      );
    });
    if (session) {


      // Display alert with session details

      return session.id;


    //  alert(`Found Session: \nID: ${session.id}\nShift Name: ${session.shift_name}\nTime: ${session.session_time_start} - ${session.session_time_end}`);
    } else {

      alert('No matching session found!');
    }
  }









  clearQueryParams(): void {
  
    this.router.navigate([], { replaceUrl: true });

  }

  ngOnInit(): void {


    this.activatedRoute.queryParams.subscribe((params) => {
      this.filterBatch = params['batch'] || '';
      this.filterGeneration = params['generation'] || '';
      this.filterGroupStudent = params['group'] || '';
      this.filterSemester = params['semester'] || '';
      this.filterYear = params['year'] ? params['year'].toString() : '';  // Ensure it's a string
      this.filterStudyShift = params['studyShift'] || '';
      this.filterMajorName = params['major'] || '';
      this.filterRoom = params['room'] || '';
    });



 


  



    // Automatically populate filters from URL query parameters









    this.loadData();
    this.loadTimetables();//simple timetable   all data 
    //  this.loadTimetablesgroup();//group time table 
  
 
 



  }
  goBack() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      console.log('No history available, cannot go back.');
    }
  }





  clearFilters(): void {
    this.filterTeacher = '';
    this.filterBatch = '';
    this.filterGeneration = '';
    this.filterGroupStudent = '';
    this.filterSemester = '';
    this.filterYear = '';
    this.filterStudyShift = '';
    this.filterMajorName = '';
    this.filterRoom = '';
    sessionStorage.removeItem('timetableFilters');
    this.filterTimetables();
  }


















  // Method to filter timetables based on the filter criteria
  filterTimetables1(): void {
    this.isLoading = true
    this.isLoadingupdate = true
    let filteredTimetables = this.timetables;
    if (this.filterTeacher) {
      filteredTimetables = filteredTimetables.filter(entry =>
        this.findTeacher(entry.teacher_id).toLowerCase().includes(this.filterTeacher.toLowerCase()));
    }
    // Filter by study shift name

    if (this.filterStudyShift && this.filterStudyShift !== 'All') {
      filteredTimetables = filteredTimetables.filter(entry =>
        entry.study_shift_name.toLowerCase().includes(this.filterStudyShift.toLowerCase())
      );
    }


    if ( this.filterStudyShift === 'All') {
      this.filterStudyShift = '';
    }
 




    // Filter based on batch
    if (this.filterBatch) {
      filteredTimetables = filteredTimetables.filter(entry => entry.batch.toString() === this.filterBatch);
    }
    // Filter based on generation
    if (this.filterGeneration) {
      filteredTimetables = filteredTimetables.filter(entry => entry.generation.toString() === this.filterGeneration);
    }
    // Filter based on group_student
    if (this.filterGroupStudent) {
      filteredTimetables = filteredTimetables.filter(entry => entry.group_student.toString() === this.filterGroupStudent);
    }
    // Filter based on semester
    if (this.filterSemester) {
      filteredTimetables = filteredTimetables.filter(entry => entry.semester.toString() === this.filterSemester);
    }

    // Filter based on year
    if (this.filterYear) {
      filteredTimetables = filteredTimetables.filter(entry => entry.years.toString() === this.filterYear);
    }

    // Filter based on major_name
    if (this.filterRoom) {
      filteredTimetables = filteredTimetables.filter(entry => entry.room_number.toString() === this.filterRoom);
    }

    if (this.filterMajorName) {
      filteredTimetables = filteredTimetables.filter(entry => entry.major_name.toString() === this.filterMajorName);
    }

    // Group by time and day after filtering
    this.groupedTimetables = this.groupTimetablesByTimeAndDay(filteredTimetables);
    this.isLoading = false
    this.isLoadingupdate = false

  }


  filterTimetables(): void {
    this.isLoading = true;
    let filteredTimetables = this.timetables;
    console.log("Timetables array before grouping:", filteredTimetables); // Log timetables before grouping
    this.groupedTimetables = this.groupTimetablesByTimeAndDay(filteredTimetables);
    this.isLoading = false;
  }

  Change() {
    this.isLoading = true;

    setTimeout(() => {
      this.loadTimetables()
      this.filterTimetables()
      this.isLoading = false;

    }, 1000);

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
    // Fetch teachers
    this.apiService.teacher_subjects().subscribe(
      (response) => (this.teacher_subjects = response),
      (error) => console.error('Error loading teachers:', error)
    );
    this.apiService.getSubjects().subscribe(
      (response) => (this.subjects = response),
      (error) => console.error('Error loading teachers:', error)
    );
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
    this.apiService.getStudySessions().subscribe(
      (response) => (this.studySessions = response),
      (error) => console.error('Error loading study sessions:', error)
    );


  }



  // Fetch all timetables  
  loadTimetables1(): void {
    this.isLoading = true
    this.apiService.getTimetable().subscribe(
      (response) => {
        this.timetables = response.timetable_entries || response;
        this.isLoading = false;
        this.filterTimetables()
      },
      (error) => {
        console.error('Error loading timetables:', error);
        this.message?.error('Failed to load timetables');
        this.isLoading = false;
      }
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
        console.error('err', error)
      }
    )
  }



  loadTimetablesgroup(): void {
    this.isLoading = true
    this.apiService.get('timetable').subscribe(
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




  // Find teacher name by ID
  findTeacher(teacherId: number): string {
    const teacher = this.teachers.find((t) => t.id === teacherId);
    return teacher ? teacher.name : 'Unknown';
  }
  // Find room details by ID
  findRoom(roomId: number): any {
    return this.rooms.find((r) => r.id === roomId) || { room_type: 'Unknown', room_number: 'Unknown', floor: 'Unknown', capacity: 'Unknown' };
  }


  findStudySession(sessionId: number): any | null {
    const session = this.studySessions.find((s) => s.id === sessionId);
    return session || null;
  }


  // Find subject name by ID
  findSubject(subjectId: number): string {
    const subject = this.majors.find((s) => s.id === subjectId);
    return subject ? subject.major_name : 'Unknown';
  }











  


  selectedEntries: any[] = [];


  onClose(index: number) {
    this.selectedEntries.splice(index, 1);
  }

  isMondayIdInSelectedEntries(Id: number): boolean {
    // Check if there are more than 2 selected entries and if the provided Id does not match any entry.id
    if (this.selectedEntries.length ) {
      return !this.selectedEntries.some(entry => entry?.id === Id);  // Disable if entryId is not equal to Id
    }
    return false;  
  }


  toggleSelection(entry: any, day: string) {
    // Toggle selection of a timetable entry
    const index = this.selectedEntries.findIndex((e) => e.id === entry.id);
    if (index > -1) {
      this.selectedEntries.splice(index, 1);

    } else if (this.selectedEntries.length < 2) {

      this.selectedEntries.push({ ...entry, day });

    }
  }

  swapTeachers() {
    if (this.selectedEntries.length !== 2) return;
    const [entry1, entry2] = this.selectedEntries;
    this.apiService.swapTeachers(entry1.id, entry2.id).subscribe(
      (response) => {


        this.notification.success('ជោគជ័យ', response.message || 'ជោគជ័យ');


        [entry1.teacher_id, entry2.teacher_id] = [entry2.teacher_id, entry1.teacher_id];
        [entry1.subject_name, entry2.subject_name] = [entry2.subject_name, entry1.subject_name];

        this.groupedTimetables = [...this.groupedTimetables];
        this.selectedEntries = [];
        this.loadTimetables()
        setTimeout(() => {
          this.filterTimetables();
        }, 5000);
        
      },
      (error) => {
        const errorMessage = error.error?.error || 'មានបញ្ហាក្នុងការផ្លាស់ប្តូរ';
        this.notification.error('❌ បរាជ័យ', `❌ ${errorMessage}`);

      }
    );
  }

  swaprooms() {
    if (this.selectedEntries.length !== 2) return;
    const [entry1, entry2] = this.selectedEntries;
    this.apiService.swaprooms(entry1.id, entry2.id).subscribe(
      (response) => {
        this.notification.success(
          'ជោគជ័យ',
          'ជោគជ័យ! '
        );
        [entry1.teacher_id, entry2.teacher_id] = [entry2.teacher_id, entry1.teacher_id];
        [entry1.subject_name, entry2.subject_name] = [entry2.subject_name, entry1.subject_name];

        this.groupedTimetables = [...this.groupedTimetables];
        this.selectedEntries = [];
        this.loadTimetables()

        setTimeout(() => {
          this.filterTimetables();
        }, 5000);

      },
      (error) => {
        const errorMessage = error.error?.error || 'មានបញ្ហាក្នុងការផ្លាស់ប្តូរ';
        this.notification.error('❌ បរាជ័យ', `❌ ${errorMessage}`);
       

      }
    );
  }



  selectedRoomId: number | null = null; // Store the selected room ID


  assignRoom() {
    if (this.selectedEntries.length !== 1) {
      this.notification.warning('⚠️ ជ្រើសរើស', 'សូមជ្រើសរើស वेळा वेळा (Timetable) តែមួយគត់'); // Use warning for incorrect selection
      return;
    }
    const selectedEntry = this.selectedEntries[0];

    // Assuming you have a way to get the new room ID (e.g., from a modal, dropdown, etc.)
    const newRoomId = prompt("សូមបញ្ចូលលេខបន្ទប់ថ្មី (Enter new room ID):"); // Simple prompt for demonstration.  Use a modal in a real app!

    if (!newRoomId) {
      this.notification.info(" ", 'អ្នកបានបោះបង់ចោល');
      return; // User cancelled
    }

    const roomId = parseInt(newRoomId, 10); // Convert to number
    if (isNaN(roomId)) {
      this.notification.error("❌ ទិន្នន័យមិនត្រឹមត្រូវ", 'លេខបន្ទប់មិនត្រឹមត្រូវ');
      return;
    }

    this.apiService.assignRoom(selectedEntry.id, roomId).subscribe(
      (response) => {
        this.notification.success('ជោគជ័យ', response.message || 'បន្ទប់ត្រូវបានកំណត់');
        this.selectedEntries = [];
        this.loadTimetables(); // Reload after successful assignment
        setTimeout(() => {
          this.filterTimetables();
        }, 500);  // Removed extra delay.  5 seconds is too long
      },
      (error) => {
        const errorMessage = error.error?.error || 'មានបញ្ហាក្នុងការកំណត់បន្ទប់';
        this.notification.error('❌ បរាជ័យ', `❌ ${errorMessage}`);
      }
    );
  }












  // delet

  isLoadingupdate: boolean = false;

  deleteTimetable(id: number): void {
    // Show Ant Design modal for confirmation
    this.modal.confirm({
      nzTitle: 'Are you sure you want to delete this ?',
      nzContent: '<b style="color: red;">     .</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        // Delete timetable when user confirms
        this.apiService.delete('timetable', id).subscribe(
          () => {
            this.isLoadingupdate = true
            this.loadTimetables()
            this.loadTimetablesgroup()
            setTimeout(() => {
              this.filterTimetables();
              this.isLoadingupdate = false
            }, 1000); // 1 seconds delay
            this.notification.success(
              'ជោគជ័យ',
              'បានdeleteដោយជោគជ័យ! '
            );


            // Show success message
          },
          (error) => {
            this.isLoadingupdate = false

            this.notification.error(
              'បារាជ័យជោគជ័យ',
              'បានdelete! '
            );


          }
        );
      },
      nzCancelText: 'No',
      nzOnCancel: () => {
        // Reset loading state if deletion is cancelled
        this.isLoadingupdate = false;
        console.log('Delete action cancelled');
      },
    });


















  }































  isModalVisible = false; // To control the visibility of the modal
  notificationType: string = ''; // Notification type (success/error)
  notificationMessage: string = ''; // Notification message
  notificationDescription: string = ''; // Notification description

  // Dynamic values entered by the user
  major_id1: string = '';
  year: string = '';
  semester: string = '';
  group_student: string = '';
  generation: string = '';





  deleteTimetabllist(): void {
    // Show Ant Design modal for confirmation
    this.modal.confirm({
      nzTitle: 'Are you sure you want to delete this?',
      nzContent: '<b style="color: red;">This action is irreversible.</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => {
        // Prepare the query parameters based on your deletion criteria
        const data = {
          year: this.year,            // You can change this to dynamic if needed
          semester: this.semester,
          major_id: this.major_id1,
          group_student: this.group_student
        }
        const params = {
          major_id: this.major_id1,  // Use dynamic values here
          year: this.year,            // You can change this to dynamic if needed
          semester: this.semester ,    // You can change this to dynamic if needed
          group_student: this.group_student,
          generation: this.generation
        };

        // Delete timetable when user confirms
        this.apiService.deletelisttable('timetable/delete1', params).subscribe(
          () => {
            this.isLoadingupdate = true;
            this.loadTimetables();
            this.loadTimetablesgroup();

            setTimeout(() => {
              this.filterTimetables();
              this.isLoadingupdate = false;
            }, 1000); // 1 seconds delay

            this.notification.success(
              'Success',
              'Timetable deleted successfully!'
            );
          },
          (error) => {
            this.isLoadingupdate = false;
            this.notification.error(
              'Error',
              'Failed to delete timetable.'
            );
          }
        );
      },
      nzCancelText: 'No',
      nzOnCancel: () => {
        // Reset loading state if deletion is cancelled
        this.isLoadingupdate = false;
        console.log('Delete action cancelled');
      },
    });
  }




  

  isVisibleModadelet = false;

  showModadelet(): void {
    this.isVisibleModadelet = true;
  }

  handleOkModadelet(): void {
    this.isVisibleModadelet = false;
  }

  handleCancelModadelet(): void {
    this.isVisibleModadelet = false;
  }
  








  isVisible3 = false;

  showModal3(): void {
    if (this.selectedEntries.length !== 1) {
      this.notification.warning('⚠️ ជ្រើសរើស', 'សូមជ្រើសរើស वेळा वेळा (Timetable) តែមួយគត់');
      return;
    }
    this.isVisible3 = true;
  }

  handleOk3(): void {
    if (this.selectedRoomId === null) {
      this.notification.warning('⚠️ ជ្រើសរើសបន្ទប់', 'សូមជ្រើសរើសបន្ទប់មួយ');
      return;
    }

    // *** SAFELY get the ID of the selected timetable entry ***
    const selectedEntryId = this.selectedEntries[0]?.id;

    // *** Check if an entry was actually selected ***
    if (selectedEntryId === undefined) {
      this.notification.error('❌ Error', 'No timetable entry selected.');
      return;
    }


    this.apiService.assignRoom(selectedEntryId, this.selectedRoomId).subscribe(
      (response) => {
        this.notification.success('ជោគជ័យ', response.message || 'បន្ទប់ត្រូវបានកំណត់');
       
        this.selectedEntries = [];
        this.isVisible3 = false; // Close the modal
        this.selectedRoomId = null; // Reset selected room
        this.loadTimetables(); // Reload data
        setTimeout(() => {
          this.filterTimetables();
        }, 500);
      },
      (error) => {
        const errorMessage = error.error?.error || 'មានបញ្ហាក្នុងការកំណត់បន្ទប់';
        this.notification.error('❌ បរាជ័យ', `❌ ${errorMessage}`);
      }
    );
  }

  handleCancel3(): void {
    this.isVisible3 = false;
  }


}
