import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SharedModule } from '../shared/shared.module';


@Component({
  selector: 'app-study-session',
  imports: [
    SharedModule,
  
  ],
  templateUrl: './study-session.component.html',
  styleUrl: './study-session.component.css'
})
export class StudySessionComponent implements OnInit {
  studySessions: any[] = [];
  
  isEditing: boolean = false;
  sessionToEdit: any = null;
  toastr: any;

  constructor(private apiService: ApiService,

    private NzMessageService: NzMessageService,
    private notification: NzNotificationService
  ) { }


  newSession: any = {
    session_time_start: '',
    session_time_end: ''
  };

  // Map AM/PM to Khmer and English
  // Map for different times of the day in Khmer and English
  amPmMap: { [key: string]: string } = {
    AM: 'ព្រឹក (AM)',  // AM in Khmer and English
    PM: 'ល្ងាច (PM)', // PM in Khmer and English
    Morning: 'ព្រឹក (Morning)',  // Morning in Khmer and English
    Afternoon: 'ល្ងាច (Afternoon)',  // Afternoon in Khmer and English
    Evening: 'យប់ (Evening)',  // Evening in Khmer and English
    Night: 'យប់ (Night)'  // Night in Khmer and English
  };

  // Function to dynamically return the period of the day (Morning, Afternoon, Evening, Night)
  getTimePeriodText(time: string): string {
    if (!time) return '';  // Return empty if no time is provided

    const hours = parseInt(time.split(':')[0], 10);  // Extract hour part from the time string

    // Define the time periods based on hours
    if (hours >= 5 && hours < 12) {
      return this.amPmMap['Morning'];  // Return Morning in Khmer and English
    } else if (hours >= 12 && hours < 18) {
      return this.amPmMap['Afternoon'];  // Return Afternoon in Khmer and English
    } else if (hours >= 18 && hours < 21) {
      return this.amPmMap['Evening'];  // Return Evening in Khmer and English
    } else {
      return this.amPmMap['Night'];  // Return Night in Khmer and English
    }
  }

  ngOnInit(): void {
    this.loadStudySessions();
  }

  timeSlotSessions: any[] = []; // Array to hold restructured sessions for time-slot table
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // Array for day order for time-slot




  isMorning(time: string): boolean {
    const startTime = time.split(' - ')[0];
    const hour = parseInt(startTime.split(':')[0], 10);
    return hour >= 5 && hour < 12;  // Morning: 5 AM to 11:59 AM
  }

  isAfternoon(time: string): boolean {
    const startTime = time.split(' - ')[0];
    const hour = parseInt(startTime.split(':')[0], 10);
    return hour >= 12 && hour < 18; // Afternoon: 12 PM to 5:59 PM
  }

  isEvening(time: string): boolean {
    const startTime = time.split(' - ')[0];
    const hour = parseInt(startTime.split(':')[0], 10);
    return hour >= 18 && hour < 21; // Evening: 6 PM to 8:59 PM
  }

  isNight(time: string): boolean {
    const startTime = time.split(' - ')[0];
    const hour = parseInt(startTime.split(':')[0], 10);
    return hour >= 21 || hour < 5; // Night: 9 PM to 4:59 AM
  }


  restructureSessions() {
    const timeSlotMap: Map<string, any> = new Map(); // Use a Map for efficient lookup

    for (const session of this.studySessions) { // Use studySessions here
      const timeSlot = `${session.session_time_start} - ${session.session_time_end}`;
      if (!timeSlotMap.has(timeSlot)) {
        timeSlotMap.set(timeSlot, {}); // Initialize time slot entry
      }
      const dayKey = session.sessions_day; // Use session day as key
      timeSlotMap.get(timeSlot)[dayKey] = session; // Store session under the day
    }

    // Convert Map to array for template iteration, maintaining time slot order
    this.timeSlotSessions = Array.from(timeSlotMap, ([timeSlot, days]) => ({
      timeSlot: timeSlot,
      days: days
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
    this.groupedSessions = this.studySessions.reduce((acc, session) => {
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



  // Load existing study sessions
  loadStudySessions() {
    this.apiService.getStudySessions().subscribe((response: any) => {
      this.studySessions = response;
      this.groupSessions()
      this.restructureSessions()
    });
  }



  addStudySession() {

    this.apiService.create('study_sessions', this.newSession).subscribe(
      (response) => {
        this.loadStudySessions(); // Reload sessions
        this.toastr.success('Study session added successfully');
        this.notification.success(' added','successfully')
        this.newSession = {}; // Reset form
        this.handleCancel()
      },
      (error) => {
        const errorMessage = error.error?.error || 'Unexpected error occurred';
        this.notification.error('Add Failed', `Error: ${errorMessage }`);
      }
      
    );
  }

  // Edit a study session (populate form with session data)
  editSession(session: any) {
    this.showModal()
    this.isEditing = true;
    this.newSession = { ...session }; // Copy session data to form
    this.sessionToEdit = session; // Store the session to edit
    this.loadStudySessions();

  }

  // Update the existing study session
  updateStudySession() {
    this.apiService.update('study_sessions', this.sessionToEdit.id, this.newSession).subscribe(
      (response) => {
        this.loadStudySessions(); // Reload sessions
        this.toastr.success('Study session updated successfully');
        this.notification.success('updated', 'Study session updated successfully')

        this.newSession = {}; // Reset form
        this.isEditing = false; // Reset edit mode
      },
      (error) => {
        this.toastr.error('Failed to update study session');
      }
    );
  }
  

  // Delete a study session
  deleteSession(sessionId: number): void {
    this.apiService.delete('study_sessions', sessionId).subscribe(
      (response) => {
        this.NzMessageService.success('Study session deleted successfully');
        this.notification.success(' deleteSession', 'successfully')
        this.loadStudySessions(); // Reload sessions
      },
      (error) => {
        this.NzMessageService.error('Failed to delete study session');
      }
    );
  }


  cancel(): void {
    this.loadStudySessions(); // Reload sessions
    this.NzMessageService.error('Delete canceled');
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

    this.isVisible = false;

    // Reset editing state
    if (this.isEditing) {
      this.isEditing = false;
      this.newSession = {}; // Clear form
      this.sessionToEdit = null; // Reset edited session
      this.NzMessageService.info('Update canceled');
    }

  }



}