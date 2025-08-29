import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ApiService } from './../../service/api.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-reportstudents',
  imports: [SharedModule],
  templateUrl: './reportstudents.component.html',
  styleUrl: './reportstudents.component.css'
})
export class ReportstudentsComponent implements OnInit {


  
    faculties: any[] = []; // Array to hold the faculties
    departments: any[] = [];
    majors: any[] = [];
    students: any[] = [];
    rooms: any[] = [];
    subjects: any[] = [];
    teachers: any[] = [];
    timetables: any[] = [];
  
  
  
  

  
    constructor(private ApiService: ApiService,
          private notification: NzNotificationService,
      
    ) {
  
    }
    ngOnInit(): void {
  
      this.loadData()
  
   
    }
  
  
  
  
    // Method to send the message
    sendMessage(input: string): void {
      if (!input.trim()) {
        alert('Please enter a message');
        return;
      }
  
  
      // Call the backend service to send the message
      this.ApiService.sendTelegramMessage(input).subscribe(
        (response: any) => {
          this.notification.success('Message Sent', 'The message was sent successfully  ' + response);
     
        },
        (error) => {
          console.error('Error sending message:', error);
          this.notification.error('Error', 'Error sending message');
  
          alert('Error sending message');
        }
      );
    }
  
  
  
  
  
  
  
  
  
  
  
    getMajorNameById(id: number): string {
      const major = this.majors.find(major => major.id === id);
      return major ? major.major_name : 'Unknown Major';  // Returns the name or 'Unknown Major' if not found
    }
  
  
    getFilteredMajors(): string[] {
      const uniqueMajors = new Set<string>();
  
      // Add major_name to the Set (Set automatically removes duplicates)
      this.timetables.forEach(entry => {
        if (entry.major_name) {
          uniqueMajors.add(entry.major_name);
        }
      });
  
      // Convert Set to an array and return it
      return Array.from(uniqueMajors);
    }
  
  
    // Method to count subjects by role
    countTeachersByRole(role: string): number {
      return this.teachers.filter(teacher => teacher.role === role).length;
    }
  
    
    students_with_timetable: any
    
  
  
    
    majors_with_students: any
    
  
  
   
  
    loadData(): void {
  

      this.ApiService.get('students/majors_with_students ').subscribe(
        (response) => {
          this.majors_with_students = response;
        },
        (error) => {
          // Handle any errors here
          console.error('Error loading data:', error);
          // Optionally, display an error message to the user
        }
      );
  
  
  
  
      

  
  
    }
  
  
  
  
  
  

}
