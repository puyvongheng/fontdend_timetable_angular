import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-management',
  imports: [
    SharedModule,
  
  ],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent {
  faculties: any[] = []; // List of faculties
  newFacultyName: string = ''; // Input for adding a new faculty
  alertMessage: string | null = null; // Alert message for feedback
  alertType: 'success' | 'danger' | null = null; // Alert type for success or error styling

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchFaculties();
  }

  // Fetch faculties from the API
  fetchFaculties(): void {
    this.apiService.getFaculties().subscribe({
      next: (response) => {
        this.faculties = response;
      },
      error: () => {
        this.showAlert('Failed to load faculties', 'danger');
      }
    });
  }

  // Add a new faculty
  addFaculty(): void {
    if (!this.newFacultyName.trim()) {
      this.showAlert('Faculty name is required', 'danger');
      return;
    }

    this.apiService.createFaculties('faculties', { name: this.newFacultyName }).subscribe({
      next: () => {
        this.newFacultyName = '';
        this.showAlert('Faculty added successfully', 'success');
        this.fetchFaculties();
      },
      error: () => {
        this.showAlert('Failed to add faculty', 'danger');
      }
    });
  }

  // Edit an existing faculty
  editFaculty(faculty: any): void {
    const newName = prompt('Enter new faculty name:', faculty.name);
    if (!newName || newName === faculty.name) {
      this.showAlert('No changes made', 'danger');
      return;
    }

    this.apiService.updateFaculties('faculties', faculty.id, { name: newName }).subscribe({
      next: () => {
        this.showAlert('Faculty updated successfully', 'success');
        this.fetchFaculties();
      },
      error: () => {
        this.showAlert('Failed to update faculty', 'danger');
      }
    });
  }

  // Delete a faculty
  deleteFaculty(id: number): void {
    if (!confirm('Are you sure you want to delete this faculty?')) return;

    this.apiService.delete('faculties', id).subscribe({
      next: () => {
        this.showAlert('Faculty deleted successfully', 'success');
        this.fetchFaculties();
      },
      error: (err) => {
        if (err.status === 400) {
          this.showAlert('Cannot delete faculty because it is referenced by other records.', 'danger');
        } else {
          this.showAlert('Failed to delete faculty', 'danger');
        }
      }
    });
  }

  // Display alert messages
  private showAlert(message: string, type: 'success' | 'danger'): void {
    this.alertMessage = message;
    this.alertType = type;

    setTimeout(() => {
      this.alertMessage = null;
      this.alertType = null;
    }, 3000);
  }
}
