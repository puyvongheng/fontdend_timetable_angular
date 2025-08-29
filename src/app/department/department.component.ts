import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

import { SharedModule } from '../shared/shared.module';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-department',
  imports: [
    SharedModule,

  ],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {
  departments: any[] = []; // Array to hold the departments
  faculties: any[] = []; // Array to hold the faculties for the select dropdown
  departmentName: string = ''; // Department name input
  selectedFacultyId: number | null = null; // Selected Faculty ID for department
  selectedDepartmentId: number | null = null; // To hold the ID of the department being edited
  isEditMode: boolean = false; // Flag to track edit mode

  constructor(private apiService: ApiService,
    private nzMessageService: NzMessageService

  ) { }

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }


  ngOnInit(): void {
    this.load()
  }


  
  load() {
    this.apiService.getDepartments().subscribe((response) => { this.departments = response; });
    this.apiService.getFaculties().subscribe((response) => { this.faculties = response; });
  }


  addDepartment(): void {
    if (this.departmentName.trim() && this.selectedFacultyId) {
      this.apiService.create('departments', {
        name: this.departmentName,
        faculty_id: this.selectedFacultyId
      }).subscribe(
        () => {
          this.load(); // Reload departments after successful creation
          this.departmentName = ''; // Reset the input field
          this.selectedFacultyId = null; // Reset the faculty selection
        },
        (error) => {
          console.error('Error adding department:', error);
        }
      );
    } else {
      alert('Please provide both department name and faculty!');
    }
  }

  // Delete a department
  deleteDepartment(id: number): void {
      this.apiService.delete('departments', id)
        .subscribe(
          () => {
            this.load(); // Reload departments after successful deletion
            this.nzMessageService.success(' delete department.success.');
          },
          (error) => {
            this.nzMessageService.error('Failed to delete department. Please try again.');
          }
        );
   
  }

  // Edit a department
  editDepartment(id: number): void {
    const department = this.departments.find(dep => dep.id === id);
    if (department) {
      this.selectedDepartmentId = id;
      this.departmentName = department.department_name;
      this.selectedFacultyId = department.faculty_id;
      this.isEditMode = true; // Enter edit mode
      this.showModal()

    }
  }

  // Update an existing department
  updateDepartment(): void {
    if (this.selectedDepartmentId && this.departmentName.trim() && this.selectedFacultyId) {
      this.apiService.update('departments', this.selectedDepartmentId, {
        name: this.departmentName,
        faculty_id: this.selectedFacultyId
      }).subscribe(
        () => {
          this.handleCancel();
          this.load(); // Reload departments after successful update
          this.departmentName = ''; // Reset the input field
          this.selectedFacultyId = null; // Reset the faculty selection
          this.selectedDepartmentId = null; // Reset the selected department
          this.isEditMode = false; // Exit edit mode
        

        },
        (error) => {
          console.error('Error updating department:', error);
        }
      );
    }
  }


  resetForm(): void {
    this.isVisible = false;

    this.departmentName = '';
    this.selectedFacultyId = null;
    this.selectedDepartmentId = null;
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