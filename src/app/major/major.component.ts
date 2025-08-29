import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

import { SharedModule } from '../shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';



@Component({
  selector: 'app-major',
  imports: [
     SharedModule,
 
  ],
  templateUrl: './major.component.html',
  styleUrl: './major.component.css'
})
export class MajorComponent implements OnInit {
  majors: any[] = []; // Array to hold the majors
  departments: any[] = []; // Array to hold the departments for the select dropdown
  majorName: string = ''; // Major name input
  selectedDepartmentId: number | null = null; // Selected Department ID for major
  selectedMajorId: number | null = null; // To hold the ID of the major being edited
  isEditMode: boolean = false; // Flag for edit mode


  constructor(private apiService: ApiService,
        private notification: NzNotificationService,
    
  ) { }

  ngOnInit(): void {
    this.load(); // Load departments for the dropdown
  }

  load() {
    this.apiService.getMajors().subscribe((response) => { this.majors = response; });
    this.apiService.getDepartments().subscribe((response) => { this.departments = response; });
  }


  // Add a new major
  addMajor(): void {
    if (this.majorName.trim() && this.selectedDepartmentId) {
      this.apiService.create('majors', {
        name: this.majorName,
        department_id: this.selectedDepartmentId
      }).subscribe(
        () => {
          this.load(); // Reload majors after successful creation
          this.majorName = ''; // Reset the input field
          this.selectedDepartmentId = null; // Reset the department selection
        },
        (error) => {
          console.error('Error adding major:', error);
        }
      );
    } else {
      alert('Please provide both major name and department!');
    }
  }

  // Edit a major
  editMajor(major: any): void {
    this.selectedMajorId = major.id;
    this.majorName = major.major_name;
    this.selectedDepartmentId = major.Departments_id;
    this.isEditMode = true; // Exit edit mode
    this.showModal()

  }

  // Update an existing major
  updateMajor(): void {
    if (this.selectedMajorId && this.majorName.trim() && this.selectedDepartmentId) {
      this.apiService.update('majors', this.selectedMajorId, {
        name: this.majorName,
        department_id: this.selectedDepartmentId
      }).subscribe(
        () => {
          this.load(); // Reload majors after successful update
          this.majorName = ''; // Reset the input field
          this.selectedDepartmentId = null; // Reset the department selection
          this.selectedMajorId = null; // Reset the selected major
          this.isEditMode = false; // Exit edit mode

        },
        (error) => {
          console.error('Error updating major:', error);
        }
      );
    }
  }

  // Delete a major
  deleteMajor(id: number): void {
    if (confirm('Are you sure you want to delete this major?')) {
      this.apiService.delete('majors', id).subscribe(
        () => {
          this.load(); // Reload majors after successful deletion
          this.notification.success('success', `Deleting major success: `);

        },
        (error) => {
          this.notification.error('Error', `Deleting major failed: ${error.message || error}`);

        }
      );
    }
  }


  resetForm(): void {
    this.majorName = '';
    this.selectedDepartmentId = null;
    this.selectedMajorId = null;
    this.isEditMode = false; // Exit edit mode
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
    this.resetForm()

  }
}