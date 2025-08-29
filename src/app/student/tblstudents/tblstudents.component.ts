import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-tblstudents',
  imports: [SharedModule],
  templateUrl: './tblstudents.component.html',
  styleUrl: './tblstudents.component.css'
})
export class TblstudentsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getStudents();
  }

  students: any[] = [];
  filters: any = {}; // Dynamic filter object
  isVisible = false;
  isEditing = false;  // Track edit mode
  studentToEdit: any = null; // Store the student being edited

  formModel: any = {
    username: '',
    name: '',
    password: '',
    major_id: null,
    shift_name: '',
    generation: null,
    batch: null,
    group_student: null,
    gender: '',
    phone_number: '',
    email: '',
    nationality: '',
    enrollment_status: '',
    profile_photo: null
  };

  getStudents(): void {
    const params = {
      ...this.filters,
      page: 1,
      pageSize: 20
    };

    this.apiService.get('students/tes', params).subscribe({
      next: (response) => {
        this.students = response.students;
      },
      error: (err) => {
        console.error('Failed to load students', err);
      }
    });
  }

  onSubmit(): void {
    if (this.isEditing && this.studentToEdit) {
      this.apiService.put(`students/tes/${this.studentToEdit.id}`, this.formModel).subscribe({
        next: (response) => {
          console.log('Student updated:', response);
          this.getStudents();
          this.closeModal();
        },
        error: (err) => {
          console.error('Failed to update student:', err);
        }
      });
    } else {
      this.apiService.post('students/tes', this.formModel).subscribe({
        next: (response) => {
          console.log('Student added:', response);
          this.getStudents();
          this.closeModal();
        },
        error: (err) => {
          console.error('Failed to add student:', err);
        }
      });
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.formModel.profile_photo = reader.result as string;
      };
      reader.readAsDataURL(file); // This creates a base64 string
    }
  }
  
  
  showModal(student?: any): void {
    this.isVisible = true;
    if (student) {
      this.isEditing = true;
      this.studentToEdit = student;
      this.formModel = {
        username: student.username,
        name: student.name,
        password: student.password,
        major_id: student.major_id,
        shift_name: student.shift_name,
        generation: student.generation,
        batch: student.batch,
        group_student: student.group_student,
        gender: student.gender,
        phone_number: student.phone_number,
        email: student.email,
        nationality: student.nationality,
        enrollment_status: student.enrollment_status,
        profile_photo: student.profile_photo // if this exists in the student object
      };

    } else {
      this.isEditing = false;
      this.studentToEdit = null;
      this.resetForm();
    }
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.closeModal();
  }

  resetForm(): void {
    this.formModel = {
      username: '',
      name: '',
      password: '',
      major_id: null,
      shift_name: '',
      generation: null,
      batch: null,
      group_student: null,
      gender: '',
      phone_number: '',
      email: '',
      nationality: '',
      enrollment_status: '',
      profile_photo: null
    };
  }

  closeModal(): void {
    this.resetForm();
    this.isVisible = false;
    this.isEditing = false;
    this.studentToEdit = null;
  }







  
}
