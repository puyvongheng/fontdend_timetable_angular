import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

import { ManagementStudenRegisterComponent } from "../management-studen-register/management-studen-register.component";

import { SharedModule } from '../shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';

declare var bootstrap: any; // Use this to access Bootstrap from the CDN


@Component({
  selector: 'app-student',
  imports: [
    SharedModule,
    ManagementStudenRegisterComponent
  
  
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line

})

export class StudentComponent implements OnInit {
  students: any[] = []; // Array to hold students data
  majors: any[] = [];   // Array to hold majors data from the API
  studentId: number | null = null; // ID of the student being edited
  username: string = '';
  name: string = '';
  password: string = '';
  majorId: number | null = null;
  generation: string = '';
  batch: string = '';
  groupStudent: string = '';



  totalStudents: number = 0;
  currentPage: number = 1;
  pageSize: number = 10;
  message: any;









  showTableView: boolean = true;
  toggleView() {
    this.showTableView = !this.showTableView;
  }
  viewOptions = [
    { label: 'Show Table View', value: true },
    { label: 'Show Card View', value: false }
  ];



  onPageChange(page: number): void {
    localStorage.setItem('currentPage', page.toString());
    this.currentPage = page;
    this.loadStudents(this.currentPage, this.pageSize); 
  }
  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    const totalPages = Math.ceil(this.totalStudents / this.pageSize);
    if (this.currentPage > totalPages) {
      this.currentPage = totalPages;
    }
    this.loadStudents(this.currentPage, this.pageSize);
  }

  constructor(private apiService: ApiService,
        private notification: NzNotificationService
    

  ) { 

  }

  ngOnInit(): void {
    this.loadStudents(this.currentPage, this.pageSize); // Load students on component init
    this.load();
  }

  load() {
    // this.apiService.getStudents().subscribe((response: any) => { this.students = response; });
    this.apiService.getMajors().subscribe((response: any) => { this.majors = response; });
    this.loadStudents();

  }


  listOfGroupOption: any[] = []
  loandmajorslistOfGroupOption() {
    setTimeout(() => {
      this.listOfGroupOption = this.majors.map((major: any) => ({
        label: major.major_name,
        value: major.id,
        groupLabel: major.faculty_name
      }));
    }, 1110);
  }


  loadStudents(page: number = 1, pageSize: number = 10): void {
    const savedPage = localStorage.getItem('currentPage');
    this.currentPage = savedPage ? +savedPage : page; // Use saved page or default to 1
    this.apiService.getstuden('students', this.currentPage, pageSize).subscribe(
      (data) => {
        this.students = data.students; // Assuming the API sends students in this format
        this.totalStudents = data.totalStudents; // Assuming API sends total number of students
        this.loandmajorslistOfGroupOption()
      },
      (error) => {
        console.error('Error loading students:', error);
      }
    );
  }






  // Delete a student
  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.apiService.delete('students', id).subscribe(() => {
        // After deleting, we need to check if the current page still has students
        const newTotalStudents = this.totalStudents - 1;
        // If current page has no students, go to the previous page (or stay on the current page if it's the first page)
        if (newTotalStudents <= (this.currentPage - 1) * this.pageSize) {
          this.currentPage = Math.max(1, this.currentPage - 1);  // Avoid going to page 0
        }
        this.totalStudents = newTotalStudents;
        this.loadStudents(this.currentPage, this.pageSize); // Reload students on the new page
        this.notification.create('success', 'Student deleted successfully', 'The student has been deleted successfully');  
      });
    }
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
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }












  isVisible1 = false;

  // Student data model
  studentData = {
    major_id: 0,  // Initialize with a default number (or you can leave it as `null` and handle in the method)
    date_joined: '',
    generation: '',
    batch: '',
    group_student: '',
    shift_name: ''
  };


  monthFormat = 'yyyy/MM//dd';
  // List of allowed shifts
  allowedShifts = [
    'Monday-Friday Morning',
    'Monday-Friday Afternoon',
    'Monday-Friday Evening',
    'Saturday-Sunday'
  ];


  showModal1(): void {
    this.isVisible1 = true;
  }

  handleOk1(): void {
    // Validate student data here if needed
    if (this.studentData.major_id && this.studentData.date_joined && this.studentData.generation && this.studentData.batch && this.studentData.group_student && this.studentData.shift_name) {
      this.apiService.addStudentghost(this.studentData).subscribe(
        response => {
          console.log('Student added successfully', response);
          this.isVisible1 = false;  // Close the modal
          this.loadStudents(this.currentPage, this.pageSize); // Load students on component init
          this.load();
          this.notification.create('success', 'Student added successfully', 'The student has been added successfully');
        },
        error => {
          console.error('Error adding student', error);
          this.notification.create('error', 'Failed to add student', 'An error occurred while adding the student. Please try again.');
        }
      );
    } else {
      this.notification.create('warning', 'Please fill in all fields', 'All fields are required to add a student');
    }
  }

  handleCancel1(): void {
    console.log('Button cancel clicked!');
    this.isVisible1 = false;
  }

}