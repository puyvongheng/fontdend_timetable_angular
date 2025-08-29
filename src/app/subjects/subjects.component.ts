import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SharedModule } from '../shared/shared.module';
import { Data } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-subjects',
  imports: [SharedModule, TableModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent implements OnInit {
  subjects: any[] = [];
  subjectForm: FormGroup;
  isEditMode: boolean = false;
  editingSubjectId: number | null = null;
  isVisible = false; // Modal visibility
  faculties: any[] = []; // Array to hold the faculties



  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) {
    this.subjectForm = this.fb.group({
      name: ['', Validators.required], // Form control with validation
      faculties_id: [null, [Validators.required]], // Ensure faculty selection is mandatory
      batch: [null, [Validators.required]] // Ensure faculty selection is mandatory


    });
  }

 

  ngOnInit(): void {
    this.loadData();
    this.loadFaculties()

   
  }
  
  

  groupedSubjects: { [key: string]: any[] } = {};
  groupSubjects() {
    this.groupedSubjects = this.subjects.reduce((acc, subject) => {
      const facultyName = subject.faculty_name || 'Unknown Faculty'; // Default if null
      if (!acc[facultyName]) {
        acc[facultyName] = [];
      }
      acc[facultyName].push(subject);
      return acc;
    }, {});
  }

  
  loadFaculties(): void {
    this.apiService.getFaculties().subscribe((response) => {
      this.faculties = response;
      this.groupSubjects(); // Group subjects after loading

    });
  }

  selectedFacultyId: number | null = 1; // Store selected faculty ID


  selectedbatch: number | null = 1; // Store selected faculty ID





  
  // Load subjects
  loadData(): void {
    /*
    this.apiService.getSubjects().subscribe(
      (response) => {
        this.subjects = response;
        this.groupSubjects();  // Call groupSubjects after setting subjects

      },
      (error) => this.message.error('Failed to load subjects. Please try again.')
    );
*/

    const facultyFilter = this.selectedFacultyId !== null ? `?faculties_id=${this.selectedFacultyId}&batch=${this.selectedbatch}` : '';

    this.apiService.get(`/subjects/filter1${facultyFilter}
      
      
      `).subscribe(
      (response) => {
        this.subjects = response;
        this.groupSubjects();  // Call groupSubjects after setting subjects

      },
      (error) => this.message.error('Failed to load subjects. Please try again.')
    );

   

    
  }


  // Add or update a subject
  addOrUpdateSubject(): void {
    if (this.subjectForm.valid) {
      const subjectData = this.subjectForm.value;

      if (this.isEditMode && this.editingSubjectId !== null) {
        // Update existing subject
        this.apiService.update('subjects', this.editingSubjectId, subjectData).subscribe(
          () => {
            this.message.success('Subject updated successfully');
            this.loadData();
            this.loadFaculties()
            this.resetForm();
            this.isVisible = false;
          },
          (error) => this.message.error('Failed to update subject')
        );
      } else {
        // Add new subject
        this.apiService.create('subjects', subjectData).subscribe(
          (response) => {
            this.message.success('Subject added successfully');
            this.subjects.push(response);
            this.loadData();
            this.resetForm();
            this.isVisible = false;
          },
          (error) => this.message.error('Failed to add subject')
        );
      }
    } else {
      this.message.warning('Please enter the subject name.');
    }
  }



  // Set subject for editing
  editSubject(subject: { id: number; name: string; faculties_id?: number; batch?: number }): void {
    this.isEditMode = true;
    this.editingSubjectId = subject.id;

    // Ensure faculties_id and batch are included in patchValue
    this.subjectForm.patchValue({
      name: subject.name,
      faculties_id: subject.faculties_id || null,  // ✅ Added missing comma
      batch: subject.batch || null  // ✅ Now batch is correctly included
    });

    this.showModal();
  }


  // Delete a subject
  confirmDelete(id: number): void {
    this.apiService.delete('subjects', id).subscribe(
      () => {
        this.message.success('Subject deleted successfully');
        this.subjects = this.subjects.filter((subject) => subject.id !== id);
        this.groupSubjects();  // Call groupSubjects after setting subjects

      },
      (error) => this.message.error('Failed to delete subject')
    );
  }

  // Reset the form
  resetForm(): void {
    this.isEditMode = false;
    this.editingSubjectId = null;
    this.subjectForm.reset();
  }

  // Modal controls
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.resetForm();

    // Delay the groupSubjects() call for 1.11 seconds (1110 milliseconds)
    setTimeout(() => {
      this.groupSubjects();  // Call groupSubjects after the delay
    }, 1110);


  }










  isVisible1 = false; // Modal visibility

  // Modal controls
  showModal1(): void {
    this.isVisible1 = true;

  }

  handleOk1(): void {
    this.isVisible1 = false;
  }

  handleCancel1(): void {
    this.isVisible1 = false;
  }









  teacherSubjects1: any[] = [];
  load_teacher_subjects(subject_id: any) {

    this.isVisible1 = true;

    const query = [];

    if (subject_id) query.push(`subject_id=${subject_id}`);

    const queryString = query.length ? '?' + query.join('&') : '';
    const apiUrl = `/subjects/filter2${queryString}`;

    this.apiService.get(apiUrl).subscribe((data) => {
      this.teacherSubjects1 = [];
      this.teacherSubjects1 = data.teachers;
    });
  }











}
