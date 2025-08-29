import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { TimetableService } from '../service/timetable.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ApiService } from '../service/api.service';
import { SharedModule } from '../shared/shared.module';
import { SelectItemGroup } from 'primeng/api';
import { HttpParams } from '@angular/common/http';

interface StudySession {
  id: string;
  shift_name: string;
  sessions_day: string;
  session_time_start: string;
  session_time_end: string;
}

export interface Major {
  id: string ;
  faculty_name: string;
  major_name: string;
  department_name: string;
  faculty_id: string;

}


interface Teacher {
  id: string;
  name: string;
  number_sessions?: number;
  totalTimetable?: number;


}

interface Subject {
  id: string;
  name: string;
}

interface Room {
  id: string;
  room_number: string;
}


interface TeacherSubject {
  teacher_id: string;
  subject_id: string;
}



@Component({
  selector: 'app-create-timetable',
  imports: [    SharedModule,
  
  ],
  templateUrl: './create-timetable.component.html',
  styleUrl: './create-timetable.component.css'
})
export class CreateTimetableComponent implements OnInit {




  @Input() timetableForm = {
    note: '',
    study_sessions_id: '',
    group_student: '',
    batch: '',
    generation: '',
    major_id: '',
    teacher_id: '',
    subject_id: '',
    room_id: '',
    years: '',
    semester: '1'
  };
  message: string = '';
  messages: string[] = [];
  alertClass: string = '';
  studySessions: StudySession[] = [];

  majors: Major[] = [];
  teachers: Teacher[] = [];
  subjects: Subject[] = [];

  teacherSubjects: TeacherSubject[] = [];
  filteredTeachers: Teacher[] = [];
  filteredSubjects: Subject[] = [];

  rooms: Room[] = [];

  isLoading: boolean = false;

  timetableId: string | null = null; // Stores the timetable ID for editing



  constructor
    (
      private timetableService: TimetableService,
      private router: Router,
      private route: ActivatedRoute,
    private notification: NzNotificationService,
    private apiService: ApiService,


  ) { }
  




  //-------------------  rendom





  panels = [
    {
      active: true,
      name: 'Session',
      childPanel: [
        {
          active: false,
          name: 'Child Panel 1'
        }
      ]
    },
    {
      active: false,
      name: 'Subjects',
      childPanel: []
    },
    {
      active: false,
      name: 'Room',
      childPanel: []
    }
  ];
  trackPanel(index: number, panel: any): any {
    return panel.name; // Unique identifier for each panel
  }










  isVisiblerendom = false;

  showModalrendom(): void {
    this.isVisiblerendom = true;
  }

  handleOkrendom(): void {
    console.log('Button ok clicked!');
    this.isVisiblerendom = false;
  }

  handleCancelrendom(): void {
    console.log('Button cancel clicked!');
    this.isVisiblerendom = false;
  }

  
  studySessions_1: any[] = [];
  selectAll = false;
  studySessionsrendom: any[] = [];
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
    this.submitStudySessions()
  }
  onStudySessionSelectionChange(): void {
    this.selectAll = this.studySessions_1.every(item => item.selected);
    this.submitStudySessions()
  }
  submitStudySessions(): void {
    const selectedSessions = this.studySessions_1.filter(item => item.selected);
    if (selectedSessions.length > 0) {
      this.studySessionsrendom = selectedSessions.map(session => ({
        study_sessions_id: session.id
      }));
    } else {
      console.warn('No study sessions selected');
    }
  }



  //------------------------------------------------------vvvvvvvv

  generateRandomTimetable(): void {
    this.isLoading = true; // Show loading state
    // Fetch all required data from API
      this.timetableService.getTeachers().subscribe(teachers => {
        this.teachers = teachers;
        this.timetableForm.teacher_id = this.getRandomItem(teachers)?.id?.toString() || '';
        this.timetableService.getSubjects().subscribe(subjects => {
          this.subjects = subjects;
          this.timetableForm.subject_id = this.getRandomItem(subjects)?.id?.toString() || '';
          this.timetableService.getRooms().subscribe(rooms => {
            //rooms
            this.rooms = rooms;
            this.timetableForm.room_id = this.getRandomItem(rooms)?.id?.toString() || '';
            // teacherTeachingTimes

           //    this.timetableForm.study_sessions_id = this.getRandomItem(this.studySessionsrendom)?.study_sessions_id?.toString() || '';
            this.isLoading = false;

           /* this.timetableService.getStudySessions().subscribe(studySessions => {

              this.studySessions = studySessions;
              this.timetableForm.study_sessions_id = this.getRandomItem(studySessions)?.id?.toString() || '';
              this.isLoading = false; // Hide loading state
            });*/
          });
        });
      });
  
  }
  onSubmitgenerateRandomTimetable(): void {
    this.timetableService.createTimetable(this.timetableForm).subscribe(
      (response: any) => {
        if (response.errors) {
          this.messages = response.errors.map((err: { error: string }) => err.error);
        } else {


          this.notification.success('ជោគជ័យ', 'បានបង្កើតដោយជោគជ័យ! ');
          this.messages.push('Timetable entry created successfully / បានបង្កើតដោយជោគជ័យ');
          this.timetableForm.study_sessions_id = (parseInt(this.timetableForm.study_sessions_id || '0', 10) + 1).toString();

          this.timetableForm.study_sessions_id = this.getRandomItem(this.studySessionsrendom)?.study_sessions_id?.toString() || '';

          this.generateRandomTimetable();
          this.checkForConflicts()
        }
        this.isLoading = false;
      },
      (error) => {

        this.checkForConflicts()
        this.timetableForm.study_sessions_id = this.getRandomItem(this.studySessionsrendom)?.study_sessions_id?.toString() || '';

        this.handleError(error);
        this.generateRandomTimetable();
      }
    );
  }

  //-----------------------------  //-----------------------------  //-----------------------------  //-----------------------------
  isGenerating = false; // Flag to track function execution
  submissionCount = 0;  // Counter for tracking successful submissions
  isProcessRunning = false; // Flag to track if the process is running
  toggleProcess(): void {
    if (this.isProcessRunning) {
      this.stopProcess();
    } else {
      this.startProcess();
    }
  }

  // Start the process of generating timetable 10 times
  startProcess(): void {
    // Prevent execution if the function is already running or 10 submissions have been reached
    if (this.isGenerating || this.submissionCount >= 10) {
      if (this.submissionCount >= 100) {
        this.notification.warning('សូមប្រយ័ត្ន', 'បានដល់ចំនួនបញ្ចូល 10 ដង!');
      } else {
        this.notification.warning('សកម្មភាពកំពុងដំណើរការ', 'សូមរង់ចាំ 5 វិនាទី');
      }
      return;
    }
    this.isProcessRunning = true; // Set process to running
    this.isGenerating = true; // Flag to prevent multiple submissions
    // Run the loop 10 times
    for (let i = 0; i < 100; i++) {
      // Set a delay of 5 seconds between each loop iteration
      setTimeout(() => {
        if (this.submissionCount < 100 && this.isProcessRunning === true​) {
          this.createTimetable();  // Call function to create timetable
        }
      }, i * 5000); // Delay by 5 seconds for each iteration (i * 5000ms)
    }
  }

  // Stop the process and reset
  stopProcess(): void {
    this.isProcessRunning = false; // Set process to stopped
    this.isGenerating = false; // Reset the generating flag
    this.submissionCount = 0; // Reset the submission count
    this.notification.info('សកម្មភាពត្រូវបានបញ្ចប់', 'ការបង្កើតតារាងត្រូវបានបញ្ចប់។');
  }

  // Function to handle the actual timetable creation and logic for success/failure
  createTimetable(): void {
    this.timetableService.createTimetable(this.timetableForm).subscribe(
      (response: any) => {
        if (response.errors) {
          this.messages = response.errors.map((err: { error: string }) => err.error);
        } else {
          this.notification.success('ជោគជ័យ', 'បានបង្កើតដោយជោគជ័យ! ');
          this.messages.push('Timetable entry created successfully / បានបង្កើតដោយជោគជ័យ');
          this.timetableForm.study_sessions_id = (parseInt(this.timetableForm.study_sessions_id || '0', 10) + 1).toString();
          this.generateRandomTimetable();
          this.checkForConflicts()
          this.submissionCount++; // Increment the submission count
        }
        this.isLoading = false;
      },
      (error) => {
        this.handleError(error);
        this.submissionCount++;
        this.checkForConflicts()
        this.notification.error('error', 'createTimetableមិនជោគជ័យ! ');
        this.generateRandomTimetable();
        // Check for conflicts and if there is a teacher_time issue, reset the study_sessions_id
        if (this.conflicts.length > 0) {
          // Iterate over each conflict to check for teacher_time
          for (let conflict of this.conflicts) {
            if (conflict.teacher_time) {
              this.checkForConflicts()
              this.notification.warning('getRandomItem', 'getRandomItem! ');
              if (conflict.messagesessions) {
                this.checkForConflicts()

                    this.notification.warning('getRandomItem', 'messagesessions! ');
                this.timetableForm.study_sessions_id = this.getRandomItem(this.studySessionsrendom)?.study_sessions_id?.toString() || '';
                  }

              // If a conflict with teacher_time is found, assign a new study_sessions_id
              this.timetableForm.study_sessions_id = this.getRandomItem(this.studySessionsrendom)?.study_sessions_id?.toString() || '';
              break; // Exit the loop once a conflict is handled
            }
          }
        }
        this.isLoading = false;
      }
    );
  }



  //-----------------------------  //-----------------------------  //-----------------------------  //-----------------------------









  // Utility function to get a random item from an array
  getRandomItem<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[Math.floor(Math.random() * array.length)] : undefined;
  }



//----------------------------------end rendom

  @Input() showPart: boolean = true;  // Use the @Input to receive the value to show/hide part

  goBack() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      console.log('No history available, cannot go back.');
    }
  }


  studySessionsId: string = '';
  major_id: string = '';

  @Output() reloadDropdown = new EventEmitter<void>();


  ngOnInit(): void {
    this.timetableForm.years = new Date().getFullYear().toString(); //2025
    this.loadDropdownData();

    // Detect F11, F12, and DevTools shortcuts
    window.addEventListener("keydown", (event) => {
      if (event.key === "F11" || event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault(); // Prevent default action
        this.onSubmitgenerateRandomTimetable()
      }
    });
    const devToolsDetection = new Function("debugger");
    setInterval(() => {
      const before = performance.now();
      devToolsDetection();
      const after = performance.now();
      if (after - before > 100) {
        this.onSubmitgenerateRandomTimetable
      }

      if (after - before > 100) {
        console.log("DevTools detected!");
        document.body.innerHTML = ""; // Hide all content
      }


      if (after - before > 100) {
        window.location.href = "about:blank"; // Redirect or hide content
      }


    }, 1000);



    

    

    setTimeout(() => {
      if (this.timetableForm.study_sessions_id) {
        this.autoSelectStudySession();
      }
    }, 1110); // Zero-delay ensures it runs after Angular's first cycle
  
  }


  // Function to auto-select values
  autoSelectStudySession() {
    const selectedSession = this.studySessions.find(
      session => session.id === this.timetableForm.study_sessions_id
    );
    if (selectedSession) {
      this.shiftName = selectedSession.shift_name;
      this.sessionDay = selectedSession.sessions_day;
      this.sessionTime = selectedSession.session_time_start;
    }
  }




 





  conflicts: any[] = []; // Store err conflicts
  checkForConflicts(): void {
    
    this.getTotalTimetable(
      this.timetableForm.teacher_id,
      this.timetableForm.years,
      this.timetableForm.semester
    );
 
    const data = {
      study_sessions_id: this.timetableForm.study_sessions_id,
      years: this.timetableForm.years,
      semester: this.timetableForm.semester,
      teacher_id: this.timetableForm.teacher_id,
      room_id: this.timetableForm.room_id,
      group_student: this.timetableForm.group_student,
      generation: this.timetableForm.generation,
      major_id: this.timetableForm.major_id,
      subject_id:this.timetableForm.subject_id

    };

    this.timetableService.checkForConflicts(data).subscribe(
      response => {
        if (response.conflicts && response.conflicts.length > 0) {
          this.conflicts = response.conflicts;
        } else {
          this.conflicts = [];
        }
      },
      error => {
        console.error('Error checking conflicts:', error);
      }
    );
  }


  //for fillter shift day 
  shiftName: string = '';
  sessionDay: string = '';
  sessionTime: string = '';


  //វេនសិក្សសា
  getUniqueShiftNames() {
    const shifts = this.studySessions.map(session => session.shift_name);
    return [...new Set(shifts)];
  }
  //ថ្ងៃ
  getUniqueDaysForShift() {
    if (!this.shiftName) return [];
    const filteredSessions = this.studySessions.filter(session => session.shift_name === this.shiftName);
    const days = filteredSessions.map(session => session.sessions_day);
    return [...new Set(days)];
  }
  //h
  getUniqueTimes() {
    if (!this.shiftName || !this.sessionDay) return []; // If no shift or day selected, return empty array
    const filteredSessions = this.studySessions.filter(session =>
      session.shift_name === this.shiftName && session.sessions_day === this.sessionDay);
    const times = filteredSessions.map(session => session.session_time_start);
    return [...new Set(times)];
  }


  //fillter
  getFilteredSessions() {
    return this.studySessions.filter(session => {
      const matchesShiftName = this.shiftName ? session.shift_name.includes(this.shiftName) : true;
      const matchesSessionDay = this.sessionDay ? session.sessions_day === this.sessionDay : true;
      const matchesSessionTime = this.sessionTime ? session.session_time_start === this.sessionTime : true;
      return matchesShiftName && matchesSessionDay && matchesSessionTime;
    });
  }

  //update fillter
  updateSelectedSession() {
    const filteredSessions = this.getFilteredSessions();
    if (filteredSessions.length > 0) {
      this.timetableForm.study_sessions_id = filteredSessions[0].id; // Automatically set the first session
    } else {
      this.timetableForm.study_sessions_id = ''; // Reset to empty string if no session found
    }
    if (!this.shiftName) {
      this.sessionDay = '';
      this.sessionTime = '';
    } else {
    }
  }




  //face data

  subjectsGroup: any[] = []
  loadlistOfGroupsubjects() {
    setTimeout(() => {
      this.subjectsGroup = this.filteredSubjects.map((subjects: any) => ({
        label: subjects.name + '  (ឆ្នាំទី :' + subjects.batch + ')',
        value: subjects.id.toString(),
        groupLabel: subjects.faculty_name
      }));
    }, 1110);
  }


  listOfGroupOption: any[] = []
  loandmajorslistOfGroupOption() {
    setTimeout(() => {
      this.listOfGroupOption = this.majors.map((major: any) => ({
        label: major.major_name,
        value: major.id.toString(),
        groupLabel: major.faculty_name
      }));
    }, 1110);
  }






  loadTeachers(): void {
    this.apiService.getTeachers().subscribe(
    
      (response) => {
        this.teachers = response;  // Assign the response data to the teachers array
        this.teachers.forEach(teacher => {
          const currentYear = Number(this.timetableForm?.years) || new Date().getFullYear();  // Ensure currentYear is a number
          const semester = Number(this.timetableForm?.semester) || Number(1);  // Ensure semester is a number, default to 1
          this.getTotalTimetable(Number(teacher.id), currentYear, semester);  // Call getTotalTimetable with the correct values
        });
      },


      (error) => {
        console.error('Error loading teachers:', error);  // Log the error for debugging
      }
    );
  }





  totalTimetable: number = 0;

  getTotalTimetable(teacherId: any, year: any, semester: any): void {
    if (!teacherId || !year || !semester) {
      console.error("Invalid teacher ID:", teacherId);
      return;
    }
    this.apiService.get(`teachers/teacher/${teacherId}/total?year=${year}&semester=${semester}`)
      .subscribe(
        (data: any) => { // Use 'any' if you don't want to define a type
          const teacher = this.teachers.find(t => Number(t.id) === teacherId);
          if (teacher) {
            teacher.totalTimetable = data.total_timetable ?? 0;
          } else {
            console.warn(`Teacher with ID ${teacherId} not found.`);
          }
        },
        (error) => {
          console.error(`Error fetching timetable data for teacher ID ${teacherId}:`, error);
        }
      );
  }
  


  loadDropdownData() {

    // load data teacher
   // this.loadTeachers()

    this.timetableService.getTeachers().subscribe((data) => (this.teachers = data));

 
    // load data time   ពេលសិក្សារ​
    this.timetableService.getStudySessions().subscribe((data) => (
      this.studySessions = data,
      this.studySessions_1 = structuredClone(data)
    )
  );


    //​load major 
    this.timetableService.getMajors().subscribe
      ((data) =>(
        this.majors = data,
        this.loandmajorslistOfGroupOption()
    ));
    
    this.timetableService.getRooms().subscribe((data) => (this.rooms = data));

    /*
    this.timetableService.getTeacherSubjects().subscribe((data) => {
      this.teacherSubjects = data;
      this.filteredTeachers = this.teachers;
      this.filteredSubjects = this.subjects;
    });




    this.load_load_subjects_filtter_batch_faculty_id()
  */
    this.load_teacher_subjects()
  }


  //+++++++++++++++++++++++++++++++++++++++++
  

  subjectsGroup1: any[] = []

  loadlistOfGroupsubjects1() {
    this.subjectsGroup1 = this.subjects1.map((subjects: any) => ({
      label: subjects.subject_name + '  (ឆ្នាំទី :' + subjects.batch + ')',
      value: subjects.subject_id.toString(),
      groupLabel: subjects.faculty_name 
    }));

  }

  subjects1: any[] = [];
  teacherSubjects1: any[] = [];



  onTeacherSelect() {
    this.load_teacher_subjects({ teacher_id: this.timetableForm.teacher_id });
  }
  onSubjectSelect() {
    this.load_teacher_subjects({ subject_id: this.timetableForm.subject_id });
  }

  useBatch: boolean = true;
  useFaculties: boolean = true;


  load_teacher_subjects(input?: {
    batch?: any;
    faculties_id?: any;
    teacher_id?: any;
    subject_id?: any;
  }) {
    const query = [];
    const batch = input?.batch ?? this.timetableForm.batch;
    if (batch) query.push(`batch=${batch}`);

    const facultiesId = input?.faculties_id ?? this.majors_id_to_faculty_id();
    if (facultiesId) query.push(`faculties_id=${facultiesId}`);
    if (input?.teacher_id) query.push(`teacher_id=${input.teacher_id}`);
    if (input?.subject_id) query.push(`subject_id=${input.subject_id}`);

    const queryString = query.length ? '?' + query.join('&') : '';
    const apiUrl = `/subjects/filter2${queryString}`;

    this.apiService.get(apiUrl).subscribe((data) => {

      this.subjects1 = [];
      this.teacherSubjects1 = [];
      this.subjects1 = data.subjects;
      this.teacherSubjects1 = data.teachers; 
      this.loadlistOfGroupsubjects1()

    });
  }




  //+++++++++++++++++++++++++++++++++++++++++



  load_subjects() {
    const batch = this.timetableForm.batch || ''; // Get the batch value from the form   onMajorChange()
    this.apiService.get(`/subjects/filter1?batch=${batch}`).subscribe
      ((data) => {
        this.subjects = data;
        this.loadlistOfGroupsubjects()
        this.onTeacherChange()
      });
  }

  load_load_subjects_filtter_batch_faculty_id() {
    const batch = this.timetableForm.batch || ''; // Get the batch value from the form   onMajorChange()  ?faculties_id=1&batch=3&teacher_id=5
    this.apiService.get(`/subjects/filter1?faculties_id=${this.majors_id_to_faculty_id()}&batch=${batch}`).subscribe
      ((data) => {
        this.subjects = data;
        this.loadlistOfGroupsubjects()
        this.onTeacherChange()
      });
  }


  majors_id_to_faculty_id() {
    const selectedMajor = this.majors.find(major => major.id.toString() === this.timetableForm.major_id.toString());
    return selectedMajor?.faculty_id;
  }



/*
  filter2:any=[]
  load_subjects2() {
    const batch = this.timetableForm.batch || '3';
    const faculties_id = this.majors_id_to_faculty_id() || '';
    const teacher_id = this.timetableForm.teacher_id || '';
    const subject_id = this.timetableForm.subject_id || '';

    const queryParams = [];

    if (batch) queryParams.push(`batch=${batch}`);
    if (faculties_id) queryParams.push(`faculties_id=${faculties_id}`);
    if (teacher_id) queryParams.push(`teacher_id=${teacher_id}`);
    if (subject_id) queryParams.push(`subject_id=${subject_id}`);

    const queryString = queryParams.join('&');

    this.apiService.get(`/subjects/filter2?${queryString}`).subscribe((data) => {
      this.filter2 = data;
        this.onTeacherChange()
    });
  }
*/





  generateBatch(generation: any): number {
    const currentYear = new Date().getFullYear(); // Get the current year
    const baseYear = 2025; // The year where Generation 15 corresponds to Batch 4
    return (baseYear + 4) - currentYear - (generation - 15);
  }
  generateGeneration(batch: any): number {
    return -((batch-1 ) - 18);
  }


  
 
  


 
  


  //for fillter tacher  bu subject
  onTeacherChange(): void {
    const selectedTeacherId = this.timetableForm.teacher_id;
    if (selectedTeacherId) {
      const subjectIds = this.teacherSubjects
        .filter(ts => ts.teacher_id === selectedTeacherId)
        .map(ts => ts.subject_id);
      this.filteredSubjects = this.subjects.filter(subject => subjectIds.includes(subject.id));

      this.loadlistOfGroupsubjects()
    } else {
      this.filteredSubjects = this.subjects; // Reset to all subjects if no teacher selected
      this.loadlistOfGroupsubjects()
    }


  }



  onSubjectChange(): void {
    this.loadlistOfGroupsubjects()
    const selectedSubjectId = this.timetableForm.subject_id;

    if (selectedSubjectId) {
      const teacherIds = this.teacherSubjects
        .filter(ts => ts.subject_id === selectedSubjectId)
        .map(ts => ts.teacher_id);
      this.filteredTeachers = this.teachers.filter(teacher => teacherIds.includes(teacher.id));
    } else {
      this.filteredTeachers = this.teachers; // Reset to all teachers if no subject selected

    }
 
  }





  // Handle form submission (only for creating timetables)
  onSubmit(): void {
    this.isLoading = true;
    this.messages = [];
    this.timetableService.createTimetable(this.timetableForm).subscribe(
      (response: any) => {
        if (response.errors) {
          this.messages = response.errors.map((err: { error: string }) => err.error);
        } else {
          this.notification.success(
            'ជោគជ័យ',
            'បានបង្កើតដោយជោគជ័យ! '
          );
          this.messages.push('🎉 បានបង្កើតដោយជោគជ័យ! ✅');
          this.checkForConflicts();
        }
        this.isLoading = false;
      },
      (error) => {
        this.handleError(error);
        this.notification.warning(
          'កំហុស',
          'សូមពិនិត្យ និងកែប្រែព័ត៌មានខាងក្រោម មុននឹងបញ្ជូនបន្ត។! '
        );
      }
    );
  }
  handleError(error: any): void {
    this.isLoading = false;
    if (error.error && error.error.errors) {
      this.messages = error.error.errors.map((err: { error: string }) => err.error);
    } else {
      this.messages.push('An error occurred. Please try again later.');
    }
    console.error('Error:', error);
  }
  resetForm(): void {
    this.timetableForm = {
      note: '',
      study_sessions_id: '',
      group_student: '',
      batch: '',
      generation: '',
      major_id: '',
      teacher_id: '',
      subject_id: '',
      room_id: '',
      years: '',
      semester: ''
    };
  }







}