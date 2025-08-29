import { ApiService } from './../service/api.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';


import { SharedModule } from '../shared/shared.module';
import { TreeNode } from 'primeng/api';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-dashboard',
  imports: [

       SharedModule,
   
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line

})
export class DashboardComponent implements OnInit {

  faculties: any[] = []; // Array to hold the faculties
  departments: any[] = [];
  majors: any[] = [];
  students: any[] = [];
  rooms: any[] = [];
  subjects: any[] = [];
  teachers: any[] = [];
  timetables: any[] = [];





/*
  data: TreeNode[] = [];
*/


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




    




  

    this.ApiService.getDepartments().subscribe(
      (response) => (this.departments = response),
      (error) => console.error('Error loading data:', error)
    );

    this.ApiService.getFaculties().subscribe(
      (response) => (this.faculties = response),
      (error) => console.error('Error loading data:', error)
    );

    this.ApiService.getMajors().subscribe(
      (response) => (this.majors = response),
      (error) => console.error('Error loading data:', error)
    );


    this.ApiService.getStudents().subscribe(
      (response) => (this.students = response),
      (error) => console.error('Error loading data:', error)
    );


    this.ApiService.getRooms().subscribe(
      (response) => (this.rooms = response),
      (error) => console.error('Error loading data:', error)
    );

    this.ApiService.getSubjects().subscribe(
      (response) => (this.subjects = response),
      (error) => console.error('Error loading data:', error)
    );

    this.ApiService.getTeachers().subscribe(
      (response) => (this.teachers = response),
      (error) => console.error('Error loading data:', error)
    );




  }














}
