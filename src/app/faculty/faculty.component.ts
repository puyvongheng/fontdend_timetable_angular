
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';
import { DeleteOutline, EditOutline, HomeOutline, InsertRowAboveOutline, PieChartOutline, PlusOutline, SolutionOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { NzIconService } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';


import { NzTableSortFn, NzTableFilterFn, NzTableSortOrder, NzTableFilterList,  } from 'ng-zorro-antd/table';

import { SharedModule } from '../shared/shared.module';






import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-faculty',
  imports: [

    SharedModule,

  ],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
}) export class FacultyComponent implements OnInit {
  faculties: any[] = []; // Array to hold the faculties
  newFacultyName: string = ''; // Input for new faculty name
  selectedFacultyId: number | null = null; // Selected Faculty ID for editing

  isEditMode: boolean = false; // Flag to track edit mode

  constructor(
    private apiService: ApiService,
    private iconService: NzIconService,
    private message: NzMessageService) {
    this.iconService.addIcon(UserOutline, HomeOutline, PieChartOutline, DeleteOutline, EditOutline, InsertRowAboveOutline, PlusOutline, SolutionOutline);
  }





  loadFaculties(): void {
    this.apiService.getFaculties().subscribe((response) => {
      this.faculties = response;
    });
  }

  searchValue = '';
  visible: boolean = false;  // To control the visibility of the search dropdown





  
  ngOnInit(): void {
    this.loadFaculties();

  }



  addFaculty(): void {
    if (this.newFacultyName.trim()) {
      this.apiService.create('faculties', { name: this.newFacultyName }).subscribe(
        () => {
          this.loadFaculties(); // Reload faculties after successful creation
          this.newFacultyName = ''; // Clear the input field
        },
        (error) => {
          console.error('Error adding faculty:', error);
        }
      );
    } else {
      this.isVisible = false;
    }
  }

  // Edit an existing faculty
  editFaculty(id: number): void {
    this.isVisible = true;

    const faculty = this.faculties.find(fac => fac.id === id);
    if (faculty) {
      this.selectedFacultyId = id;
      this.newFacultyName = faculty.name; // Pre-fill the input field with the faculty's name
      this.isEditMode = true; // Enter edit mode

    }
  }

  // Update an existing faculty
  updateFaculty(): void {
    if (this.selectedFacultyId && this.newFacultyName.trim()) {
      this.apiService.update('faculties', this.selectedFacultyId, { name: this.newFacultyName }).subscribe(
        () => {
          this.loadFaculties(); // Reload faculties after successful update
          this.newFacultyName = ''; // Clear the input field
          this.selectedFacultyId = null; // Clear the selected faculty ID
          this.isEditMode = false; // Exit edit mode
          this.isVisible = false;
        },
        (error) => {
          console.error('Error updating faculty:', error);
        }
      );
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
    this.resetForm()
  }


  // Delete a faculty
  deleteFaculty(id: number): void {
    if (confirm('Are you sure you want to delete this faculty?')) {
      this.apiService.delete('faculties', id).subscribe(
        () => {
          this.loadFaculties(); // Reload faculties after successful deletion
        },
        (error) => {
          console.error('Error deleting faculty:', error);
        }
      );
    }
  }


  resetForm(): void {
    this.isVisible = false;
    this.isEditMode = false; // Exit edit mode
    this.selectedFacultyId = null;
    this.newFacultyName = '';

  }


}